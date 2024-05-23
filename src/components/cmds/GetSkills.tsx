import "../../layouts/skills.css";
import { FaPython, FaReact } from "react-icons/fa";
import { FaUnity, FaLinux, FaJava } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { SiCsharp } from "react-icons/si";

const GetSkills = () => {
    return (
        <div>
            <h1 className="h1">My Skills</h1>

            <div className="skill">
                <FaPython size={50} style={{ color: "white" }} />
                <h1>Python</h1>
                <div className="skill-bar"></div>
                <p>100%</p>
            </div>
            <div className="skill">
                <FaReact size={50} style={{ color: "white" }} />
                <h1>React JS && React Native</h1>
                <div className="skill-bar"></div>
                <p>100%</p>
            </div>
            {/* <div className="skill">
        <BiLogoTypescript size={50} style={{ color: "white" }} />
        <h1>Typescript</h1>
        <div class="skill-bar" style="width: 80;"></div>
        <p>80%</p>
    </div> */}
            <div className="skill">
                <FaUnity size={50} style={{ color: "white" }} />
                <h1>Unity</h1>
                <div className="skill-bar"></div>
                <p>100%</p>
            </div>
            <div className="skill">
                <SiCsharp size={50} style={{ color: "white" }} />
                <h1>C#</h1>
                <div className="skill-bar"></div>
                <p>100%</p>
            </div>
            <div className="skill">
                <FaLinux size={50} style={{ color: "white" }} />
                <h1>Linux</h1>
                <div className="skill-bar"></div>
                <p>100%</p>
            </div>
            <div className="skill">
                <FaJava size={50} style={{ color: "white" }} />
                <h1>Java</h1>
                <div className="skill-bar"></div>
                <p>100%</p>
            </div>
        </div>
    );
};

export default GetSkills;
