import React    from 'react';
import Datetime from 'react-datetime';
import '../../node_modules/react-datetime/css/react-datetime.css';

const DatePicker = (props) => {
    return (
        <div className="setting date-picker">
            <Datetime dateFormat="YYYY/MM/DD" timeFormat="HH:mm" value={ props.dateTime } onChange={ props.change } />
        </div>
    );
}

export default DatePicker;