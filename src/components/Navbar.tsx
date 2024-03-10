import steelhawks from "../assets/steelhawks.png";
import { useState } from "react";
import { motion } from "framer-motion";
import { Image } from "astro:assets";

export default function Navbar() {
  const [toggled, setToggled] = useState(false);

  return (
    <nav className="relative mx-8 mb-24 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16 lg:mx-32">
      <svg
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        width={"250"}
        height={4}
        viewBox={"0 0 250 4"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m2 2L428 2"
          strokeWidth={2}
          stroke="#282828"
          strokeLinecap="round"
        />
      </svg>
      <div>
        <img src={steelhawks} alt="Steelhawks" />
      </div>

      <h1 className="text-lg font-bold">
        <a href="/">Home</a> <a href="/projects">Projects</a>{" "}
      </h1>

      <div
        onClick={() => setToggled((prevToggle) => !prevToggle)}
        className="space-y-1 cursor-pointer xl:hidden"
      >
        <span className="block h-0.5 w-8 bg-white"></span>
        <span className="block h-0.5 w-6 bg-white"></span>
        <span className="block h-0.5 w-4 bg-white"></span>
      </div>
    </nav>
  );
}
