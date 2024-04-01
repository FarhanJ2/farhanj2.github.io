import React, { useEffect } from "react";
import apple from "../assets/images/apple-logo.png";
import startupSound from "../assets/audio/mac-startup.wav";
import "../layouts/startup.css";

const Startup = () => {
    // audio sometiems doenst work???

    useEffect(() => {
        playSound();
    }, []);

    const playSound = () => {
        const audio = new Audio(startupSound);
        audio.play();
    }

    return (
        <div className="view">
            <img className="logo" src={apple.src} alt="apple logo" />
            <br />
            <div className="loading-bar"></div>
        </div>
    );
};

export default Startup;
