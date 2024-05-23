import pfp from "../../assets/images/pfp.jpeg";
import "../../layouts/bio.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const GetBio = () => {
    return (
        <div>
            <div className="bio-image-container">
                <img className="bio-image" src={pfp.src} alt="Image of ME" />

                <p style={{ padding: 20 }} className="bio-text">
                    <span className="highlight">16</span> years old
                </p>
                <p style={{ padding: 20 }} className="bio-text">
                    Born and Raised in{" "}
                    <span className="highlight">Queens, New York.</span>
                </p>
                <p style={{ padding: 20 }} className="bio-text">
                    Class of '26{" "}
                    <span className="highlight">Townsend Harris</span> Student
                </p>
            </div>
            <br />
            <div className="bio-content">
                <h1 className="title">
                    Hi, I'm <span className="highlight">Farhan!</span>
                </h1>
                <br />
                <p className="bio-text">
                    Hey there! 👋 I'm a current{" "}
                    <span className="highlight">Townsend Harris student</span>{" "}
                    scheduled to graduate in '26 with a knack for all things
                    tech. During my tenure in Townsend Harris I have been a
                    crucial part for the operations in the Townsend Harris
                    Robotics Team,{" "}
                    <span className="highlight">Steel Hawks</span> by applying
                    my skills to create apps that help collect data for alliance
                    selection. From a young age, I've been captivated by the
                    endless possibilities of programming and building innovative
                    solutions. Today, I spend my free time immersed in the world
                    of software development, constantly seeking to expand my
                    skills and knowledge.
                </p>
                <br />
                <p className="bio-text">
                    Starting my programming career with{" "}
                    <span className="highlight">
                        Unity and Game Development
                    </span>
                    , I've since broadened my horizons to include a variety of
                    languages and frameworks. My passion lies in crafting web
                    and mobile applications. I'm currently honing my expertise
                    in modern technologies such as{" "}
                    <span className="highlight">
                        React, React Native, Astro, and Python frameworks such
                        as Flask
                    </span>
                    , empowering myself to create dynamic and user-centric
                    experiences.
                </p>
                <br />
                <p className="bio-text">
                    Whether I'm debugging code, experimenting with new
                    libraries, or brainstorming creative solutions, I'm fueled
                    by the thrill of innovation and the pursuit of excellence.
                    I'm always eager to collaborate, learn, and push the
                    boundaries of what's possible in the digital realm.
                </p>
                <br />
                <p className="bio-text">
                    When I'm not coding, you can find me{" "}
                    <span className="highlight">
                        playing video games, reading, or exploring the great
                        outdoors.
                    </span>{" "}
                    I'm also a huge fan of music, and I love discovering new
                    artists and genres. I'm always up for a chat, so feel free
                    to reach out if you'd like to connect!
                </p>
                <br />
                <div className="socials">
                    <a
                        href="https://www.linkedin.com/in/farhan-jamil-373370230/"
                        // style="text-decoration: none;"
                        target="_blank"
                    >
                        <div className="social">
                            <p className="bio-text">LinkedIn</p>
                            <FaLinkedin size={25} style={{ color: "white" }} />
                        </div>
                    </a>
                    <a
                        href="https://github.com/FarhanJ2/"
                        // style="text-decoration: none;"
                        target="_blank"
                    >
                        <div className="social">
                            <p className="bio-text">GitHub</p>
                            <FaGithub size={25} style={{ color: "white" }} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default GetBio;
