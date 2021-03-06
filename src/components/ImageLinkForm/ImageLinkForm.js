import React from "react";
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div className="ma4 mt0">
            <p className="fa3">
                {'This magic brain will detect faces in your pictures.Give it a try.'};
            </p>
            <div className="center">
                <div className="center">
                    <input type="tex" className="f4 pa2 w-70 center" onChange={onInputChange}></input>
                    <button onClick={onButtonSubmit} className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">Detect</button>
                </div>
            </div>
        </div >
    );
};

export default ImageLinkForm;
