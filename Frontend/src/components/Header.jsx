import { useState } from "react";
import Logo from "./../../IMG/icon.png";
import MenuIcon from "@mui/icons-material/Menu";
import {useNavigate} from 'react-router-dom'

const Header = () => {
  

const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  
const navigate = useNavigate()
const LoginHandler =  () => {
   
 
    navigate('/login', { replace: true })
    
 }


  return (
<>
     {/* Header Section */}
     <div className="flex justify-between items-center p-4 sticky top-0 z-50 bg-transparent backdrop-blur-md">
     {/* Logo and Name */}
     <div className="flex items-center space-x-2">
       <img className="h-8" src={Logo} alt="logo" />
       <h1 className="text-[#111C2C] text-xl font-bold">Audeus</h1>
     </div>
     {/* Navigation Section */}
     <div className="md:flex items-center gap-6 hidden">
       <ul className="flex items-center gap-4 text-md font-normal text-[#465163]">
         <li className="hover:text-[#606d81] cursor-pointer">Product</li>
         <li className="hover:text-[#606d81] cursor-pointer">Pricing</li>
         <li className="hover:text-[#606d81] cursor-pointer">Works</li>
         <li className="hover:text-[#606d81] cursor-pointer">Blog</li>
       </ul>
       <div className="flex items-center gap-4">
         <button onClick={LoginHandler} className="bg-[#F6F8FA] text-black font-normal shadow-md px-4 py-2 rounded-md">
           Login
         </button>
         <button onClick={LoginHandler} className="bg-[#0069FF] text-white font-bold px-4 py-2 rounded-md">
           Try for Free
         </button>
       </div>
     </div>
     {/* Mobile Menu Icon */}
     <div className="md:hidden">
       <MenuIcon
         className="text-[#111C2C] text-3xl cursor-pointer"
         onClick={handleClick}
       />
     </div>
   </div>

   {/* Mobile Menu */}
   <div
     className={`${
       menuOpen ? "flex" : "hidden"
     } flex-col items-center bg-white shadow-md p-4 md:hidden`}
   >
     <ul className="flex flex-col gap-4 text-md font-normal text-[#465163] w-full">
       <li className="hover:text-[#606d81] cursor-pointer">Product</li>
       <li className="hover:text-[#606d81] cursor-pointer">Pricing</li>
       <li className="hover:text-[#606d81] cursor-pointer">Works</li>
       <li className="hover:text-[#606d81] cursor-pointer">Blog</li>
     </ul>
     <div className="flex flex-col gap-4 mt-4">
       <button className="bg-[#F6F8FA] text-black font-normal shadow-md px-4 py-2 rounded-md">
         Login
       </button>
       <button className="bg-[#0069FF] text-white font-bold px-4 py-2 rounded-md">
         Try for Free
       </button>
     </div>
   </div>
   {/* Mobile Menu */}
   <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col items-center bg-white shadow-md p-4 md:hidden`}
      >
        <ul className="flex flex-col gap-4 text-md font-normal text-[#465163] w-full">
          <li className="hover:text-[#606d81] cursor-pointer">Product</li>
          <li className="hover:text-[#606d81] cursor-pointer">Pricing</li>
          <li className="hover:text-[#606d81] cursor-pointer">Works</li>
          <li className="hover:text-[#606d81] cursor-pointer">Blog</li>
        </ul>
        <div className="flex flex-col gap-4 mt-4">
          <button className="bg-[#F6F8FA] text-black font-normal shadow-md px-4 py-2 rounded-md">
            Login
          </button>
          <button className="bg-[#0069FF] text-white font-bold px-4 py-2 rounded-md">
            Try for Free
          </button>
        </div>
      </div>
   </>
  )
}

export default Header