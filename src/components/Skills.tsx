import { SectionFadeIn } from './SectionFadeIn';
import { frontendSkills, backendSkills, aiTools, repoDeploy } from '../data/skills';
import { Key } from 'react';

/**
 * Skill Card rendering component.
 * STRICT RULES APPLIED:
 * - Skill card bg: style={{backgroundColor:'#FFFFFF'}} hardcoded
 * - Skill card text: style={{color:'#0F172A'}} hardcoded
 */
function SkillCard({ name, icon }: { name: string, icon: string, key?: Key }) {
  return (
    <div 
      className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md dark:bg-white dark:text-gray-900 border border-gray-100"
      style={{ backgroundColor: '#FFFFFF', color: '#0F172A' }}
    >
      <img src={icon} alt={name} className="w-10 h-10 sm:w-12 sm:h-12 object-contain mb-2 sm:mb-3" />
      <span className="font-semibold text-xs sm:text-sm text-center">{name}</span>
    </div>
  );
}

function SkillCategory({ title, skills, delay }: { title: string, skills: {name: string, icon: string}[], delay: number }) {
  return (
    <SectionFadeIn delay={delay}>
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-sky-600 mb-6 border-b border-gray-200 pb-2 inline-block shadow-sm">
          {title}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </SectionFadeIn>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-50 via-white to-white opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionFadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
            <div className="w-16 h-1 bg-sky-400 mx-auto rounded-full"></div>
          </div>
        </SectionFadeIn>

        <SkillCategory title="Frontend Development" skills={frontendSkills} delay={200} />
        <SkillCategory title="Backend & Core" skills={backendSkills} delay={300} />
        <SkillCategory title="AI Tools" skills={aiTools} delay={400} />
        <SkillCategory title="Version Control & Deploy" skills={repoDeploy} delay={500} />
      </div>
    </section>
  );
}
