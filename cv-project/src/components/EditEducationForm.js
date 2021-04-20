import React, { Component } from 'react'

//style
import style from '../styles/editEducation.css'

export class EditEducationForm extends Component {
    constructor(props){
        super(props)
        this.state={
            university:'Please enter University or School Name',
            city:'Please enter the name of your city',
            from:'Date',
            to:'Date',
            achievements:'Enter a small description about yourself or some'+
            ' achievements '

        }
        //methods
        this.handleUniversityChange = this.handleUniversityChange.bind(this)
        this.handleCityChange = this.handleCityChange.bind(this)
        this.handleFromChange = this.handleFromChange.bind(this)
        this.handleToChange = this.handleToChange.bind(this)
        this.handleAchievementsChange = this.handleAchievementsChange.bind(this)
    }

    //methods
    handleUniversityChange(e){
        this.setState({
            university:e.target.value
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
    handleAchievementsChange(e){
        this.setState({
            achievements:e.target.value
        })
    }



    render() {
        const {close,save} = this.props;
        return (
            <div>
                {/* <!-- The Modal --> */}
                <div id="educationModal" className="modal">
                {/* 
                    <!-- Modal content --> */}
                    <div className="modal-content">
                        <div className="modal-header">
                
                        <h3>Edit education form</h3>
                        </div>
                        <div className="modal-body">
                            <label>University or School Name </label>
                            <br></br>
                            <input 
                            onChange={this.handleUniversityChange}
                            placeholder={this.state.university} />
                            <br></br>

                            <label>City</label>
                            <br></br>
                            <input
                            placeholder={this.state.city}
                            onChange={this.handleCityChange}
                            /> 
                            <br></br>
                            <div className='fromTo'>
                                <div >
                                    <label>From</label>
                                    <input
                                    onChange={this.handleFromChange}
                                    placeholder={this.state.from}
                                    />
                                </div>
                                <div>
                                    <label>To</label>
                                    <br></br>
                                    <input
                                    onChange={this.handleToChange}
                                    placeholder={this.state.to}
                                    ></input>
                                </div>
                            </div>
                            <label>Descriptions or Achievements</label>
                            <br></br>
                            <input
                            id='descriptionBox'
                            onChange={this.handleAchievementsChange}
                            placeholder={this.state.achievements}
                            />
                            <br></br>
                            <br></br>


                        <button
                        onClick={()=>close()}
                        >
                            Cancel
                        </button>
                        <button
                        onClick={()=> {
                            save(this.state.university,this.state.city,this.state.from,this.state.to,this.state.achievements)
                            close()
                        }}
                        >
                            Save
                        </button>
                        </div>
          
                    </div>

                </div>

                
            </div>
        )
    }
}

export default EditEducationForm
