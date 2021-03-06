import React from "react";
import 'tachyons';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) =>{
    return(
        <div className="center ma">
            <div className="absolute mt2">
                <img id="inputimage" src={imageUrl} width="500px" height="auto" alt=" face" />  
                <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, left: box.leftCol, bottom: box.bottomRow}}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;