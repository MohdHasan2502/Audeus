import { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// ✅ Reader component
const Reader = () => {
  const [numPages, setNumPages] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);

  // ✅ Retrieve the file from localStorage
  useEffect(() => {
    const storedFileUrl = localStorage.getItem("fileUrl");
    if (storedFileUrl) {
      setFileUrl(storedFileUrl);
    }
  }, []);

  // ✅ Handle PDF load success
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  // ✅ Error handling for missing file
  if (!fileUrl) {
    return (
      <h2 className="text-center text-lg font-semibold">
        ❌ Error: No valid file received. Please upload a valid PDF from your computer.
      </h2>
    );
  }

  return (
    <div className="p-4 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-4xl shadow-lg bg-white p-4 rounded-lg">
        {/* ✅ Audio Player Section */}
        <div className="mb-4 p-2 bg-blue-50 rounded-lg shadow">
          <h3 className="font-semibold text-center text-blue-700">
            🔊 Now Playing: Mohd_Hasan_Intela_Support_App-Support_Analyst
          </h3>
          <audio controls className="w-full mt-2">
            {/* ✅ Replace the src URL with the actual path of your audio file */}
            <source
              src="path-to-your-audio-file.mp3"
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>
        </div>

        {/* ✅ PDF Document Viewer */}
        <Document
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(error) => console.error("Error loading PDF:", error)}
        >
          {numPages ? (
            Array.from(new Array(numPages), (_, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                renderTextLayer={true}
                renderAnnotationLayer={true}
              />
            ))
          ) : (
            <p className="text-center">Loading PDF...</p>
          )}
        </Document>
      </div>
    </div>
  );
};

export default Reader;
