import React, { useState, useEffect, useRef } from "react";
import { VscChevronRight } from "react-icons/vsc";
import { VscTriangleUp } from "react-icons/vsc";

export default function InputHandler() {
    const [command, setCommand] = useState<string>("");
    const [prevCommands, setPrevCommands] = useState<string[]>([]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Subbmited: ", command);
        setPrevCommands([...prevCommands, command]);
        setCommand("");
    };

    return (
        <div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <VscTriangleUp size={25} color="white" style={{ paddingLeft: 10 }} />
                <h1 className="text-input">~/Programming/farhanj2.github.io</h1>
            </div>
            <div className="terminal-inputfield">
                <VscChevronRight size={25} />
                <input
                    className="terminal-input"
                    type="text"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSubmit(e);
                        }
                    }}
                />
            </div>
        </div>
    );
}
