import React from 'react';

const Day = (props) => {
    return (
        <div className="day">
            { props.time.format('Do of MMMM') }
        </div>
    );
}

export default Day;