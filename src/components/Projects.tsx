import { SectionFadeIn } from './SectionFadeIn';

const projects = [
  {
    title: 'Modern E-Commerce API',
    description: 'A robust backend service for modern e-commerce platforms, developed from scratch using TypeScript and Express. Implemented complex authentication, role-based access control, and seamless payment gateway integration.',
    tech: ['TypeScript', 'Node.js', 'Express', 'JWT']
  },
  {
    title: 'Real-Time Chat App',
    description: 'A high-performance real-time messaging application with private and group chat functionalities. Engineered with a responsive UI and optimized WebSocket connections for minimal latency.',
    tech: ['React.js', 'Tailwind CSS', 'Socket.io', 'Node.js']
  },
  {
    title: 'Linux Server Automation',
    description: 'A collection of custom bash and Python scripts designed to automate the provisioning, monitoring, and maintenance of self-hosted Linux web servers, increasing uptime and deployment speed.',
    tech: ['Python', 'Bash', 'Linux', 'Nginx']
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionFadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <div className="w-16 h-1 bg-sky-400 mx-auto rounded-full"></div>
          </div>
        </SectionFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <SectionFadeIn key={index} delay={index * 150 + 200}>
              <div className="glass-card h-full flex flex-col p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 group cursor-pointer border border-gray-200 hover:border-sky-200 shadow-sm bg-white">
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-sky-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-medium border border-sky-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </SectionFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
