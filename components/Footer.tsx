import { Code, Code2 } from "lucide-react";
import { GitHubSVG, LinkedInSVG, XSVG } from "./icons/icons";

export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-cyan-200 to-baseColor text-white py-8 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2 mb-4 md:mb-0 transform transition-all duration-300 hover:scale-105">
            <Code className="h-6 w-6 text-indigo-900" />
            <span className="text-xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">Bryan.dev</span>
            <Code2 className="h-6 w-6 text-indigo-900" />
          </div>

          <div className="text-white text-md text-center md:text-left transform transition-all duration-300 hover:text-cyan-100">
            © {new Date().getFullYear()} All rights reserved. Designed with ❤️
            by Brayan Reyes Rodriguez
          </div>

          <div className="flex justify-center items-center space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <GitHubSVG className="w-8" />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <LinkedInSVG className=" w-8" />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <XSVG className="h-full w-8" />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-50"></div>
</footer>
  );
}

export default Footer
