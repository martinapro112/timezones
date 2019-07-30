import React from 'react';

const Digital = (props) => {
    return (
        <div className="digital">
            <div className="close" onClick={ props.click } />
            <div className="content">
                { props.showSeconds ? props.time.format('HH:mm:ss') : props.time.format('HH:mm') + ':00' }
            </div>
        </div>
    );
}

export default Digital;