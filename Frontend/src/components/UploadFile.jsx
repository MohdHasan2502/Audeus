import Logo from "./../../IMG/icon.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HomeIcon from "@mui/icons-material/Home";
import AppsIcon from "@mui/icons-material/Apps";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const UploadFile = () => {
  return (
    <>
      <div className="bg-[#F1F4F9]">
        <div className="flex flex-col items-start space-y-4 p-4">
          {/* Logo and Title Section */}
          <div className="flex items-center space-x-2">
            <img className="h-10" src={Logo} alt="logo" />
            <h1 className="text-[#111C2C] text-xl font-bold">Audeus</h1>
          </div>

          {/* Button Section - Aligned Left */}
          <div className="ml-0 gap-4">
            <button className="rounded-full bg-white p-2 flex items-center space-x-2">
              <span className="text-[#111C2C]">+ Add Files</span>
              <KeyboardArrowDownIcon />
            </button>
          </div>

          {/* Home Section - Icon and Text next to each other */}
          <div className="flex items-center space-x-2 ml-6  rounded-lg bg-white p-2 cursor-pointer">
            <HomeIcon />
            <h1 className="font-medium text-md">Home</h1>
          </div>
          <div className="flex items-center space-x-2 ml-6  rounded-lg bg-white p-2 cursor-pointer">
            <AppsIcon />
            <h1 className="font-medium text-md">Apps</h1>
          </div>
          {/* bottom left section */}
          <div className="p-4 border-t border-gray-200 ">
            <div className="flex items-start gap-2 mb-4 mt-48">
              <span className="font-medium ">Try Audeus Pro</span>
            </div>
            <p className="text-sm text-gray-500 mb-2">
              Get access to unlimited files, <br /> 120+ voices, and Pro support
            </p>
            <button className="w-1/2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Try Now
            </button>
          </div>
          <hr />
          {/* Profile setion down left side   */}
          <div className=" border-t border-gray-200 ">
            <div className="flex items-center gap-3 mt-[-49px] p-4">
              <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white">
                M
              </div>
              <span className="text-gray-700">Mohd Hasan</span>
              <KeyboardArrowRightIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadFile;
