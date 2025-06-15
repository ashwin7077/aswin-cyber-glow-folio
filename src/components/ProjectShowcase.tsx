
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Search, Filter, LucideIcon } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  status: 'Complete' | 'Active' | 'Ongoing' | 'Planned';
  type: 'Tool' | 'Writeup' | 'Research' | 'CTF';
  icon: LucideIcon;
  github: string;
  demo: string;
  featured: boolean;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

interface ProjectShowcaseProps {
  projects: Project[];
}

export const ProjectShowcase = ({ projects }: ProjectShowcaseProps) => {
  const [filter, setFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const types = ['all', ...Array.from(new Set(projects.map(p => p.type)))];
  
  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'all' || project.type === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const regularProjects = filteredProjects.filter(p => !p.featured);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Complete': return 'border-green-500/30 text-green-400 bg-green-500/10';
      case 'Active': return 'border-blue-500/30 text-blue-400 bg-blue-500/10';
      case 'Ongoing': return 'border-yellow-500/30 text-yellow-400 bg-yellow-500/10';
      default: return 'border-gray-500/30 text-gray-400 bg-gray-500/10';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400';
      case 'Intermediate': return 'text-yellow-400';
      case 'Advanced': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="space-y-8">
      {/* Search and Filter Controls */}
      <div className="cyber-border bg-gray-900/30 p-6 rounded-lg backdrop-blur-sm">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search projects, technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <div className="flex space-x-1">
              {types.map((type) => (
                <Button
                  key={type}
                  size="sm"
                  variant={filter === type ? "default" : "outline"}
                  onClick={() => setFilter(type)}
                  className={`text-xs ${
                    filter === type 
                      ? "bg-green-500 text-black hover:bg-green-600" 
                      : "border-gray-600 text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-green-400 font-mono flex items-center">
            <span className="text-gray-500 mr-2">$</span>
            featured_projects
          </h3>
          <div className="grid lg:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="bg-gray-900 border-gray-800 hover:border-green-500/50 transition-all duration-300 cyber-border">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <project.icon className="w-8 h-8 text-green-400" />
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                        FEATURED
                      </Badge>
                    </div>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-gray-100 text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Type: <span className="text-gray-300">{project.type}</span></span>
                      <span className={`${getDifficultyColor(project.difficulty)} font-medium`}>
                        {project.difficulty}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} className="bg-gray-800 text-gray-300 text-xs border-gray-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-green-500 hover:bg-green-600 text-black flex-1">
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </Button>
                      <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 flex-1">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Regular Projects */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-100 font-mono flex items-center">
          <span className="text-gray-500 mr-2">$</span>
          all_projects
          <span className="text-sm text-gray-400 ml-3">({regularProjects.length} found)</span>
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularProjects.map((project) => (
            <Card key={project.id} className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 cursor-pointer group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <project.icon className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform" />
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-gray-100">{project.title}</CardTitle>
                <CardDescription className="text-gray-400">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} className="bg-gray-800 text-gray-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge className="bg-gray-800 text-gray-400 text-xs">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" className="bg-green-500 hover:bg-green-600 text-black flex-1">
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 flex-1">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
