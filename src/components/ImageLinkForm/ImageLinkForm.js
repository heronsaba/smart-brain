import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className="f3">
                {'This Magic Software will detect faces in your pictures. Give it a try'}
            </p>
            <div className="center">
                <div className="form pa4 br3 shadow-1 center ">
                    <input type='text' className="f4 pa2 w-70 center" onChange={onInputChange} />
                    <button onClick={onButtonSubmit} className="w-30 grow f4 link ph3 pv2 dib">Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm; 