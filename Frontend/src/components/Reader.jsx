import { useState, useEffect, useRef } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// ✅ Reader component
const Reader = () => {
  const [numPages, setNumPages] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [textContent, setTextContent] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const speechRef = useRef(null);
  const timerRef = useRef(null);

  // ✅ Retrieve file from localStorage
  useEffect(() => {
    const storedFileUrl = localStorage.getItem("fileUrl");
    if (storedFileUrl) {
      setFileUrl(storedFileUrl);
    }
  }, []);

  // ✅ Handle PDF load success
  const onDocumentLoadSuccess = async ({ numPages }) => {
    setNumPages(numPages);
    await extractTextFromPDF(numPages);
  };

  // 🔥 Extract text from all PDF pages
  const extractTextFromPDF = async (numPages) => {
    let text = "";
    const loadingTask = pdfjs.getDocument(fileUrl);
    const pdf = await loadingTask.promise;

    for (let pageNum = 1; pageNum <= numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const content = await page.getTextContent();
      const pageText = content.items.map((item) => item.str).join(" ");
      text += `${pageText} `;
    }
    setTextContent(text.trim());
  };

  // 🔥 Play text-to-speech with progress
  const handleSpeak = () => {
    if ("speechSynthesis" in window && textContent) {
      const utterance = new SpeechSynthesisUtterance(textContent);
      utterance.lang = "en-US";
      utterance.onboundary = (event) => {
        if (event.name === "word") {
          setCurrentWordIndex(event.charIndex);
        }
      };
      utterance.onstart = () => {
        setIsSpeaking(true);
        setElapsedTime(0);
        const estimatedTime = Math.ceil(textContent.split(" ").length / 2); // Roughly 2 words/sec
        setTotalTime(estimatedTime);

        timerRef.current = setInterval(() => {
          setElapsedTime((prev) => prev + 1);
        }, 1000);
      };
      utterance.onend = () => {
        setIsSpeaking(false);
        clearInterval(timerRef.current);
      };

      speechRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    }
  };

  // 🔥 Stop speech and timer
  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    clearInterval(timerRef.current);
  };

  // 🔥 Format time as mm:ss
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
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
        {/* 🔥 Custom Audio Player UI matching the screenshot */}
        <div className="mb-4 p-4 bg-blue-50 rounded-lg shadow flex flex-col items-start">
          <h3 className="font-semibold text-blue-700 flex items-center">
            <span className="mr-2">🔊</span>
            Now Playing: <a href="#" className="text-blue-600 hover:underline ml-1">Mohd_Hasan_Intela_Support_App-Support_Analyst</a>
          </h3>
          <div className="mt-2 flex items-center w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: `${(elapsedTime / totalTime) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between items-center w-full mt-2">
            <span className="text-sm">{formatTime(elapsedTime)}</span>
            <div className="flex items-center">
              <button
                onClick={handleSpeak}
                disabled={isSpeaking}
                className="p-2 text-blue-500 hover:text-blue-700"
              >
                ▶️
              </button>
              <button
                onClick={handleStop}
                disabled={!isSpeaking}
                className="p-2 text-red-500 hover:text-red-700"
              >
                ⏹️
              </button>
            </div>
            <span className="text-sm">{formatTime(totalTime - elapsedTime)}</span>
          </div>
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
