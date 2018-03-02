import React from 'react';

const ImageScore = (props) => {

    return(
        <div>
            Finished/To learn
            <div className="progress">
                <div style={{width: '80%' }} className="progress-bar progress-bar-success progress-bar-striped" />
                <div style={{width: '20%' }} className="progress-bar progress-bar-danger progress-bar-striped" />
            </div>
        </div>
    );
}

export default ImageScore;