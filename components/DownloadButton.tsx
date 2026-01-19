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
    <div className="relative group">
      <div className={`absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500 ${isClicked ? 'scale-95' : ''}`}></div>
      
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleDownload}
        className={`
          relative px-12 py-5 rounded-2xl font-bold text-lg
          transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]
          flex items-center gap-3 active:scale-95
          ${isHovered ? 'bg-blue-600 -translate-y-1' : 'bg-blue-700'}
          text-white shadow-2xl
        `}
      >
        <span className="relative z-10 tracking-wide">Download Mushtaq Store</span>
        
        <div className={`transition-transform duration-500 ${isHovered ? 'translate-y-1' : ''}`}>
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        {/* Shine Overlay */}
        <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden pointer-events-none">
          <div className={`
            absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-35deg]
            transition-all duration-1000
            ${isHovered ? 'left-[200%]' : ''}
          `}></div>
        </div>
      </button>

      <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
        <span className="text-blue-400/80 text-xs font-bold uppercase tracking-widest whitespace-nowrap">
          Mushtaq_store.apk (24.5 MB)
        </span>
      </div>
    </div>
  );
};

export default DownloadButton;