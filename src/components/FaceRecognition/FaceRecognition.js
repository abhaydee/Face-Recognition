import React from "react";
import 'tachyons';
import './Facerecognition.css';
const FaceRecognition = ({ ImageUrl, box }) => {
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img alt="" id="inputimage" width="300px" height="auto" src={ImageUrl}></img>
                <div style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }} className="bounding_box"></div>
            </div>
        </div>
    );
};

export default FaceRecognition;
