import React, {Component} from 'react';
import './assets/scss/Clock.scss';

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    componentDidMount() {
        this.intervalId = setInterval(() => {
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
        clearInterval(this.intervalId);
    }
    
    render() {
        return (
            <div className="clock-field">
                <div>
                    <p className="hours">{('0'+(this.state.hours > 12 ? this.state.hours-12 : this.state.hours)).slice(-2)}</p>
                    <p className="placeholder"></p>
                </div>
                <div className="colon">
                    <p>:</p>
                </div>
                <div className="numbers">
                    <p>{('0'+this.state.minutes).slice(-2)}</p>
                    <p className="placeholder"></p>
                </div>
                <div className="colon">
                    <p>:</p>
                </div>
                <div className="numbers">
                    <p>{('0'+this.state.seconds).slice(-2)}</p>
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