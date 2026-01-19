
import React, { useState } from 'react';

const DownloadButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleDownload = () => {
    setIsClicked(true);
    
    // Path: apk/Mushtaq_store.apk
    const link = document.createElement('a');
    link.href = './apk/Mushtaq_store.apk';
    link.download = 'Mushtaq_store.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset clicked state after animation
    setTimeout(() => setIsClicked(false), 300);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleDownload}
        className={`
          relative group px-10 py-5 rounded-2xl font-bold text-xl
          transition-all duration-300 ease-out
          flex items-center gap-3
          ${isClicked ? 'scale-95' : isHovered ? 'scale-105' : 'scale-100'}
          bg-gradient-to-r from-blue-600 to-indigo-600
          hover:from-blue-500 hover:to-indigo-500
          text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]
          hover:shadow-[0_0_35px_rgba(37,99,235,0.6)]
          active:shadow-inner
        `}
      >
        <span className="relative z-10">Download APK</span>
        
        <svg 
          className={`w-6 h-6 transition-transform duration-300 ${isHovered ? 'translate-y-1' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>

        <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden">
          <div className={`
            absolute top-0 -left-[100%] w-1/2 h-full bg-white/20 skew-x-[-25deg]
            transition-all duration-700
            ${isHovered ? 'left-[150%]' : ''}
          `}></div>
        </div>
      </button>

      <p className={`text-blue-400 text-sm transition-opacity duration-300 ${isHovered ? 'opacity-100 animate-bounce' : 'opacity-0'}`}>
        Tap to start download
      </p>
    </div>
  );
};

export default DownloadButton;
