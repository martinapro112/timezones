import React    from 'react';
import Switch   from 'react-switch';

const TimeSwitch = (props) => {
    return (
        <Switch
            className="setting switch"
            onChange={ props.change }
            checked={ props.current }
            uncheckedIcon={<div className="option right">Set time</div>}
            checkedIcon={<div className="option left">Current&nbsp;time</div>}
            offColor="#fff"
            onColor="#fff"
            offHandleColor="#bc986a"
            onHandleColor="#bc986a"
            handleDiameter={20}
            width={180}
            height={40}
        />
    );
}

export default TimeSwitch;