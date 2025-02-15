import { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function DummyAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1.25);

  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const increaseSpeed = () => {
    const newRate = playbackRate + 0.25 > 2 ? 1.0 : playbackRate + 0.25; // Reset speed after 2x
    setPlaybackRate(newRate);
    if (audioRef.current) {
      audioRef.current.playbackRate = newRate;
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-full shadow-lg w-96">
      {/* Gradient Icon */}
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center">
        <span className="text-white text-lg font-bold">A</span>
      </div>

      {/* Title */}
      <div className="flex flex-col ml-2">
        <p className="font-semibold text-gray-700">Alloy</p>
      </div>

      {/* Playback Speed */}
      <button
        onClick={increaseSpeed}
        className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600 font-medium"
      >
        {playbackRate.toFixed(2)}x
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center"
      >
        {isPlaying ? (
          <FaPause className="text-white text-lg" />
        ) : (
          <FaPlay className="text-white text-lg" />
        )}
      </button>

      {/* Dummy Audio */}
      <audio ref={audioRef} src="dummy-audio.mp3" />
    </div>
  );
}
