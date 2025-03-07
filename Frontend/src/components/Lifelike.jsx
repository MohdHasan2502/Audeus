
import Audioplay from './Audioplay';

const Lifelike = () => {
  return (
    <>
    
    {/*  list */}
    <div className="flex flex-col md:flex-row items-center justify-between mt-20 px-6 md:px-12">
        {/* Left Section - Lifelike Content */}
        <div className="flex flex-col md:w-1/2 space-y-4">
          {/* Title Section */}
          <h1 className="text-3xl font-bold text-gray-900">
            Lifelike voices to keep you in flow
          </h1>
          <h4 className="font-medium text-gray-700">
            Bring your reading to life with natural, engaging voices
          </h4>

          {/* Points Section */}
          <div className="space-y-3 text-gray-800">
            <div className="flex items-start space-x-2">
              <span className="text-green-500">✔</span>
              <h4>Enjoy reading more with voices that sound real</h4>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-green-500">✔</span>
              <h4>Double your reading speed instantly with our app</h4>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-green-500">✔</span>
              <h4>Have even the most technical words read to you smoothly</h4>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-green-500">✔</span>
              <h4>Stay focused longer with voices that pull you in</h4>
            </div>
          </div>
        </div>

        {/* Right Section - Audioplay */}
        <div className="flex flex-col justify-center items-center space-y-6 mt-10">
          <Audioplay />
          <Audioplay />
          <Audioplay />
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between gap-6 px-4 md:px-12 mt-28">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900 text-start mb-4">
            Listen at the speed that’s right for you
          </h1>
          <h2 className="text-xl font-normal mb-6">
            Adjust your playback speed to save time and understand more
          </h2>
          <div className="flex flex-col font-semibold gap-4 text-[#5c5d5e]">
            <p>Save time by listening at faster speeds</p>
            <p>Boost comprehension by slowing down complex text</p>
            <p>Increase Productivity with custom playback speeds</p>
            <p>Effortlessly adjust your speed with easy-to-use controls</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center   flex-1">
          <div className="w-full max-w-sm bg-white shadow-lg  rounded-2xl p-6">
            <div className="text-center">
              <h2 className="text-lg font-medium">Playback Speed</h2>
              <p className="mt-4 text-4xl font-bold text-blue-600">2x</p>
              <div className="mt-4 flex justify-center space-x-4">
                {["1x", "1.25x", "1.5x", "2x", "2.25x"].map((speed) => (
                  <button
                    key={speed}
                    className={`px-4 py-2 rounded-full border text-sm font-medium 
                    ${
                      speed === "2x"
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-600 "
                    }
                  `}
                  >
                    {speed}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-6 text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 text-lg font-semibold rounded-full">
                Get Started For Free Today →
              </button>
              <p className="mt-2 text-sm text-gray-500">
                Get Started In Less Than 60 Seconds • Cancel Anytime
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between items-start gap-10 p-6 mt-28 w-full flex-wrap">
        {/* Left Side: Icons */}
        <div className="flex flex-row justify-start items-center gap-10 p-6 w-full max-w-lg flex-wrap">
          <img src="/Img/adobe.png" alt="adobe" className="w-20 h-20" />
          <img src="/Img/word.png" alt="word" className="w-20 h-20" />
          <img src="/Img/epub.png" alt="epub" className="w-20 h-20" />
          <img src="/Img/doc.png" alt="doc" className="w-20 h-20" />
        </div>

        {/* Right Side: Text Content */}
        <div className="flex flex-col items-start gap-4 p-6 bg-white rounded-md shadow-md w-full max-w-lg">
          {/* Tag-like Text */}
          <div className="px-3 py-1 text-sm font-normal text-blue-500 bg-blue-100 rounded-full">
            Supported Files
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl font-bold text-gray-900">
            Instantly works with all your documents
          </h1>

          {/* Description */}
          <p className="text-md text-gray-600">
            From PDFs to Word docs, our app works with your preferred formats.
            We support PDF, Word (docx), non-DRM EPUB, and much more!
          </p>
        </div>
      </div>
    
    </>
  )
}

export default Lifelike