import React, { Component } from 'react'

import uniquid from 'uniqid'

//components
import EditEducationForm from './EditEducationForm'


//style
import education from'../styles/education.css'

export class EducationSection extends Component {
    constructor(){
        super()
        this.state = {
            editEducation:false,
            itemsNumber:0,
            education:[]

        }
        //methods
        this.openEditEducationForm = this.openEditEducationForm.bind(this)
        this.closeEditEducationForm =this.closeEditEducationForm.bind(this)
        this.educationFormSave = this.educationFormSave.bind(this)
        this.deleteEducationItem = this.deleteEducationItem.bind(this)


    }

    //methods
    openEditEducationForm(){
        this.setState({
            editEducation:true
        })

    }
    closeEditEducationForm(){
        this.setState({
            editEducation:false
        })
    }
    educationFormSave(university,city,from,to,description){

        if(this.state.itemsNumber>=4){
            alert('You have enter the maximun number of items allowed')
        }

        else{
            this.setState(prevState =>({
                itemsNumber: prevState.itemsNumber+1,
                education:[...prevState.education,[university,city,from,to,description]]
            }),()=>console.log(this.state.education))
    
        }


    }
    deleteEducationItem(index){
        let arr= this.state.education;
        arr.splice(index,1)
        this.setState(prevState =>({
            education:arr,
            itemsNumber:prevState.itemsNumber-1
        }))

    }



    render() {
        return (
            <div>
                <h3>Education section</h3>
                <label className='note'>(Max 4)</label>
                <button onClick={this.openEditEducationForm}>
                    + Education
                </button>
                {this.state.editEducation?
                <EditEducationForm 
                save={this.educationFormSave}
                close={this.closeEditEducationForm} />:
                null}

                {this.state.itemsNumber>0?
                this.state.education.map((item,index) =>{
                    return <div className='educationList'
                    key={uniquid()}> 
                    <div className='educationItem'>
                    
                    {item[0]}
                    <br></br>
                    {item[1]}
                    <br></br>
                    From {item[2]} To {item[3]}
                    <br></br>
                    {item[4]}
                    <br></br>
                   
                    </div>
                    <div className='deleteItemButton'>
                        <button onClick={()=>this.deleteEducationItem(index)}>
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

export default EducationSection
