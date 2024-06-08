import InputHandler from "./InputHandler";
import Navbar from "./Navbar";
import Welcome from "./cmds/Welcome";

const TerminalContainer = () => {
    return (
        <div className="terminal-container">
            <Navbar />
            <div className="terminal-content">
                <Welcome />
                <InputHandler />
            </div>
        </div>
    );
};

export default TerminalContainer;
