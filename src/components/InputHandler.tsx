import React, {useState, useEffect, useRef} from "react";

export default function InputHandler() {
    const [command, setCommand] = useState<string>('');
    const [prevCommands, setPrevCommands] = useState<string[]>([]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setPrevCommands([...prevCommands, command]);
        setCommand('');
    }

    return (
        <form className="terminal-inputfield" onSubmit={handleSubmit}>
            <input
                type="text"
                value={command}
                onChange={e => setCommand(e.target.value)}
            />
            <button type="submit">Submit</button>
            <ul>
                {prevCommands.map((prevCommand, index) => (
                    <li key={index}>{prevCommand}</li>
                ))}
            </ul>
        </form>
    );
}
