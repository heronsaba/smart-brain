import React from "react";
import './Logo.css';
import face from './face.png';
import Tilt from 'react-parallax-tilt';


const Logo = () => {
    return (
        <div className="center ma4 mt0">
            <Tilt>
                <div className="br2 shadow-2 Tilt" options={{ max: 25 }} style={{ height: 150, width: 150 }} >
                    <div className="pa3"> <img alt="logo" style={{ paddingTop: '5px' }} src={face} /></div>
                </div>
            </Tilt>


        </div>


    )
}

export default Logo; 