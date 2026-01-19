import React from 'react';
import Background from './components/Background';
import DownloadButton from './components/DownloadButton';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-6 selection:bg-blue-500 selection:text-white">
      <Background />
      
      <main className="relative z-10 w-full max-w-lg">
        <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl flex flex-col items-center text-center">
          
          <div className="mb-10 animate-float">
            <div className="inline-flex items-center justify-center p-6 rounded-[2rem] bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-white/10 shadow-inner group transition-all duration-500 hover:scale-110">
               <svg className="w-20 h-20 text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
               </svg>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 tracking-tighter mb-4">
            Mushtaq Store
          </h1>
          
          <p className="text-gray-400 text-lg font-normal mb-10 max-w-sm leading-relaxed">
            The ultimate destination for premium Android experiences. Safe, fast, and optimized.
          </p>

          <DownloadButton />

          <div className="mt-12 flex items-center gap-6 py-4 px-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Version</p>
              <p className="text-white font-semibold">1.0.0</p>
            </div>
            <div className="w-px h-8 bg-white/10"></div>
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Size</p>
              <p className="text-white font-semibold">24.5 MB</p>
            </div>
            <div className="w-px h-8 bg-white/10"></div>
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Security</p>
              <p className="text-green-400 font-semibold flex items-center gap-1">
                Verified
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="absolute bottom-10 flex flex-col items-center gap-2">
        <p className="text-gray-500 text-xs uppercase tracking-[0.3em] font-medium">
          Official Distribution Channel
        </p>
        <p className="text-gray-600 text-[10px] font-light">
          &copy; {new Date().getFullYear()} Mushtaq Store. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;