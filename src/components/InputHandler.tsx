import React, { useState, useRef, useEffect } from "react";
import { VscTriangleUp, VscChevronRight } from "react-icons/vsc";
import GetProjects from "./cmds/GetProjects.tsx";
import GetSkills from "./cmds/GetSkills.tsx";
import Bio from "./cmds/GetBio.tsx";

const InputHandler = () => {
    const [command, setCommand] = useState<string>("");
    const [prevCommands, setPrevCommands] = useState<string[]>([]);
    const [currentCommand, setCurrentCommand] = useState<string>("bio");
    const [commandOutput, setCommandOutput] = useState<JSX.Element[]>([]);
    const outputContainerRef = useRef<HTMLDivElement>(null);
    const lastCommandRef = useRef<HTMLDivElement>(null);

    const [currentCommandIndex, setCurrentCommandIndex] = useState<number>(0);

    useEffect(() => {
        if (lastCommandRef.current) {
            lastCommandRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [commandOutput]);

    const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        console.log("Command submitted:", command);
        setCommandOutput((prevOutput) => [
            ...prevOutput,
            renderComponent(command),
        ]);
        setCurrentCommand(command);
        setPrevCommands((prevCommands) => [...prevCommands, command]);
        setCommand("");
    };

    const getDate = () => {
        const date = new Date();

        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
        const dayName = days[date.getDay()];
        const monthName = months[date.getMonth()];
        const day = String(date.getDate()).padStart(2, ' '); // Pad single digit days with a space
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        const year = date.getFullYear();
    
        const timezone = date.toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2];
    
        return `${dayName} ${monthName} ${day} ${hours}:${minutes}:${seconds} ${timezone} ${year}`;
    }

    const renderComponent = (command: string) => {
        switch (command.toLowerCase()) {
            case "date":
                return (
                    <div className="text-input">
                        {getDate()}
                    </div>
                );
            case "help":
                return (
                    <div className="text-input">
                        Try "welcome", "date", "bio", "projects", or "skills".
                    </div>
                );
            case "bio":
                return <Bio />;
            case "projects":
                return <GetProjects />;
            case "skills":
                return <GetSkills />;
            case "clear":
                setCommandOutput([]);
                return <div className="text-input">Terminal cleared.</div>;
            default:
                return (
                    <div className="text-input">
                        Command not recognized. Try "welcome", "date", "bio",
                        "projects", or "skills".
                    </div>
                );
        }
    };

    return (
        <div>
            <div className="command-output" ref={outputContainerRef}>
                {commandOutput.map((output, index) => (
                    <div
                        key={index}
                        ref={
                            index === commandOutput.length - 1
                                ? lastCommandRef
                                : null
                        }
                    >
                        {output}
                    </div>
                ))}
            </div>
            <div className="terminal-inputfield">
                <div style={{ display: "flex", alignItems: "center" }}>
                    <VscTriangleUp size={25} color="white" />
                    <h1 className="text-input">
                        ~/dev/farhanj2.github.io/{currentCommand}
                    </h1>
                </div>
                <VscChevronRight size={25} />
                <input
                    placeholder="Type a command..."
                    className="terminal-input"
                    type="text"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSubmit(e);
                        }
                        if (e.key === "ArrowUp") {
                            if (e.key === "ArrowUp") {
                                if (currentCommandIndex > 0) {
                                    setCurrentCommandIndex(currentCommandIndex - 1);
                                    setCommand(prevCommands[currentCommandIndex - 1]);
                                } else {
                                    setCurrentCommandIndex(prevCommands.length);
                                    setCommand(prevCommands[prevCommands.length - 1]);
                                }
                            }
                        }
                        if (e.key === "ArrowDown") {
                            setCommand("");
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default InputHandler;
