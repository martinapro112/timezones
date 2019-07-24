import React    from 'react';
import Switch   from 'react-switch';

const TypeSwitch = (props) => {
    return (
        <Switch
            className="type-switch"
            onChange={ props.change }
            checked={ props.analog }
            uncheckedIcon={<div className="option right">Digital</div>}
            checkedIcon={<div className="option left">Analog</div>}
            offColor="#fff"
            onColor="#fff"
            offHandleColor="#bc986a"
            onHandleColor="#bc986a"
            handleDiameter={20}
            width={140}
            height={40}
        />
    );
}

export default TypeSwitch;