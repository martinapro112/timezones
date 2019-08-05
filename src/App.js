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
import AddIcon          from './Settings/AddIcon';
import AddList          from './Settings/AddList';

class App extends Component {
    state = {
        time: null,
        allZones: moment.tz.names(),
        analog: true,
        current: true,
        addList: false,
        dateTime: moment(),
        zones: [
            { value: 'Europe/Prague',       city: 'Prague' },
            { value: 'America/New_York',    city: 'New York' },
            { value: 'Europe/London',       city: 'London' },
            { value: 'Asia/Tokyo',          city: 'Tokyo' }
        ]
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

    handleOpenAddList = () => {
        this.setState({ addList: true });
    }

    handleAddClock = (selected) => {
        let zones = this.state.zones;
        let parsedText = selected.split('/');
        zones.push({ value: selected, city: parsedText[parsedText.length - 1].replace(/_/g, ' ') });
        this.setState({ zones: zones, addList: false });
    }

    removeClock = (i) => {
        let zones = this.state.zones;
        zones.splice(i, 1);
        this.setState({ zones: zones });
    }

    render() {
        let clocks = [];

        this.state.zones.forEach((zone, i) => {
            let time = moment(this.state.time).tz(zone.value);
            let clock =
                this.state.analog ?
                <Analog time={ time } showSeconds={ this.state.current } click={ () => { this.removeClock(i); }} /> :
                <Digital time={ time } showSeconds={ this.state.current } click={ () => { this.removeClock(i); }} />;
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
                        {
                            this.state.addList ?
                            <AddList allZones={ this.state.allZones } addClock={ this.handleAddClock } /> :
                            <AddIcon openAddList={ this.handleOpenAddList } analog={ this.state.analog } />
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
