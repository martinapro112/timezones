import React from 'react';

const Digital = (props) => {
    return (
        <div className="digital">
            { props.time.format('HH:mm:ss') }
        </div>
    );
}

export default Digital;