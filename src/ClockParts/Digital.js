import React from 'react';

const Digital = (props) => {
    return (
        <div className="clock-digital">
            { props.time.format('HH:mm:ss') }
        </div>
    );
}

export default Digital;