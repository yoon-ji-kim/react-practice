import React, {Component} from 'react';
import './assets/scss/Clock.scss';

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: this.props.hours,
            minutes : this.props.minutes,
            seconds : this.props.seconds,
            session : this.props.seconds
        }
    }
    
    componentDidMount() {
        this.timerId = setInterval(() => {
            let now = new Date(); 
            this.setState({
                hours: now.getHours(),
                minutes : now.getMinutes(),
                seconds : now.getSeconds(),
                session : now.getHours() < 12 ? 'am' : 'pm'
            })
        }, 1000)
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    render() {
        return (
            <div className="clock-field">
                <div>
                    <p className="hours">{this.state.hours}</p>
                    <p className="placeholder"></p>
                </div>
                <div className="colon">
                    <p>:</p>
                </div>
                <div className="numbers">
                    <p>{this.state.minutes}</p>
                    <p className="placeholder"></p>
                </div>
                <div className="colon">
                    <p>:</p>
                </div>
                <div className="numbers">
                    <p>{this.state.seconds}</p>
                    <p className="placeholder"></p>
                </div>
                <div className="AmPm">
                    <div>
                        <p className={this.props.session === 'am' ? 'on' : 'off'}>am</p>
                    </div>
                    <div>
                        <p className={this.props.session === 'pm' ? 'on' : 'off'}>pm</p>
                    </div>
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        console.log('Clock', 'componentWillUnmount');
    }
}