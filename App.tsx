
import React from 'react';
import Background from './components/Background';
import DownloadButton from './components/DownloadButton';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <Background />
      
      <div className="relative z-10 text-center px-4">
        <div className="mb-8 animate-float">
          <div className="inline-flex items-center justify-center p-4 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl mb-6">
             <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
             </svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-2">
            Mushtaq Store
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-medium max-w-md mx-auto">
            Get the latest version of the official store directly on your Android device.
          </p>
        </div>

        <DownloadButton />

        <p className="mt-12 text-gray-500 text-sm font-light">
          Version 1.0.0 • 24.5 MB • Secure Download
        </p>
      </div>

      <footer className="absolute bottom-8 text-gray-600 text-xs uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Mushtaq Store Inc.
      </footer>
    </div>
  );
};

export default App;
