import React from "react";
import 'tachyons';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onSubmit}) =>{
    return(
        <div className="pv5">
            <p className="f3">
                {"This Magic brain can detect faces! Give it a picture to see it."}
            </p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input type="text" className="center f4 pa2 w-70 center" onChange={onInputChange} />
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onSubmit}>Detect</button>
                </div>
            </div>        
        </div>
    );
}

export default ImageLinkForm;