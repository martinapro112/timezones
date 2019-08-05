import React    from 'react';

const AddIcon = (props) => {
    return (
        <div className={ 'add-clock ' + (props.analog ? 'analog' : 'digital') } onClick={ props.openAddList }>
            <div className="icon-wrapper">
                <div className="icon" />
            </div>
        </div>
    );
}

export default AddIcon;