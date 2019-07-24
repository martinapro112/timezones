import React, { Component } from 'react';
import moment from 'moment-timezone';

import Digital  from './ClockParts/Digital';
import Analog   from './ClockParts/Analog';
import City     from './ClockParts/City';
import Day      from './ClockParts/Day';

import TypeSwitch from './Settings/TypeSwitch';

class App extends Component {
    state = {
        time: null,
        timer: null,
        allZones: moment.tz.names(),
        analog: true
    }
    
    componentDidMount = () => {
        this.timer = setInterval(this.tick, 50);
    }

    componentWillUnmount = () => {
        clearInterval(this.timer);
    }

    tick = () => {
        this.setState({ time: new Date() });
    }

    handleSwitchChange = (checked) => {
        this.setState({ analog: checked });
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
            let time = moment().tz(zone.value);
            let clock = this.state.analog ? <Analog time={ time } /> : <Digital time={ time } />;
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
                <TypeSwitch change={ this.handleSwitchChange } analog={ this.state.analog } />
                <br />
                { clocks }
                <br />
                <div className="green square" />
                <div className="blue square" />
                <div className="beige square" />
                <div className="brown square" />
                <div className="yellow square" />
            </div>
        );
    }
}

export default App;
