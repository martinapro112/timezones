import React from 'react';

const Analog = (props) => {
    let hours = Number(props.time.format('HH'));
    let minutes = Number(props.time.format('mm'));
    let seconds = Number(props.time.format('ss'));

    let hourDegrees = hours * 30 + (minutes / 12) * 6;
    let minuteDegrees = minutes * 6 + (seconds / 10);
    let secondDegrees = seconds * 6;

    let dots = [];
    for (var i = 0; i < 60; i++) {
        dots.push(
            <div className="clock-analog-dot-wrapper" style={{ transform: 'rotate(' + i * 6 + 'deg)' }}>
                <div className={ 'clock-analog-dot ' + ((i % 5) === 0 ? 'clock-analog-dot-bigger' : 'clock-analog-dot-normal') } />
            </div>
        );
    }

    return (
        <div className="clock-analog">
            <div className="clock-analog-hours" style={{ transform: 'rotate(' + hourDegrees + 'deg)' }}>
                <div className="clock-analog-stick"></div>
            </div>
            <div className="clock-analog-minutes" style={{ transform: 'rotate(' + minuteDegrees + 'deg)' }}>
                <div className="clock-analog-stick"></div>
            </div>
            <div className="clock-analog-seconds" style={{ transform: 'rotate(' + secondDegrees + 'deg)' }}>
                <div className="clock-analog-stick-seconds"></div>
            </div>
            <div className="clock-analog-center" />
            { dots }
        </div>
    );
}

export default Analog;