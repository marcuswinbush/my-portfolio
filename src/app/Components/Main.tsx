

"use client";
import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollSmoother,ScrollTrigger);

const Main = () => {
    const welcomePage = useRef(null);
    const aboutPage = useRef(null);
    const projectPage = useRef(null);

    useEffect(() =>  {
        gsap.from(welcomePage.current,{
            opacity: 0,
            y: 50,
            duration: 1.2,
            ease: "power2.out",

        });


        gsap.from(aboutPage.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
        });

        gsap.from(projectPage.current, {
            ScrollTrigger: {
                trigger: projectPage.current,
                start: "top 80%",
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
        });
    }, []);



return(
<div className="  bg-gray-100 px-5 py-5 " >
    <div ref={welcomePage} className="h-screen flex justify-center items-center">
    <h2 className="font-bold text-6xl">
    Welcome 
    </h2>
    </div>
    
    <div ref={aboutPage} className=" h-screen flex justify-center items-center ">
    <h1>
    My name is Marcus
    </h1>
    <a>
        I am an aspiring Web Developer with a background in Science. 
    </a>
    <div>
        Projects
    </div>
    </div>
    
       
    </div>

);
}   

export default Main;