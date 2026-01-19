import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-0 bg-[#020617] overflow-hidden">
      {/* Primary Glow */}
      <div className="absolute top-[-15%] left-[-10%] w-[70%] h-[70%] bg-blue-600/10 rounded-full blur-[160px] animate-pulse"></div>
      <div className="absolute bottom-[-15%] right-[-10%] w-[70%] h-[70%] bg-indigo-600/10 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: '3s' }}></div>
      
      {/* Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-blue-400/5 rounded-full blur-[120px]"></div>

      {/* Grid Pattern with fading mask */}
      <div 
        className="absolute inset-0 opacity-[0.07]" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
        }}
      ></div>
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_85%)]"></div>
    </div>
  );
};

export default Background;