import "../../layouts/projects.css";
import {
    FaPython,
    FaReact,
    FaGithub,
    FaSwift,
    FaJava,
    FaAppStoreIos,
    FaAndroid,
    FaUnity,
    FaLinux,
} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { TbBrandReactNative } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { SiCsharp, SiAstro } from "react-icons/si";
import projectData from "../../assets/projects.json";

interface ProjectCard {
    id: number;
    name: string;
    description: string;
    skills: string[];
    image?: string;
    github?: string;
    url?: string;
}

const GetProjects = () => {
    return (
        <div>
            <h1 className="h1">Projects</h1>
            {projectData.map((project: ProjectCard, index: number) => (
                <div key={index}>
                    <br />
                    <div className="container">
                        <div className="project">
                            <h1 className="project-title">{project.name}</h1>
                            <p className="project-description">
                                {project.description}
                            </p>
                            <h2 className="project-title">Required Skills: </h2>
                            <div>
                                {project.skills.includes("python") && (
                                    <FaPython
                                        style={{
                                            color: "white",
                                            padding: "5px",
                                        }}
                                        size={25}
                                    />
                                )}
                                {project.skills.includes("react") && (
                                    <FaReact
                                        style={{
                                            color: "white",
                                            padding: "5px",
                                        }}
                                        size={25}
                                    />
                                )}
                                {project.skills.includes("react-native") && (
                                    <TbBrandReactNative
                                        style={{
                                            color: "white",
                                            padding: "5px",
                                        }}
                                        size={25}
                                    />
                                )}
                                {project.skills.includes("typescript") && (
                                    <BiLogoTypescript
                                        style={{
                                            color: "white",
                                            padding: "5px",
                                        }}
                                        size={25}
                                    />
                                )}
                                {project.skills.includes("swift") && (
                                    <FaSwift
                                        style={{
                                            color: "white",
                                            padding: "5px",
                                        }}
                                        size={25}
                                    />
                                )}
                                {project.skills.includes("java") && (
                                    <FaJava
                                        style={{
                                            color: "white",
                                            padding: "5px",
                                        }}
                                        size={25}
                                    />
                                )}
                                {project.skills.includes("ios") && (
                                    <FaAppStoreIos
                                        style={{
                                            color: "white",
                                            padding: "5px",
                                        }}
                                        size={25}
                                    />
                                )}
                                {project.skills.includes("android") && (
                                    <FaAndroid
                                        style={{
                                            color: "white",
                                            padding: "5px",
                                        }}
                                        size={25}
                                    />
                                )}
                                {project.skills.includes("unity") && (
                                    <FaUnity
                                        style={{
                                            color: "white",
                                            padding: "5px",
                                        }}
                                        size={25}
                                    />
                                )}
                                {project.skills.includes("csharp") && (
                                    <SiCsharp
                                        style={{
                                            color: "white",
                                            padding: "5px",
                                        }}
                                        size={25}
                                    />
                                )}
                                {project.skills.includes("linux") && (
                                    <FaLinux
                                        style={{
                                            color: "white",
                                            padding: "5px",
                                        }}
                                        size={25}
                                    />
                                )}
                                {project.skills.includes("astro") && (
                                    <SiAstro
                                        style={{
                                            color: "white",
                                            padding: "5px",
                                        }}
                                        size={25}
                                    />
                                )}
                            </div>
                            <h2 className="project-title">Links: </h2>
                            <div
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaGithub
                                            style={{
                                                color: "white",
                                                padding: "5px",
                                            }}
                                            size={25}
                                        />
                                    </a>
                                )}
                                {project.url && (
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FiExternalLink
                                            size={25}
                                            style={{
                                                color: "white",
                                                padding: "5px",
                                            }}
                                        />
                                    </a>
                                )}
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignSelf: "center",
                            }}
                        >
                            {project.image && (
                                <img
                                    src={project.image}
                                    alt="Photo of Project"
                                    style={{
                                        width: "500px",
                                        height: "500px",
                                        // borderRadius: "50%",
                                        padding: "30px",
                                    }}
                                />
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GetProjects;
