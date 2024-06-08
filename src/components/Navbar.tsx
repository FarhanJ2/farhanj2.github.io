import { VscTerminalBash } from "react-icons/vsc";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="traffic-lights">
                <div className="traffic-light red"></div>
                <div className="traffic-light yellow"></div>
                <div className="traffic-light green"></div>
            </div>
            <VscTerminalBash className="bash-icon" />
            <h1 className="text-center">farhanj2/terminal</h1>
        </div>
    );
};

export default Navbar;
