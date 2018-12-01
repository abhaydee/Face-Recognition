import React from "react";
import 'tachyons';
const FaceRecognition = ({ ImageUrl }) => {
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img alt="" width="300px" height="auto" src={ImageUrl}></img>
            </div>
        </div>
    );
};

export default FaceRecognition;
