import React, { Component } from 'react'

//styles
import header from '../styles/header.css'

export class Header extends Component {
    constructor(){
        super()

        this.state= {
            fName:'First Name',
            editFName:false,
            lname:'Last Name',
            editLName:false,
            email:'Please enter your email',
            emailEdit:false,
            phone:'Please enter your phone number',
            phoneEdit:false,
        }

        //methods
        //fName methods
        this.openFnameEdit = this.openFnameEdit.bind(this)
        this.closeFnameEdit =this.closeFnameEdit.bind(this)
        this.handleFnameChange = this.handleFnameChange.bind(this)
        //lName methods
        this.openLnameEdit =this.openLnameEdit.bind(this)
        this.closeLNameEdit =this.closeLNameEdit.bind(this)
        this.handleLNameChange = this.handleLNameChange.bind(this)
        //email methods
        this.openEmailEdit = this.openEmailEdit.bind(this)
        this.closeEmailEdit= this.closeEmailEdit.bind(this)
        this.handleEmailChange= this.handleEmailChange.bind(this)
        //phone methods
        this.openPhoneEdit = this.openPhoneEdit.bind(this)
        this.closePhoneEdit = this.closePhoneEdit.bind(this)
        this.handlePhoneChange = this.handlePhoneChange.bind(this)





    }
    openFnameEdit(){
        this.setState({
            editFName:true
        })
    }
    closeFnameEdit(){
        this.setState({
            editFName:false
        })
    }
    handleFnameChange(e){
        this.setState({
            fName: e.target.value

        })

    }
    openLnameEdit(){
        this.setState({
            editLName:true
        })
    }
    closeLNameEdit(){
        this.setState({
            editLName:false
        })
    }
    handleLNameChange(e){
        this.setState({
            lname: e.target.value
        })
    }
    openEmailEdit(){
        this.setState({
            emailEdit:true
        })
    }
    closeEmailEdit(){
        this.setState({
            emailEdit:false
        })
    }
    handleEmailChange(e){
        this.setState({
            email: e.target.value
        })
    }

    openPhoneEdit(){
        this.setState({
            phoneEdit:true
        })
    }
    closePhoneEdit(){
        this.setState({
            phoneEdit:false
        })
    }
    handlePhoneChange(e){
        this.setState({
            phone: e.target.value
        })
    }



    render() {
        return (
            <div id="header">
                <div id='header-contents'>
                    <div className='header-inputs' onClick={this.openFnameEdit} >
                        {this.state.editFName? 
                        <input type='text'
                            onChange={this.handleFnameChange}
                            autoFocus 
                            onFocus={e => e.target.select()}
                            value={this.state.fName}
                            onBlur={this.closeFnameEdit} />:
                        <label>{this.state.fName}</label>
                    }
                    </div>
              
                    <div className='header-inputs' onClick={this.openLnameEdit}>
                        {this.state.editLName ? 
                        <input type='text' 
                            onBlur={this.closeLNameEdit} 
                            autoFocus 
                            onFocus={e => e.target.select()}
                            value={this.state.lname}
                            onChange={this.handleLNameChange} />:
                        <label>{this.state.lname}</label>}

                    </div>
                    <div className='header-inputs' onClick={this.openEmailEdit}>
                        {this.state.emailEdit?
                        <input type='text' 
                        autoFocus
                        onFocus={e => e.target.select()}
                        onBlur={this.closeEmailEdit}
                        onChange={this.handleEmailChange}
                        value={this.state.email} />:
                        <label>{this.state.email}</label>}
                    </div>

                    <div className='header-inputs' onClick={this.openPhoneEdit}>
                        {this.state.phoneEdit? 
                        <input type='text'
                        onFocus={e => e.target.select()}
                        autoFocus
                        value={this.state.phone}
                        onChange={this.handlePhoneChange}
                        onBlur={this.closePhoneEdit}/>:
                        <label>{this.state.phone}</label>}

                    </div>
                    

                </div>
                
            </div>
        )
    }
}

export default Header
