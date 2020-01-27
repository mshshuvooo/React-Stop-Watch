import React, { Component } from 'react'
import './Title.css'

class Title extends Component {


    state = {
        title: 'This is a dummy title',
        inputBox: false
    }

    editHandelar(event){
        this.setState({
            ...this.state,
            inputBox: true
        })
    }

    inputChange(event){
        this.setState({
            ...this.state,
            title: event.target.value
        })
    }

    pressEnter(event){
        if(event.key === 'Enter'){
            this.setState({
                ...this.state,
                inputBox: false
            })
        }
    }

    unFocus(event){
        this.setState({
            ...this.state,
            inputBox: false
        })
    }
    

    render() {
        
        let titleOutput = null ;

        if(this.state.inputBox){
            titleOutput = (
                <div className="section-title-input">
                    <input 
                        className="form-control" 
                        type="text" 
                        value = { this.state.title } 
                        onChange = { (event) => this.inputChange(event) }
                        onKeyPress = { (event) => this.pressEnter(event) }
                        onBlur = { (event) => this.unFocus(event) }
                    />
                </div>
            )
        }else{
            titleOutput = (
                <div className="d-flex section-title">
                    <h1 className="display-4">{this.state.title}</h1>
                    <span onClick={(event) => this.editHandelar(event) } className="ml-auto edit-icon">
                        <i className="fa fa-pencil"></i>
                    </span>
                </div>
            )
        }

        return (
            <div>
               {titleOutput} 
            </div>
        )
    }
}

export default Title;
