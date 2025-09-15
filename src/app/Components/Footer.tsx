"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '/src/app/globals.css'




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
            <FaGithub />
            </div>
        <div className='linkedin'>
            <FaLinkedin/>
            </div>
        <div className='mail'>
            <FaEnvelope/>
            </div>

    </div>
    

    <div className='flex'>
       

    </div>
<div>
    Footer
</div>
    
   
</div>
</div>

</div>

);

}

export default Footer;