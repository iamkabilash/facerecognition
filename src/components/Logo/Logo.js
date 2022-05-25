import React from "react";
import 'tachyons';
import Tilt from 'react-tilt'
import './Logo.css'
import brain from './brain.png'

const Logo = () =>{
    return(
        <div className="mh4 pv0">
            <Tilt className="Tilt br4 shadow-2" options={{ max : 35 }} style={{ height: 120, width: 120 }} >
            <div className="Tilt-inner pa3">
                <img style = {{paddingTop: "10px"}} src={brain} alt="brain-logo" />
            </div>
            </Tilt>
        </div>
    );
}

export default Logo;