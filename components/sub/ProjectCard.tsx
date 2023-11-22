import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  visitLink: string; // Add a new prop for the visit link
}

const ProjectCard = ({ src, title, description, visitLink }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] !z-40 ">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <a
          href={visitLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 text-blue-500 px-5 cursor-pointer Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          Visit Now
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
