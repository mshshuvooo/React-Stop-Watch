import React, { Component } from 'react'
import Digit from './digit/Digit'

class CountDown extends Component {
    render() {
        return (
            <div className="d-flex">
                <Digit color="#1ab9fa" value={this.props.time.min} />
                <Digit color="#e66e01" value={this.props.time.sec} />
                <Digit color="#4a1475" value={this.props.time.mili} />
            </div>
        )
    }
}

export default CountDown;
