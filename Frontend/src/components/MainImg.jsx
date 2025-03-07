// import React from 'react'

const MainImg = () => {
  return (
   <>
    <div className="relative flex justify-center items-center mt-10">
        {/* Ambient Light Glow */}
        <div className="absolute w-full sm:w-3/4 h-full rounded-lg blur-3xl opacity-70 animate-glow"></div>
        {/* Image */}
        <img
          className="relative w-full sm:w-3/4 object-cover z-10 rounded-lg"
          src="/IMG/speech.jpg"
          alt="speed"
        />
      </div>

      <div className="flex flex-col items-center mt-4 px-4 text-center">
        <h3 className="font-medium">Trusted by students & professionals at</h3>
      </div>
      {/* IMAGES */}
      <div className="flex flex-wrap justify-center items-center gap-4 mt-4 px-4">
        <img
          className="w-24 h-24 object-contain"
          src="/IMG/img1.png"
          alt="University_of_Chicago-Logo"
        />
        <img
          className="w-24 h-24 object-contain"
          src="/IMG/img2.png"
          alt="UCLA"
        />
        <img
          className="w-24 h-24 object-contain"
          src="/IMG/img3.jpg"
          alt="illinois"
        />
        <img
          className="w-24 h-24 object-contain"
          src="/IMG/microsof.png"
          alt="microsoft"
        />
        <img
          className="w-24 h-24 object-contain"
          src="/IMG/meta.png"
          alt="meta"
        />
        <img
          className="w-24 h-24 object-contain"
          src="/IMG/merck-logo.png"
          alt="merck"
        />
        <img
          className="w-24 h-24 object-contain"
          src="/IMG/coinbase.png"
          alt="coinbase"
        />
        <img
          className="w-24 h-24 object-contain"
          src="/Img/snap.png"
          alt="snap"
        />
      </div>

      <div className="flex flex-col items-center mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold">How it works</h1>
        <p className="text-xl font-semi-light   ">
          Audeus reads your documents for you so you can save time, energy, and
          make rapid progress on your work
        </p>
      </div>
   
   </>
  )
}

export default MainImg