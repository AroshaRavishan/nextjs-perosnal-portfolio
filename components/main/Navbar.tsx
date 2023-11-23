import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 shadow-lg bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10">
      <div className="w-full flex items-center justify-between m-auto">
        <a href="#about-me" className="flex items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-2 hidden md:block text-gray-300">
            Arosha Ravishan
          </span>
        </a>

        <div className="hidden md:flex items-center justify-between w-1/2 md:w-[500px] border border-[#7042f861] bg-[#0300145e] px-3 py-2 rounded-full text-gray-200">
          <a href="#about-me" className="cursor-pointer">
            About me
          </a>
          <a href="#skills" className="cursor-pointer">
            Skills
          </a>
          <a href="#projects" className="cursor-pointer">
            Projects
          </a>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              key={social.name}
            >
              <Image src={social.src} alt={social.name} width={24} height={24} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
