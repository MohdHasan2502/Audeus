import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./../../IMG/icon.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HomeIcon from "@mui/icons-material/Home";
import AppsIcon from "@mui/icons-material/Apps";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import DeleteIcon from "@mui/icons-material/Delete";

const UploadFile = () => {
  const [toggle, setToggle] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const fileInput = useRef(null);
  const navigate = useNavigate();

  // Toggle the file upload menu
  const OpenMenu = () => setToggle((prev) => !prev);
  const OpenDocFolder = () => fileInput.current?.click();

  // Handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newFile = {
        name: file.name,
        file: file, // Store actual file for reading
        preview: URL.createObjectURL(file),
      };
      setUploadedFiles((prev) => [newFile, ...prev]);
    }
  };

  // Handle file deletion
  const handleDelete = (index) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  // Handle file click for reading
  const handleFileClick = (file) => {
    if (!file || !file.preview) {
      console.error("No valid file found.");
      return;
    }

    // Save the file preview URL to localStorage
    localStorage.setItem("fileUrl", file.preview);
    navigate("/uploadfile/reader");
  };

  // 🔥 **[New] Handle navigation to Main Page when clicking on Logo**
  const navigateToHome = () => {
    navigate("/", { replace: true }); // Redirect to Main Page
  };

  return (
    <div className="bg-[#F1F4F9] min-h-screen flex">
      {/* Left Sidebar */}
      <div className="w-64 bg-white shadow-md p-4 flex flex-col justify-between">
        <div>
          {/* 🔥 [Updated] Added onClick to Logo for navigation */}
          <div
            className="flex items-center space-x-2 mb-4 cursor-pointer"
            onClick={navigateToHome} // 👈 Redirects to the Main Page (Header)
          >
            <img className="h-10" src={Logo} alt="logo" />
            <h1 className="text-[#111C2C] text-xl font-bold">Audeus</h1>
          </div>

          {/* File Upload Section */}
          <button
            onClick={OpenMenu}
            className="rounded-md bg-blue-600 text-white px-4 py-2 flex items-center justify-between w-full"
          >
            <span>+ Add Files</span>
            <KeyboardArrowDownIcon />
          </button>

          {/* Upload Options Dropdown */}
          {toggle && (
            <div className="mt-2 bg-white shadow-lg p-3 w-full">
              <div
                className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                onClick={OpenDocFolder}
              >
                <FilePresentIcon />
                <p className="font-medium text-gray-900">Documents</p>
              </div>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                ref={fileInput}
                className="hidden"
                onChange={handleFileUpload}
              />
            </div>
          )}

          {/* Sidebar Navigation */}
          <nav className="mt-4 space-y-2">
            <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
              <HomeIcon />
              <h1 className="font-medium text-md">Home</h1>
            </div>
            <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
              <AppsIcon />
              <h1 className="font-medium text-md">Apps</h1>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Reading Now</h2>
        </div>

        {/* Uploaded Files List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {uploadedFiles.map((file, index) => (
            <div key={index} className="w-full p-4 border rounded-lg shadow-md">
              <div
                className="h-40 bg-gray-200 flex items-center justify-center overflow-hidden cursor-pointer"
                onClick={() => handleFileClick(file)}
              >
                <p className="text-center text-gray-700">{file.name}</p>
              </div>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-xs truncate w-32">{file.name}</span>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
