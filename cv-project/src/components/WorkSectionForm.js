import React, { Component } from 'react'

export class WorkSectionForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'Please enter your company name',
            city:'Please enter the name of your city',
            from:'Date',
            to:'Date',
            role:'Role',
            description:'Enter a description of your job'

        }

        //methods binding
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleFromChange = this.handleFromChange.bind(this);
        this.handleToChange = this.handleToChange.bind(this);
        this.handleRoleChange = this.handleRoleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);



    }
    //methods
    handleNameChange(e){
        this.setState({
            name:e.target.value
        })
    }
    handleCityChange(e){
        this.setState({
            city:e.target.value
        })
    }
    handleFromChange(e){
        this.setState({
            from:e.target.value
        })
    }
    handleToChange(e){
        this.setState({
            to:e.target.value
        })
    }
    handleRoleChange(e){
        this.setState({
            role:e.target.value
        })
    }
    handleDescriptionChange(e){
        this.setState({
            description:e.target.value
        })
    }




    render() {
        const {close,save} = this.props
        return (
            <div>
                <div className='modal'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h3>Work Form</h3>
                            <div className='modal-body'>
                                
                                <label>Work Section</label>
                                <br></br>
                                <label>Company Name:</label>
                                <br></br>
                                <input 
                                onChange={this.handleNameChange}
                                placeholder={this.state.name} />
                                <br></br>
                                <label>City:</label>
                                <br></br>
                                <input
                                onChange={this.handleCityChange}
                                placeholder={this.state.city} />
                                <br></br>
                                <div className="fromTo">
                                    <div>
                                        <label>From</label>
                                        <input
                                        onChange={this.handleFromChange}
                                        placeholder={this.state.from} />


                                    </div>
                                    <div>
                                        <label>To</label>
                                        <br></br>
                                        <input
                                        onChange={this.handleToChange}
                                        placeholder={this.state.to} />


                                    </div>
                                </div>

                                <label>Role</label>
                                <br></br>
                                <input
                                onChange={this.handleRoleChange}
                                placeholder={this.state.role} />
                                <br></br>
                                <label>Description:</label>
                                <br></br>
                                <input
                                id='jobDescription'
                                onChange={this.handleDescriptionChange}
                                placeholder={this.state.description} />






                                <br></br>
                                <br></br>


                                <button onClick={()=>close()}>Cancel</button>
                                <button onClick={ () => { 
                                    save(this.state.name, this.state.city, this.state.from, this.state.to, this.state.role, this.state.description);
                                    close();
                                }}>Save</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkSectionForm
