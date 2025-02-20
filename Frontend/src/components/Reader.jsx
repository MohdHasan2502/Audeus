import { useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Reader = () => {
  const location = useLocation();
  const file = location.state?.file;  // Get file from navigation
  const [numPages, setNumPages] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [text, setText] = useState(""); 
  const [isPlaying, setIsPlaying] = useState(false);
  const speechRef = useRef(new SpeechSynthesisUtterance());

  console.log("Received file in Reader.jsx:", file);  // Debugging Log

  const fileUrl = location.state?.fileUrl; 

  // Convert file to a valid PDF URL
  useEffect(() => {
    if (fileUrl) {
      setPdfUrl(fileUrl);
    }
  }, [fileUrl]);

  useEffect(() => {
    if (pdfUrl) {
      extractTextFromPDF(pdfUrl);
    }
  }, [pdfUrl]);

  const extractTextFromPDF = async (pdfUrl) => {
    const loadingTask = pdfjs.getDocument(pdfUrl);
    try {
      const pdf = await loadingTask.promise;
      let extractedText = "";

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map((item) => item.str).join(" ");
        extractedText += pageText + " ";
      }

      setText(extractedText);
    } catch (error) {
      console.error("Error loading PDF:", error);
    }
  };

  useEffect(() => {
    if (isPlaying && text) {
      speechRef.current.text = text;
      window.speechSynthesis.speak(speechRef.current);
    } else {
      window.speechSynthesis.cancel();
    }
  }, [isPlaying, text]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    window.speechSynthesis.pause();
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  if (!file) {
    return <h2 className="text-center text-lg font-semibold">Error: No file received. Try re-uploading.</h2>;
  }

  return (
    <div className="bg-[#F1F4F9] min-h-screen flex flex-col items-center justify-center p-4">
      {/* Audio Controls */}
      <div className="flex items-center space-x-4 bg-white p-3 rounded-md shadow-md mb-4">
        <button onClick={handlePlay} className="bg-blue-500 text-white px-4 py-2 rounded">▶️ Play</button>
        <button onClick={handlePause} className="bg-yellow-500 text-white px-4 py-2 rounded">⏸️ Pause</button>
        <button onClick={handleStop} className="bg-red-500 text-white px-4 py-2 rounded">⏹️ Stop</button>
      </div>

      {/* PDF Viewer */}
      <div className="w-full max-w-3xl shadow-lg border rounded-md overflow-hidden">
        {pdfUrl ? (
          <Document
            file={pdfUrl}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            onLoadError={(error) => console.error("PDF Load Error:", error)}
            className="border"
          >
            {numPages &&
              Array.from(new Array(numPages), (el, index) => (
                <Page key={index} pageNumber={index + 1} />
              ))}
          </Document>
        ) : (
          <p className="text-center">Failed to load PDF file.</p>
        )}
      </div>
    </div>
  );
};

export default Reader;
