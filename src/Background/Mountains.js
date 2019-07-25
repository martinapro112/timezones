import React    from 'react';
import Mountain from './Mountain';

const Mountains = (props) => {
    let mountains = [];
    for (var i = 0; i < 32; i++) {
        mountains.push(<Mountain key={ 'mountain_' + i } />);
    }

    return (
        <div id="mountains">
            { mountains }
        </div>
    );
}

export default Mountains;