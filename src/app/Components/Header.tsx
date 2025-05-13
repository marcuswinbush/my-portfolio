
import '/src/app/globals.css'

const Header = () => {
    return (
<nav className=" w-full p-5 bg-gray-100 ">
    <div className=" flex justify-end gap-8">
    <div>
      <button className="nav-link"> Home</button>
      </div>
      <div>
        <button className="nav-link">
        About Me
        </button>
      </div>
      <div>
        <button className="nav-link">
        Projects
        </button>
      </div>
      <div>
      <button className='nav-link'>
          Contacts
        </button>
      </div>
    </div>
    
     
    </nav> 

    );
}
export default Header;