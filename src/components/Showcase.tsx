import React, { useState } from "react";
import feather from "feather-icons";
import steelhawks from "../../public/steelhawks.png";
import "./Showcase.css"; // Import a separate CSS file

export default function Showcase(props: {
  title: string;
  description: string;
  image: string;
  github: string;
  link: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`xl:flex justify-center ${isHovered ? 'hovered' : ''}`}>
      <ul role="list" className="link-card-grid">
        <h1>{props.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: feather.icons["github"].toSvg() }}
        />
        <img
          src={props.image}
          alt={props.title}
          className="rainbow-border"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </ul>
    </div>
  );
}
