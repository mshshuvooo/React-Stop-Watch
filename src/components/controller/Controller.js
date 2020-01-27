import React, { Component } from 'react'
import './Controller.css'

class Controller extends Component {

    state ={
        start: true,
        pause: false,
        lap: false,
        reset: false
    }

    startHandler(){
        this.setState({
            ...this.state,
            start: false,
            pause: true,
            lap: true,
        });

        this.props.start();
    }

    pauseHandler(){
        this.setState({
            ...this.state,
            start: true,
            pause: false,
            lap: false,
            reset: true,
        });

        this.props.pause();
    }

    lapHandler(){
        this.props.lap()
    }

    resetHandler(){
        this.setState({
            start: true,
            pause: false,
            lap: false,
            reset: false
        });

        this.props.reset();

    }

    getController(){
        let conOutput = null;

        if( this.state.start && !this.state.reset ){
            conOutput =(
                <div>
                    <button 
                        onClick ={ (event) => this.startHandler(event) }
                        className="btn btn-success btn-lg px-5">Start
                    </button>
                </div>
            )
        }else if( this.state.pause && this.state.lap ){
            conOutput =(
                <div>
                    <button 
                        onClick ={ (event) => this.pauseHandler(event) }
                        className="btn btn-primary btn-lg px-5">Pause
                    </button>
                    <button 
                        onClick ={ (event) => this.lapHandler(event) }
                        className="btn btn-warning btn-lg px-5">Lap
                    </button>
                </div>
            )
        }else if( this.state.start && this.state.reset ){
            conOutput =(
                <div>
                    <button 
                        onClick ={ (event) => this.startHandler(event) }
                        className="btn btn-success btn-lg px-5">Start
                    </button>
                    <button 
                        onClick ={ (event) => this.resetHandler(event) }
                        className="btn btn-danger btn-lg px-5">Reset
                    </button>
                </div>
            )
        }

        return conOutput;
    }

    render() {
        return (
            <div className="controller-btns">
                {this.getController()}
            </div>
        )
    }
}

export default Controller; 
