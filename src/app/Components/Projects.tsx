
"use client";
import Image from "next/image";
import Anime from "../images/anime-api-sc.png";
import Travel from "../images/travel sc.png";
import Ecommerce from "../images/ecommerce-sc.png";
import Weather from '../images/weather-app.png';
import { useState } from "react";

const Projects = () => {
  const [showTextBoxOne, setShowTextBoxOne] = useState(false);
  
  const handleButtonClickOne = () => {
    setShowTextBoxOne(true);
  };

return(
<div className=" w-full absolute bg-gray-100">
    <section className="project-container">
   
    <div className="project-section">
<h1 className='text-4xl flex justify-center font-semibold'>
        Projects
    </h1>
    </div>

    <div className="pt-32 grid  lg:grid-cols-2">
        <section className="flex flex-col justify-center pb-10 px-4 text-center">
         
         <div className="bg-black shadow-md overflow-hidden dark:bg-gray-800 dark:border-gray-700">
            <Image
              src={Anime}
              className="w-full h-auto max-w-7xl object-cover rounded-t-md"
              alt="Anime"
              loading="lazy"
            />
            </div>

         <div className="w-full pt-4">
          <div className="button-wrapper">
          <button className="service-button" onClick={() => window.location.href = 'https://anime-api-nine-rho.vercel.app'} >
            
            <a className="font-medium" >Live Demo</a>
            
            </button>
          <button className="description-button" onClick={handleButtonClickOne}>
            <span className="font-medium">Description</span></button>
          </div>
          
          
         </div>
          
 {
    <div className="flex justify-center items-center">
      {showTextBoxOne && (
        <div className="fixed z-10 inset-0 bg-black/30 flex justify-center items-center text-black px-8">
          <div className="bg-white rounded-lg p-8 max-w-3xl">
            <h1 className="text-xl mb-4">Molecular Biology</h1>
            <p>At Elemental Analytics, we specialize in providing cutting-edge molecular biology solutions tailored to meet the diverse needs of researchers, academic institutions, and biotech organizations. Our mission is to empower scientific discovery and innovation through precise, reliable, and efficient molecular biology services. Some key services we provide are DNA/RNA sequencing, PCR/qPCR analysis, Protein expression and CRISPR.</p>
            <button 
            className="mt-4 text-white bg-gradient-to-br from-orange-400 via-red-500 to-orange-400 hover:bg-gradient-to-br shadow-lg shadow-red-400/50 animate-text font-bold py-2 px-4 rounded
            "
            onClick={() => setShowTextBoxOne(false)}
            >
            Close
            </button>
          </div>
        </div>
      )}

    </div>
  }
           
       
            
        </section>


        <section className="flex flex-col justify-center pb-10 px-4 text-center">
          <div className=" shadow-md dark:bg-gray-800 dark:border-gray-700">
            
            <Image
              src={Travel}
              className="w-full h-auto max-w-7xl rounded-t-md"
              alt="Travel"
              loading="lazy"
            />

            </div>
            
<div className="w-full pt-4">
          <div className="button-wrapper">
          <button className="service-button" onClick={() => window.location.href = 'https://travel-ten-teal.vercel.app'} >
            
            <a className="font-medium">Live Demo</a>
            
            </button>
          <button className="description-button" onClick={handleButtonClickOne}>
            <span className="font-medium">Description</span></button>
          </div>
          
          
         </div>


         {
    <div className="flex justify-center items-center">
      {showTextBoxOne && (
        <div className="fixed z-10 inset-0 bg-black/30 flex justify-center items-center text-black px-8">
          <div className="bg-white rounded-lg p-8 max-w-3xl">
            <h1 className="text-xl mb-4">Molecular Biology</h1>
            <p>At Elemental Analytics, we specialize in providing cutting-edge molecular biology solutions tailored to meet the diverse needs of researchers, academic institutions, and biotech organizations. Our mission is to empower scientific discovery and innovation through precise, reliable, and efficient molecular biology services. Some key services we provide are DNA/RNA sequencing, PCR/qPCR analysis, Protein expression and CRISPR.</p>
            <button 
            className="mt-4 text-white bg-gradient-to-br from-orange-400 via-red-500 to-orange-400 hover:bg-gradient-to-br shadow-lg shadow-red-400/50 animate-text font-bold py-2 px-4 rounded
            "
            onClick={() => setShowTextBoxOne(false)}
            >
            Close
            </button>
          </div>
        </div>
      )}

    </div>
  }


        </section>

        <section className="flex justify-center flex-col pb-10 px-4 text-center">
                  <div className= "text-white  shadow-md dark:bg-gray-800 dark:border-gray-700">
                    
                    <Image
                      src={Ecommerce}
                      className="w-full h-auto max-w-7xl rounded-t-md"
                      alt="Anime"
                      loading="lazy"
                    />
        
                    </div>

                    <div className="w-full pt-4">
                        <div className="button-wrapper">
                        <button className ="service-button" onClick={() => window.location.href = "https://my-ecommerce-tawny.vercel.app"} >
                          
                          <a className="font-medium">Live Demo</a>
                          
                          </button>
                        <button className="description-button" onClick={handleButtonClickOne}>
                          <span className="font-medium">Description</span></button>
                        </div>
                        
                        
                      </div>
                    
                </section>
            


 <section className="flex justify-center flex-col pb-10 px-4 text-center">
                  <div className= " bg-black text-black shadow-md dark:bg-gray-800 dark:border-gray-700">
                    
                    <Image
                      src={Weather}
                      className="w-full h-auto max-w-7xl rounded-t-md"
                      alt="Anime"
                      loading="lazy"
                    />
                    </div>

                    <div className="w-full pt-4">
                        <div className="button-wrapper">
                        <button className="service-button" onClick={() => window.location.href = "https://weather-app-api-clone.vercel.app"} >
                          
                          <span className="font-medium">Live Demo</span>
                          
                          </button>
                        <button className="description-button" onClick={handleButtonClickOne}>
                          <span className="font-medium">Description</span></button>
                        </div>
          
          
         </div>

   </section>

    </div>
    
       
    </section>
</div>

);



}

export default Projects;