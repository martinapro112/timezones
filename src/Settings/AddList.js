import React from 'react';

const AddList = (props) => {
    let options = [];
    props.allZones.forEach(element => {
        let parsedText = element.split('/');
        options.push(<div key={ element } onClick={ () => { props.addClock(element); } }>{ parsedText[parsedText.length - 1].replace(/_/g, ' ') }</div>);
    });
    return (
        <div className="add-clock">
            <div className="select-wrapper">
                { options }
            </div>
        </div>
    );
}

export default AddList;