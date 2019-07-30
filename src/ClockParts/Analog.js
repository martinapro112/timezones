import React from 'react';

const Analog = (props) => {
    let hours = Number(props.time.format('HH'));
    let minutes = Number(props.time.format('mm'));
    let seconds = props.showSeconds ? Number(props.time.format('ss')) : 0;

    let hourDegrees = hours * 30 + (minutes / 12) * 6;
    let minuteDegrees = minutes * 6 + (seconds / 10);
    let secondDegrees = seconds * 6;

    let dots = [];
    for (var i = 0; i < 60; i++) {
        dots.push(
            <div className="dot-wrapper" style={{ transform: 'rotate(' + i * 6 + 'deg)' }} key={ i }>
                <div className={ 'dot ' + ((i % 5) === 0 ? 'bigger' : 'normal') } />
            </div>
        );
    }

    return (
        <div className="analog">
            <div className="close" onClick={ props.click } />
            <div className="hours" style={{ transform: 'rotate(' + hourDegrees + 'deg)' }}>
                <div className="stick"></div>
            </div>
            <div className="minutes" style={{ transform: 'rotate(' + minuteDegrees + 'deg)' }}>
                <div className="stick"></div>
            </div>
            <div className="seconds" style={{ transform: 'rotate(' + secondDegrees + 'deg)' }}>
                <div className="stick seconds-stick"></div>
            </div>
            <div className="center" />
            { dots }
        </div>
    );
}

export default Analog;