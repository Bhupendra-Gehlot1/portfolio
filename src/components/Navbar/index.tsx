import React from "react";
import type { INavbar } from "./constants/types";
import DownloadIcon from "../../../public/donwload.svg";

type NavbarProps = {
  template: INavbar;
};

export const Navbar: React.FC<NavbarProps> = ({ template }) => {
  const { action, logo, title } = template;

  const handleResumeDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1pcqujspcTnn4wnAb_e5NgPoraZA7Po2A/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/95 backdrop-blur-md z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div className="flex items-center">
            {logo && (
              <img
                src={logo.toString()}
                alt="Logo"
                className="h-8 w-auto mr-3 filter invert"
              />
            )}
            <h1 className="text-xl sm:text-md font-bold text-white">{title}</h1>
          </div>

          {/* Resume Download Button */}
          <div>
            <button
              onClick={handleResumeDownload}
              className="bg-white flex items-center justify-center gap-2 text-black hover:bg-gray-200 px-3 py-1 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg group"
              title="Download Resume"
            >
              <img
                src={DownloadIcon}
                alt="Download Resume"
                className="w-5 h-5"
              />
              {action.title}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
