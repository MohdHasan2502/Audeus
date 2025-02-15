import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const HeaderTwo = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status on component load
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  // Handle login navigation
  const loginHandler = () => {
    navigate("/login");
  };

  // Handle logout
  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-col items-center mt-10 px-4 text-center">
        <h3 className="text-[#3C81E3] font-bold text-md">
          Read 2X Faster With Audeus
        </h3>
        <h1 className="text-[#101828] text-2xl sm:text-4xl md:text-5xl font-bold mt-4 leading-tight">
          Read Aloud PDFs, Word Docs, Your <br />
          <span>Text, and More with Audeus</span>
        </h1>
        <h4 className="text-[#475467] text-lg sm:text-md font-Medium mt-4">
          Listen to PDFs, docs, and your text with our text-to-speech app to
          save time and boost productivity.
        </h4>

        {!isAuthenticated ? (
          <button
            onClick={loginHandler}
            className="bg-[#0069FF] text-white font-bold px-16 py-4 rounded-md mt-6 shadow-md text-2xl"
          >
            Get started for free today
          </button>
        ) : (
          <button
            onClick={logoutHandler}
            className="bg-red-600 text-white font-bold px-16 py-4 rounded-md mt-6 shadow-md text-2xl"
          >
            Logout
          </button>
        )}

        <p className="text-[#8a8789] font-medium text-sm mt-2">
          Get Started In Less Than 60 Seconds. Cancel Anytime.
        </p>
      </div>
    </>
  );
};

export default HeaderTwo;
