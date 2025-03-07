 

const Videos = () => {
  return (
    <> 
    {/* VIDEOS IMPLEMENED */}
          <div className="flex flex-wrap gap-6 justify-center items-center p-4">
            <div className="flex flex-col items-center">
              <video
                className="w-72 h-44 rounded-lg shadow-lg"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/vid1.mp4" type="video/mp4" />
              </video>
              <p className="mt-2 text-center text-lg font-semibold">Sign Up</p>
              <span>Create an account and get started in under 60 seconds</span>
            </div>
    
            <div className="flex flex-col items-center">
              <video
                className="w-72 h-44 rounded-lg shadow-lg"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/vid2.mp4" type="video/mp4" />
              </video>
              <p className="mt-2 text-center text-lg font-semibold">
                Upload Your Documents
              </p>
              <span>
                Drag and drop to upload instantly. PDFs, Word docs, text, web
                articles, and more
              </span>
            </div>
    
            <div className="flex flex-col items-center">
              <video
                className="w-72 h-44 rounded-lg shadow-lg"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/vid3.mp4" type="video/mp4" />
              </video>
              <p className="mt-2 text-center text-lg font-semibold">
                Choose a Voice & Listen
              </p>
              <span>
                Relax and listen to your documents without the strain of reading
              </span>
            </div>
          </div>
    
          {/* button*/}
          <div className="flex flex-col items-center text-center p-4">
            <button  className="bg-[#0069FF] text-white font-bold px-10 py-4 rounded-md mt-6 shadow-md text-xl sm:text-2xl">
              Get started for free today
            </button>
    
            <p className="text-[#8a8789] font-medium text-sm mt-2 max-w-xs sm:max-w-md">
              Get Started In Less Than 60 Seconds. Cancel Anytime.
            </p>
          </div>
    
    
    
    
    </>
  )
}

export default Videos