
import { useState, useEffect } from 'react';
import { LucideIcon } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: LucideIcon;
  color: string;
  category: string;
}

interface InteractiveSkillMeterProps {
  skills: Skill[];
}

export const InteractiveSkillMeter = ({ skills }: InteractiveSkillMeterProps) => {
  const [animatedLevels, setAnimatedLevels] = useState<Record<string, number>>({});
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      skills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedLevels(prev => ({
            ...prev,
            [skill.name]: skill.level
          }));
        }, index * 200);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [skills]);

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <div className="space-y-8">
      {categories.map(category => (
        <div key={category} className="space-y-4">
          <h3 className="text-xl font-semibold text-green-400 font-mono flex items-center">
            <span className="text-gray-500 mr-2">$</span>
            {category.toLowerCase().replace(' ', '_')}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {skills.filter(skill => skill.category === category).map((skill) => (
              <div
                key={skill.name}
                className="cyber-border bg-gray-900/30 p-4 rounded-lg transition-all duration-300 hover:bg-gray-800/50 cursor-pointer"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <skill.icon 
                        className={`w-6 h-6 ${skill.color} transition-all duration-300 ${
                          hoveredSkill === skill.name ? 'scale-110 drop-shadow-lg' : ''
                        }`} 
                      />
                      {hoveredSkill === skill.name && (
                        <div className="absolute inset-0 bg-current opacity-20 rounded-full animate-ping"></div>
                      )}
                    </div>
                    <span className="text-gray-100 font-medium">{skill.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-400 font-mono text-sm">
                      {animatedLevels[skill.name] || 0}%
                    </span>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-2 rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                      style={{ 
                        width: `${animatedLevels[skill.name] || 0}%`,
                        background: `linear-gradient(90deg, ${skill.color.replace('text-', 'rgb(var(--')}))`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                  {hoveredSkill === skill.name && (
                    <div className="mt-2 text-xs text-gray-400 font-mono">
                      Proficiency level in {skill.name.toLowerCase()}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
