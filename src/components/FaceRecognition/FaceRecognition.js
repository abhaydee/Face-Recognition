import React from "react";
import 'tachyons';
const FaceRecognition = ({ ImageUrl }) => {
    return (
        <div className="center">
            <img alt="" src={ImageUrl}></img>
        </div>
    );
};

export default FaceRecognition;
