import { SectionFadeIn } from './SectionFadeIn';
import { Mail, Github } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionFadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Let's Connect</h2>
          <div className="w-16 h-1 bg-sky-400 mx-auto rounded-full mb-12"></div>
        </SectionFadeIn>

        <SectionFadeIn delay={200}>
          <div className="glass-card p-10 rounded-2xl border border-gray-200 shadow-sm">
            <p className="text-xl text-slate-600 mb-10 font-medium">
              Feel free to reach out through any of the channels below.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a 
                href="mailto:fanzzxproject@gmail.com"
                className="flex items-center gap-3 px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-sky-500/20 w-full sm:w-auto justify-center"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              
              <a 
                href="https://github.com/fanzzxproject-cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-white hover:bg-gray-50 border border-gray-300 text-slate-900 rounded-full font-bold transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>
        </SectionFadeIn>
      </div>
    </section>
  );
}
