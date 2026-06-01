import { SectionFadeIn } from './SectionFadeIn';

export function About() {
  const badges = [
    "Jakarta",
    "Full Stack",
    "Coder",
    "Server Setup",
    "Codes on Mobile (Acode)",
    "VSCode"
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionFadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
            <div className="w-16 h-1 bg-sky-400 mx-auto rounded-full"></div>
          </div>
        </SectionFadeIn>

        <div className="glass-card p-8 md:p-12 rounded-2xl max-w-6xl mx-auto shadow-sm relative overflow-hidden bg-slate-50 border border-gray-100">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-sky-100/50 to-transparent -skew-x-12 transform -translate-x-full"></div>
          
          <SectionFadeIn delay={200}>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Fanzzx is a self-taught teenage coder from Jakarta who builds websites and full-stack web apps end to end. He sets up and manages his own Linux servers independently, handling configuration, networking, and deployment.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  He is deeply passionate about modern web technologies and building scalable architectures. Despite his young age, he takes a professional approach to coding, ensuring robust backends and highly interactive frontends.
                </p>
              </div>
              <div>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Whether he's working on complex server setups or sleek user interfaces, he strives for performance and seamless user experiences. He codes daily on his smartphone using Acode and visits a computer rental to use VSCode when available, demonstrating true dedication.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  To accelerate his workflow, he regularly leverages AI tools like Google AI Studio and Project IDX. He is proficient in HTML, CSS, JavaScript, TypeScript, React.js, C, C++, Python, Java, PHP, and managing Linux environments.
                </p>
              </div>
            </div>
          </SectionFadeIn>

          <SectionFadeIn delay={400}>
            <div className="flex flex-wrap gap-3 mt-8 justify-center">
              {badges.map((badge, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-sm font-medium shadow-sm transition-all duration-300 hover:scale-105 hover:bg-sky-100"
                >
                  {badge}
                </span>
              ))}
            </div>
          </SectionFadeIn>
        </div>
      </div>
    </section>
  );
}
