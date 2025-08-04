"use client";
import { useState, FormEvent } from 'react';
import '/src/app/globals.css'



const Footer = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log('Data', name, email, message)
    }
    
return (
<div className='bg-gray-100 px-5 py-5 relative w-full '>

<div className='flex justify-center'>
    <div>
 <div>
        Contact
    </div>
    <div>
        <form onSubmit={onSubmit}>
            <input 
            value={name}
            onChange= {(e) => setName(e.target.value)}
            type="text"  
            placeholder='Name' 
            className='border p-2'></input>

            <input 
           value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email" 
            placeholder='Email' 
            className='border p-2' ></input>

            <textarea
           value={message}
            onChange={(e) => setMessage(e.target.value)}>
            </textarea>
            
            <button type="submit">Submit</button>

        </form>
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