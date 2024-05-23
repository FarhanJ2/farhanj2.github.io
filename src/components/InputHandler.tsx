import React, { useState } from "react";
import { VscTriangleUp, VscChevronRight } from "react-icons/vsc";
import GetProjects from "./cmds/GetProjects.tsx";
import GetSkills from "./cmds/GetSkills.tsx";
import Bio from "./cmds/GetBio.tsx";

const InputHandler = () => {
    const [command, setCommand] = useState<string>("");
    const [prevCommands, setPrevCommands] = useState<string[]>([]);
    const [currentCommand, setCurrentCommand] = useState<string>("bio");
    const [commandOutput, setCommandOutput] = useState<JSX.Element[]>([]);

    const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        console.log("Command submitted:", command);
        setCommandOutput([...commandOutput, renderComponent(command)]);
        setCurrentCommand(command);
        setPrevCommands([...prevCommands, command]);
        setCommand("");
    };

    const renderComponent = (command: string) => {
        switch (command.toLowerCase()) {
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
                return (setCommandOutput([]), <div className="text-input">Terminal cleared.</div>);
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
            <div className="command-output">
                {commandOutput}
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <VscTriangleUp size={25} color="white" />
                <h1 className="text-input">
                    ~/dev/farhanj2.github.io/{currentCommand}
                </h1>
            </div>
            <div className="terminal-inputfield">
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
                            prevCommands.length > 0
                                ? setCommand(
                                      prevCommands[prevCommands.length - 1]
                                  )
                                : null;
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
