import { Code, Code2 } from "lucide-react";
import { GitHubSVG, LinkedInSVG, XSVG } from "./icons/icons";

export function Footer() {
  return (
    <footer className=" bg-gradient-to-t from-cyan-200 to-baseColor text-white py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code className="h-6 w-6 text-indigo-900" />
            <span className="text-xl font-bold">Bryan.dev</span>
            <Code2 className="h-6 w-6 text-indigo-900" />
          </div>

          <div className="text-white text-md">
            © {new Date().getFullYear()} All rights reserved. Designed with ❤️
            by Brayan Reyes Rodriguez
          </div>

          <div className="flex justify-center items-center space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <GitHubSVG className="w-8" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <LinkedInSVG className=" w-8" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <XSVG className="h-full w-8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
