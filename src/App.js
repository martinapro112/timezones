import React, { Component } from 'react';
import moment from 'moment-timezone';

import Digital  from './ClockParts/Digital';
import Analog   from './ClockParts/Analog';
import City     from './ClockParts/City';
import Day      from './ClockParts/Day';
import Mountains from './Background/Mountains';

import TypeSwitch       from './Settings/TypeSwitch';
import TimeSwitch       from './Settings/TimeSwitch';
import DatePicker       from './Settings/DatePicker';

class App extends Component {
    state = {
        time: null,
        allZones: moment.tz.names(),
        analog: true,
        current: true,
        dateTime: moment()
    }
    
    componentDidMount = () => {
        this.timer = setInterval(this.tick, 50);
    }

    componentWillUnmount = () => {
        clearInterval(this.timer);
    }

    tick = () => {
        if (this.state.current) {
            this.setState({ time: new Date() });
        }
    }

    handleTypeSwitchChange = (analog) => {
        this.setState({ analog: analog });
    }

    handleTimeSwitchChange = (current) => {
        this.setState({ current: current, dateTime: moment() });
    }

    handleDateTimeChange = (newDateTime) => {
        this.setState({ dateTime: newDateTime, time: newDateTime });
    }

    render() {
        let zones = [
            { value: 'Europe/Prague',       city: 'Prague' },
            { value: 'America/New_York',    city: 'New York' },
            { value: 'Europe/London',       city: 'London' },
            { value: 'Asia/Tokyo',          city: 'Tokyo' }
        ];
        let clocks = [];

        zones.forEach(zone => {
            let time = moment(this.state.time).tz(zone.value);
            let clock =
                this.state.analog ?
                <Analog time={ time } showSeconds={ this.state.current } /> :
                <Digital time={ time } showSeconds={ this.state.current } />;
            clocks.push(
                <div className="clock" key={ zone.value }>
                    { clock }
                    <Day time={ time } />
                    <City city={ zone.city } />
                </div>
            );
        });

        return (
            <div id="app">
                <Mountains />
                <div id="content">
                    <div id="settings">
                        <TypeSwitch change={ this.handleTypeSwitchChange } analog={ this.state.analog } />
                        <TimeSwitch change={ this.handleTimeSwitchChange } current={ this.state.current } />
                        { this.state.current ? null : <DatePicker change={ this.handleDateTimeChange } dateTime={ this.state.dateTime } /> }
                    </div>
                    <div id="clocks" className={ this.state.current ? 'current' : 'set' }>
                        { clocks }
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
