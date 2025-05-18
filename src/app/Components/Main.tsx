

"use client";
import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollSmoother,ScrollTrigger);

const Main = () => {
    const welcomePage = useRef(null);
    const animate = useRef(null);
   
    useEffect(() =>  {
        const el = animate.current;
        gsap.fromTo(
            el,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            }
        );


        gsap.from(welcomePage.current,{
            opacity: 0,
            y: 50,
            duration: 1.2,
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
    
    <div className=" h-screen flex flex-col justify-center items-center  ">
 <section className="main-container">

     <div className="about-section">
    <h1 className="text-4xl font-semibold ">
        About Me
    </h1>  
    </div>

    <div ref={animate} className=" inline-block ">
         <h1 className=" ">
             My name is Marcus Winbush.
        </h1>
     <a>
        I am an aspiring Web Developer with a background in Science. 
     </a>
     </div>
    
   
       
        
    
    </section>
    
    <div>
        Projects
    </div>
    </div>
    
       
    </div>

);
}   

export default Main;