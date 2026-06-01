import { Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <img 
          src="https://zlr.my.id/oxGr.png" 
          alt="Fanzzx Logo" 
          className="w-12 h-12 rounded-full border border-sky-400/50 object-cover mb-4 grayscale hover:grayscale-0 transition-all duration-500" 
        />
        
        <p className="text-slate-500 text-sm font-medium mb-6">
          © 2026 Fanzzx. Built with Next.js (Vite Runtime).
        </p>

        <a 
          href="https://github.com/fanzzxproject-cloud" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-sky-600 transition-colors duration-300"
          aria-label="GitHub Profile"
        >
          <Github className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
}
