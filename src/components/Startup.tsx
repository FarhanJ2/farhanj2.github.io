import React, { useEffect, useState } from "react";
import apple from "../assets/images/apple-logo.png";
import startupSound from "../assets/audio/mac-startup.wav";
import "../layouts/startup.css";
import TerminalContainer from "./TerminalContainer";
import { TiPower } from "react-icons/ti";

const enumValue = (name: string) => Object.freeze({ toString: () => name });
const State = Object.freeze({
    ON_FIRST_LOAD: enumValue("State.ON_FIRST_LOAD"),
    ON_LOADING: enumValue("State.ON_LOADING"),
    ON_LOADED: enumValue("State.ON_LOADED"),
});

const Startup = () => {
    const [state, setState] = useState(State.ON_FIRST_LOAD);

    const startSequence = () => {
        setState(State.ON_LOADING);
        const audio = new Audio(startupSound);
        audio.play();

        setTimeout(() => {
            setState(State.ON_LOADED);
        }, 4000); // for dev set 1 otherwise normal is 4000 (4s)
    };

    const [isHovered, setIsHovered] = useState(false);
    return state === State.ON_FIRST_LOAD ? (
        <div className="view">
            <img className="logo" src={apple.src} alt="apple logo" />
            <br />
            <br />
            <button
                style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                }}
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
                onClick={startSequence}
            >
                <TiPower
                    style={{
                        color: isHovered ? "red" : "white",
                        padding: "5px",
                        transition: "color 0.3s ease",
                    }}
                    size={50}
                />
            </button>
        </div>
    ) : state === State.ON_LOADING ? (
        <div className="view">
            <img className="logo" src={apple.src} alt="apple logo" />
            <br />
            <div className="loading-bar"></div>
        </div>
    ) : state === State.ON_LOADED ? (
        <TerminalContainer />
    ) : (
        <h1>Something went wrong. Please reload the page</h1>
    );
};

export default Startup;
