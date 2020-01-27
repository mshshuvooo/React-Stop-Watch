import React, { Component } from 'react'

class Laps extends Component {
    render() {
        return (
            <ul className="list-group list-group-flush">
                { this.props.laps.map((lap, index) => {
                    return (
                        <li key={ index } className="list-group-item">
                            <h4>
                                <span className="text-dark mr-1">Minute:</span>
                                <span className="text-danger mr-3">{ lap.min }</span>
                                <span className="text-dark mr-1">Second: </span>
                                <span className="text-danger mr-3">{ lap.sec }</span>
                                <span className="text-dark mr-1">Mili: </span>
                                <span className="text-danger">{ lap.mili }</span>
                            </h4>
                        </li>
                    )
                }) }
            </ul>
        )
    }
}

export default Laps;
