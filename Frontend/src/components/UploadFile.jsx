import { useState, useRef } from "react";
import Logo from "./../../IMG/icon.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HomeIcon from "@mui/icons-material/Home";
import AppsIcon from "@mui/icons-material/Apps";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const UploadFile = () => {
  const [toggle, setToggle] = useState(false);
  const fileInputRef = useRef(null);
  const imageInputRef = useRef(null);
  const textInputRef = useRef(null);

  const OpenMenu = () => {
    console.log("Menu Opened");
    setToggle((prev) => !prev);
  };

  const OpenDocFolder = () => {
    console.log("Documents Folder Opened");
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const OpenImageFolder = () => {
    console.log("Images Folder Opened");
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  const OpenTextInput = () => {
    console.log("Text Input Opened");
    if (textInputRef.current) {
      textInputRef.current.focus();
      
    }
  };

  return (
    <div className="bg-[#F1F4F9]">
      <div className="flex flex-col items-start space-y-4 p-4">
        <div className="flex items-center space-x-2">
          <img className="h-10" src={Logo} alt="logo" />
          <h1 className="text-[#111C2C] text-xl font-bold">Audeus</h1>
        </div>

        <div className="relative">
          <div className="ml-0 gap-4">
            <button
              onClick={OpenMenu}
              className="rounded-full bg-white p-2 flex items-center space-x-2"
            >
              <span className="text-[#111C2C]">+ Add Files</span>
              <KeyboardArrowDownIcon />
            </button>
          </div>

          {toggle && (
            <div className="absolute mt-2 bg-white rounded-lg shadow-lg p-3 w-64">
              <div
                className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                onClick={OpenDocFolder}
              >
                <img src="./Img/Doc.png" alt="Documents" className="w-6 h-6" />
                <div>
                  <p className="font-medium text-gray-900">Documents</p>
                  <p className="text-sm text-gray-500">
                    Add PDFs, scanned PDFs, Word, & ePub
                  </p>
                </div>
              </div>
              <input
                type="file"
                accept=".pdf,.doc,.docx,.epub"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={(e) => console.log("Selected File:", e.target.files[0])}
              />

              <div
                className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                onClick={OpenImageFolder}
              >
                <img src="./Img/img-icon.png" alt="Images" className="w-6 h-6" />
                <div>
                  <p className="font-medium text-gray-900">Images</p>
                  <p className="text-sm text-gray-500">
                    Add scans, screenshots, or photos
                  </p>
                </div>
              </div>
              <input
                type="file"
                accept="image/*"
                ref={imageInputRef}
                style={{ display: "none" }}
                onChange={(e) => console.log("Selected Image:", e.target.files[0])}
              />

              <div
                className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                onClick={OpenTextInput}
              >
                <img src="./Img/copy-paste.png" alt="Paste" className="w-6 h-6" />
                <div>
                  <p className="font-medium text-gray-900">Paste & add your text</p>
                  <p className="text-sm text-gray-500">
                    Notepad to paste your text & read
                  </p>
                </div>
              </div>
              <textarea
                ref={textInputRef}
                style={{ display: "none" }}
                onChange={(e) => console.log("Entered Text:", e.target.value)}
              />
            </div>
          )}
        </div>

        <div className="flex items-center space-x-2 ml-6 rounded-lg bg-white p-2 cursor-pointer">
          <HomeIcon />
          <h1 className="font-medium text-md">Home</h1>
        </div>
        <div className="flex items-center space-x-2 ml-6 rounded-lg bg-white p-2 cursor-pointer">
          <AppsIcon />
          <h1 className="font-medium text-md">Apps</h1>
        </div>

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
        <div className="border-t border-gray-200 ">
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
  );
};

export default UploadFile;
