import { Code, Code2 } from "lucide-react";

function NavBar() {
  return (
    <nav className=" w-full flex justify-between items-center p-4 shadow-md shadow-slate-400 bg-slate-300">
      <div className=" flex items-center justify-start flex-1 gap-3">
        <Code className=" text-rose-500 w-7"/>
        <p className=" text-2xl font-medium">Bryan.<span className=" bg-red-700/80 text-white rounded-md px-0.5">dev</span></p>
        <Code2 className=" text-rose-500 w-7" />
      </div>
      <div className=" text-black flex gap-16 justify-center items-center text-xl mr-11 list-none">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Project</li>
        <li>Contact</li>
      </div>
    </nav>
  );
}

export default NavBar;
