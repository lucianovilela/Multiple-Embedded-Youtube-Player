'use client'
import React, { useState } from 'react';
import { FaPlay, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
   
    <div 
      className={`fixed top-0 left-0 w-full bg-gray-800 p-4 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
    {/*
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      
      */}
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg">Navbar</div>
        <div className="flex space-x-4">
          <button className="text-white">
            <FaPlay size={20} />
          </button>
          <button className="text-white" onClick={toggleMute}>
            {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
