import React, { Component } from 'react'
import './Digit.css'

class Digit extends Component {
    render() {
        return (
            <div style={{borderColor: this.props.color}} className="digit">
                <h1 style={{color:this.props.color}}>
                    {this.props.value < 10 ? `0${this.props.value}` : this.props.value}
                </h1>
            </div>
        )
    }
}

export default Digit;
