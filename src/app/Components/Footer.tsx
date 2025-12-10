"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '/src/app/globals.css'
import Link from 'next/link';




const Footer = () => {
  
return (
<div className='bg-gray-100 px-5 py-5 relative w-full '>

<div className='flex justify-center'>
    <div className='' >
 <h1 className='font-semibold text-3xl'>
         Feel Free To Contact Me
    </h1>
    <div className='icons'>
        <div className='github'>
            <Link href="https://github.com/marcuswinbush">
            <FaGithub /> 
            </Link>
            
            </div>
        <div className='linkedin'>
            <Link href="https://www.linkedin.com/in/marcus-winbush-8a8797305/">
            <FaLinkedin/>
            </Link>
            
            </div>
        <div className='mail'>
            <Link href="mailto:mwinbush00@gmail.com">
            <FaEnvelope/>
            </Link>
            </div>

    </div>
    

    <div className='flex'>
       

    </div>

    
   
</div>
</div>

</div>

);

}

export default Footer;