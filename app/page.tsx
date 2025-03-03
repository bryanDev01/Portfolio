import NavBar from "@/components/NavBar";
import { Briefcase, Github, Mail, User } from "lucide-react";

export default function Home() {
  return (
    <main>
      <NavBar />
      <section className=" w-full h-full bg-gradient-to-bl from-cyan-200 to-slate-200">
        <div className=" flex flex-col justify-center items-center">
          <h2 className=" text-center text-3xl tracking-wide font-bold">
            About Me
          </h2>
          <div className=" bg-cyan-600 rounded-md w-16 h-2"></div>
        </div>

        <div className=" w-full flex items-center justify-center">
          {" "}
          <div className="w-1/5 flex ">
            <div className=" bg-cyan-300 transform rotate-12 w-fit rounded-lg">
              <div className=" bg-violet-600 transform rotate-6 w-fit rounded-lg">
                <img src="/" alt="hero-image" />
                Photo
              </div>
            </div>
          </div>
          <div className="w-3/4">
            <div className=" flex flex-col justify-center items-center text-pretty py-4 gap-4">
              <h3 className=" text-2xl font-semibold">Who I am?</h3>
              <p className=" text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
                facilis quis blanditiis ducimus quidem maxime aliquid, nostrum,
                itaque, placeat laudantium distinctio ex aspernatur explicabo
                deleniti in corporis eos earum nemo? Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Molestias magnam nulla laborum
                dolores delectus perferendis laboriosam eius nihil! Accusantium
                magni fugiat quos ipsam aspernatur accusamus cum! Architecto
                excepturi aperiam animi. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Saepe optio ex, quisquam cumque commodi
                ratione ipsum? Pariatur porro cum eum magnam labore illum ullam,
                earum quia eos veniam vitae aliquam. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nesciunt quia, eligendi non
                facilis ad veritatis quaerat minima voluptas numquam! Delectus
                tempore ipsam magni. Nulla dicta repellat est alias, explicabo
                praesentium.
              </p>
            </div>
            <div className=" flex justify-between items-center py-4">
              <div className=" w-full flex flex-col justify-center items-center gap-4">
                <span className=" flex justify-center items-center gap-2 border-2 border-slate-300 hover:bg-cyan-300 text-lg   rounded-lg p-2 w-[400px] cursor-pointer shadow-md shadow-cyan-100">
                  <User />
                  <p>Bryan.dev</p>
                </span>{" "}
                <span className=" flex justify-center items-center gap-2 border-2 border-slate-300 hover:bg-cyan-300 text-lg   rounded-lg p-2 w-[400px] cursor-pointer shadow-md shadow-cyan-100">
                  <Briefcase />
                  <p>Frontend Developer</p>
                </span>
              </div>
              <div className=" w-full flex flex-col justify-center items-center gap-8">
                <span className=" flex justify-center items-center gap-2 border-2 border-slate-300 hover:bg-cyan-300 text-lg   rounded-lg p-2 w-[400px] cursor-pointer shadow-md shadow-cyan-100"> 
                  <Mail />
                  <p>breyessrr@gmail.com</p>
                </span>
                <span className=" flex justify-center items-center gap-2 border-2 border-slate-300 hover:bg-cyan-300 text-lg   rounded-lg p-2 w-[400px] cursor-pointer shadow-md shadow-cyan-100">
                  <Github />
                  <p>https://github.com/dashboard</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
