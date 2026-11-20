import { stack } from "@/types/types";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ArrowOut, GitHubSVG } from "./icons/icons";

export function ProjectCard({
  src,
  name,
  stars,
  description,
  stack,
  gitHref,
  pageHref,
}: {
  src: string;
  name: string;
  stars: number;
  description: string;
  stack: stack[];
  gitHref: string;
  pageHref: string;
}) {
  return (
    <section className="group relative shadow-lg shadow-cyan-200/70 hover:shadow-2xl hover:shadow-cyan-300/70 bg-gradient-to-b from-cyan-50 to-white ring-1 ring-slate-100 hover:ring-baseColor/30 w-full h-full flex flex-col items-center text-lg rounded-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
      <div className="w-full h-[300px] overflow-hidden rounded-t-2xl relative after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-secondColor/40 after:to-transparent after:opacity-0 after:transition-opacity after:duration-500 group-hover:after:opacity-100">
        <Image
          src={src}
          alt={`${name} project screenshot`}
          width={640}
          height={360}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 rounded-t-2xl"
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-4 p-4 w-full">
        <div className="w-full flex justify-between items-center">
          <p className="lg:text-2xl text-xl font-bold bg-gradient-to-r from-baseColor to-secondColor bg-clip-text text-transparent">{name}</p>
          <span
            className=" flex justify-center items-center"
            aria-label={`${stars} out of 5 stars`}
          >
            {Array.from({ length: Math.min(5, Math.max(0, stars)) }, (_, i) => (
              <Star key={i} className=" text-yellow-500 md:w-8 w-5" />
            ))}
          </span>
        </div>
        <p className=" lg:text-base text-sm text-pretty text-gray-600">
          {description}
        </p>
        <div className=" w-full flex flex-wrap justify-start items-center gap-4">
          {stack.map((st) => (
            <p
              key={st.id}
              className="font-semibold ring-1 ring-inset ring-slate-300 bg-slate-100 hover:bg-baseColor/10 hover:ring-baseColor/30 text-center text-xs md:text-sm rounded-lg px-2 py-1 transition-colors duration-300"
            >
              {st.tec}
            </p>
          ))}
        </div>
        <div className="w-full flex flex-wrap justify-start items-center gap-4">
          <Link href={gitHref} target="_blank" rel="noopener noreferrer" className="transform transition-all duration-300 hover:scale-110 hover:text-secondColor">
            <GitHubSVG className="w-8" />
          </Link>

          <Link href={pageHref} target="_blank" rel="noopener noreferrer" className="transform transition-all duration-300 hover:scale-110 hover:text-secondColor">
            <ArrowOut className="w-8" />
          </Link>

          <a href={pageHref} target="_blank" rel="noopener noreferrer" className="ml-auto px-4 py-2 bg-gradient-to-r from-baseColor to-secondColor bg-[length:200%_auto] bg-left hover:bg-right text-white rounded-xl transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-cyan-300/60 text-sm font-semibold">
            View Live Demo
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
