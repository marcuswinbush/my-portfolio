"use client";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
import '/src/app/globals.css';

const Header = () => {

const handleScroll = (targetId: string) => {
  const offset = 60;

  gsap.to(window, {
    duration: 1,
    scrollTo: { y: `#${targetId}`, offsetY: offset },
    ease: "power3.out",
  });
};

    return (
<nav className=" w-full p-5 bg-gray-100 ">
    <div className=" flex justify-end gap-8">
    <div>
      <button className="nav-link"> Home</button>
      </div>
      <div>
        <button  onClick={() => handleScroll("aboutMe")}className="nav-link">
        About Me
        </button>
      </div>
      <div>
        <button onClick={() => handleScroll("project-id")}className="nav-link">
        Projects
        </button>
      </div>
      
    </div>
    
     
    </nav> 

    );
}
export default Header;