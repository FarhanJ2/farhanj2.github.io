import React, { useState } from 'react';
import { VscTriangleUp, VscChevronRight } from 'react-icons/vsc';

const InputHandler = () => {
    const [command, setCommand] = useState<string>('');
    const [prevCommands, setPrevCommands] = useState<string[]>([]);
    const [currentCommand, setCurrentCommand] = useState<string>('');

    const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        console.log('Command submitted:', command);
        setCurrentCommand(command);
        setPrevCommands([...prevCommands, command]);
        setCommand('');
    };

    return (
        <div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <VscTriangleUp size={25} color="white" />
                <h1 className="text-input">~/Programming/farhanj2.github.io/{currentCommand}</h1>
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
                            prevCommands.length > 0 ? setCommand(prevCommands[prevCommands.length - 1]) : null;
                        }
                        if (e.key === "ArrowDown") {
                            setCommand('');
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default InputHandler;
