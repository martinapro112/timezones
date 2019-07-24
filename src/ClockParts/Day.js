import React from 'react';

const Day = (props) => {
    return (
        <div className="clock-date">
            { props.time.format('Do of MMMM') }
        </div>
    );
}

export default Day;