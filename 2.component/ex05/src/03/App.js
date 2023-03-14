import React, { Component, useState } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    constructor() {
        super(...arguments);
        let now = new Date(); 
        this.state = {
           hours: now.getHours(),
           minutes: now.getMinutes(),
           seconds: now.getSeconds(),
           session: now.getHours() < 12 ? 'am' : 'pm'
        }
    }
    render() {
        return (
            <div className='clock-display'>
                <h2>ex05 - Component LifeCycle Practice</h2>
                    <Clock hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds} session={this.state.session} />
            </div>
        );
    }
}