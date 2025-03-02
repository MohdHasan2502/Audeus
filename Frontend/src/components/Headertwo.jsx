// import { useNavigate } from "react-router-dom";
// import { useEffect,  } from "react";

const HeaderTwo = () => {
  // const navigate = useNavigate();
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status on component load
  // useEffect(() => {
  //   const token = localStorage.getItem("authToken");
  //   setIsAuthenticated(!!token);
  // }, []);

  // Handle login navigation
  // const loginHandler = () => {
  //   if (!isAuthenticated) {
  //     navigate("/login"); // Navigate to login if not authenticated
  //   } else {
  //     navigate("/uploadFile"); // Navigate to upload page if already logged in
  //   }
  // };

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

export default HeaderTwo;
