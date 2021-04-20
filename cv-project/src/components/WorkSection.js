import React, { Component } from 'react'

import uniqid from 'uniqid';

//component
import WorkForm from '../components/WorkSectionForm'

//style
import style from '../styles/worksection.css'

export class WorkSection extends Component {

    constructor(props){
        super(props)

        this.state = {
            workForm:false,
            work:[],
            workCount:0

        }
        //methods binding
        this.openWorkForm = this.openWorkForm.bind(this)
        this.closeWorkForm = this.closeWorkForm.bind(this)
        this.saveWorkItem = this.saveWorkItem.bind(this)
        this.deleteWorkItem = this.deleteWorkItem.bind(this)
    }
    //methods
    openWorkForm(){
        this.setState({
            workForm:true

        })

    }
    closeWorkForm(){
        this.setState({
            workForm:false

        })
    }

    saveWorkItem(name, city, from, to, role, description){

        if(this.state.workCount >=2){
            alert("You're only allowed to enter 2 items" )
        }
        else{

        this.setState(prevState => ({
            workCount: prevState.workCount+1,
            work:[...prevState.work, [name, city, from, to, role, description]]
        }), ()=>console.log(this.state.work, this.state.workCount))
    }
}
deleteWorkItem(index){
    let arr=this.state.work
    arr.splice(index,1)
    this.setState( prevState => ({
        work:arr,
        workCount:prevState.workCount-1
    }))

}



    render() {
        return (
            <div>
                <h3>Work Section</h3>
                <label className='note'>(Max 2)</label>
                <button onClick={this.openWorkForm}>
                    + Work
                </button>

                {this.state.workForm?
                <WorkForm save={this.saveWorkItem} close={this.closeWorkForm} />
                :null}
                {this.state.workCount>0?
                this.state.work.map((item,index) =>{
                    return <div key={uniqid()}
                                className='workList'>
                            <div className='workItem'>
                                {item[0]}
                                <br></br>
                                {item[1]}
                                <br></br>
                                {item[2]}
                                <br></br>
                                {item[3]}
                                <br></br>
                                {item[4]}
                                <br></br>
                                {item[5]}
                                <br></br>
                            </div>
                            <div className='deleteItemButton'>
                                <button onClick={()=>this.deleteWorkItem(index)}>
                                    <span className="close">&times;</span>
                                </button>
                            </div>
                       


                        </div>
                })
                :null}
                
                
            </div>
        )
    }
}

export default WorkSection
