import React from 'react';

const Digital = (props) => {
    return (
        <div className="digital">
            { props.showSeconds ? props.time.format('HH:mm:ss') : props.time.format('HH:mm') + ':00' }
        </div>
    );
}

export default Digital;