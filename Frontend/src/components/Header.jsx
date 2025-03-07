import { useState, useEffect } from "react";
import Logo from "./../../IMG/icon.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const navigate = useNavigate();

  // Check login status on component mount
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token); // true if token exists
  }, []);

  // Toggle mobile menu
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle login navigation
  const loginHandler = () => {
    navigate("/login", { replace: true });
  };

  // Handle logout
  const logoutHandler = () => {
    localStorage.removeItem("authToken"); // Clear token
    setIsLoggedIn(false); // Update state
    navigate("/", { replace: true }); // Redirect to home
  };

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
            {/* Conditional Button */}
            {isLoggedIn ? (
              <button
                onClick={logoutHandler}
                className="bg-red-500 text-white font-bold px-4 py-2 rounded-md"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={loginHandler}
                className="bg-[#F6F8FA] text-black font-normal shadow-md px-4 py-2 rounded-md"
              >
                Login
              </button>
            )}

            <button
              onClick={loginHandler}
              className="bg-[#0069FF] text-white font-bold px-4 py-2 rounded-md"
            >
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
      <div className="flex flex-col items-center mt-10 px-4 text-center">
        <h3 className="text-[#3C81E3] font-bold text-md">
          Read 2X Faster With Audeus
        </h3>
        <h1 className="text-[#101828] text-2xl sm:text-4xl md:text-5xl font-bold mt-4 leading-tight">
          Read Aloud PDFs, Word Docs, Your <br />
          <span>Text, and More with Audeus</span>
        </h1>
        <h4 className="text-[#475467] text-lg sm:text-md font-medium mt-4">
          Listen to PDFs, docs, and your text with our text-to-speech app to
          save time and boost productivity.
        </h4>

        {/* ✅ Always shows the same button */}
        <button
          // onClick={loginHandler}
          className="bg-[#0069FF] text-white font-bold px-16 py-4 rounded-md mt-6 shadow-md text-2xl"
        >
          Get started for free today
        </button>

        <p className="text-[#8a8789] font-medium text-sm mt-2">
          Get Started In Less Than 60 Seconds. Cancel Anytime.
        </p>
      </div>
    </>
  );
};

export default Header;
