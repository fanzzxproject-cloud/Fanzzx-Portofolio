import { SectionFadeIn } from './SectionFadeIn';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-[100dvh] flex flex-col items-center justify-center pt-24 pb-20 relative overflow-hidden bg-white">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-sky-100 animate-gradient-bg opacity-80 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center flex-grow justify-center">
        <SectionFadeIn>
          <div className="relative mb-8 mt-12 md:mt-0">
            <div className="absolute -inset-2 rounded-full bg-sky-400 blur-md opacity-30 animate-pulse"></div>
            <img 
              src="https://zlr.my.id/oxGr.png" 
              alt="Fanzzx Avatar" 
              className="w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.5)] object-cover relative z-10" 
            />
          </div>
        </SectionFadeIn>

        <SectionFadeIn delay={150}>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Hi, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-400">Fanzzx</span>
          </h1>
        </SectionFadeIn>

        <SectionFadeIn delay={300}>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-slate-600 mx-auto font-medium leading-relaxed">
            A teenage coder from Jakarta building websites and running his own servers.
          </p>
        </SectionFadeIn>

        <SectionFadeIn delay={450}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-full bg-sky-500 hover:bg-sky-400 text-white font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-sky-500/20"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-full bg-transparent border-2 border-sky-400 text-sky-600 hover:bg-sky-50 font-bold transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </SectionFadeIn>
      </div>

      <a href="#about" className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-slate-400 hover:text-sky-500 transition-colors z-10" aria-label="Scroll Down">
        <span className="text-sm font-medium mb-2">Scroll Down</span>
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
}
