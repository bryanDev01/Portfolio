import { Code, Code2 } from "lucide-react";
import { GitHubSVG, LinkedInSVG } from "./icons/icons";

const socialLinks = [
  { label: "GitHub profile", href: "https://github.com/bryanDev01", Icon: GitHubSVG },
  {
    label: "LinkedIn profile",
    href: "https://www.linkedin.com/in/brayan-reyes-rodr%C3%ADguez-b63b2b349",
    Icon: LinkedInSVG,
  },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-cyan-200 to-baseColor text-white py-10 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2 mb-4 md:mb-0 transform transition-all duration-300 hover:scale-105">
            <Code className="h-6 w-6 text-indigo-900" />
            <span className="text-xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">Bryan.dev</span>
            <Code2 className="h-6 w-6 text-indigo-900" />
          </div>

          <div className="text-white/90 text-md text-center md:text-left transform transition-all duration-300 hover:text-cyan-100">
            © {new Date().getFullYear()} All rights reserved. Designed with ❤️
            by Brayan Reyes Rodriguez
          </div>

          <div className="flex justify-center items-center space-x-6 mt-4 md:mt-0">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/80 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Icon className="w-8" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-50"></div>
</footer>
  );
}

export default Footer
