

export default function Header() {
  return (
  
   <nav className=" w-full p-5 shadow-md bg-white">
    <div className=" flex justify-end gap-8">
    <div>
      <button className=" cursor-pointer"> Home</button>
      </div>
      <div>
        <button className="cursor-pointer">
        About Me
        </button>
      </div>
      <div>
        <button className="cursor-pointer">
        Projects
        </button>
      </div>
      <div>
      <button className='cursor-pointer'>
          Contacts
        </button>
      </div>
    </div>
     
    </nav> 
      
    
  );
}
