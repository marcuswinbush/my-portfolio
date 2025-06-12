
"use client";
import Image from "next/image";
import Anime from "../images/anime-api-sc.png";
import Travel from "../images/travel sc.png";
import Ecommerce from "../images/ecommerce-sc.png";
import Weather from '../images/weather-app.png';

const Projects = () => {

return(
<div className=" w-full absolute bg-gray-100">
    <section className="project-container">
   
    <div className="project-section">
<h1 className='text-4xl flex justify-center font-semibold'>
        Projects
    </h1>
    </div>

    <div className="pt-32 grid  lg:grid-cols-2">
        <section className="flex  justify-center pb-10 px-4 text-center">
          <div className="bg-black text-white  shadow-md dark:bg-gray-800 dark:border-gray-700">
            
            <Image
              src={Anime}
              className="w-full h-auto max-w-7xl rounded-t-md"
              alt="Anime"
              loading="lazy"
            />

            </div>
            
        </section>


        <section className="flex justify-center pb-10 px-4 text-center">
          <div className="bg-black text-white  shadow-md dark:bg-gray-800 dark:border-gray-700">
            
            <Image
              src={Travel}
              className="w-full h-auto max-w-7xl rounded-t-md"
              alt="Anime"
              loading="lazy"
            />

            </div>
            
        </section>

        <section className="flex justify-center pb-10 px-4 text-center">
                  <div className= "text-white  shadow-md dark:bg-gray-800 dark:border-gray-700">
                    
                    <Image
                      src={Ecommerce}
                      className="w-full h-auto max-w-7xl rounded-t-md"
                      alt="Anime"
                      loading="lazy"
                    />
        
                    </div>
                    
                </section>
            


 <section className="flex justify-center pb-10 px-4 text-center">
                  <div className= "text-white  shadow-md dark:bg-gray-800 dark:border-gray-700">
                    
                    <Image
                      src={Weather}
                      className="w-full h-auto max-w-7xl rounded-t-md"
                      alt="Anime"
                      loading="lazy"
                    />
        
                    </div>
                    
                </section>

    </div>
    
       
    </section>
</div>

);



}

export default Projects;