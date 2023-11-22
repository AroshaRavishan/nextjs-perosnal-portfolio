import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/study365.jpg"
          title="Study 365"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          visitLink="https://www.study365.co.uk/" // Add the visit link
        />
        <ProjectCard
          src="/gel.jpg"
          title="Global Edulink"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          visitLink="https://staging-gel.imperiallearning.org/" // Add the visit link
        />
        <ProjectCard
          src="/paradise-travel.jpg"
          title="Paradise Travel"
          description="Paradise Travels has been the leader in the Sri Lankan tourism industry for over 10 years and one of the top visit sites in Sri Lanka"
          visitLink="https://arosharavishan.github.io/paradisetravel.github.io/" // Add the visit link
        />
      </div>
    </div>
  );
};

export default Projects;