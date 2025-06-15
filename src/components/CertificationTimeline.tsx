
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { LucideIcon, Calendar, Target, Award, Clock } from 'lucide-react';

interface Certification {
  id: string;
  name: string;
  fullName: string;
  issuer: string;
  status: 'Complete' | 'In Progress' | 'Planned';
  progress: number;
  year: string;
  icon: LucideIcon;
  color: string;
  difficulty: 'Entry Level' | 'Associate' | 'Professional' | 'Expert';
  estimatedHours: number;
  prerequisites?: string[];
  description: string;
}

interface CertificationTimelineProps {
  certifications: Certification[];
}

export const CertificationTimeline = ({ certifications }: CertificationTimelineProps) => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Complete': return 'border-green-500/30 text-green-400 bg-green-500/10';
      case 'In Progress': return 'border-blue-500/30 text-blue-400 bg-blue-500/10';
      case 'Planned': return 'border-gray-500/30 text-gray-400 bg-gray-500/10';
      default: return 'border-gray-500/30 text-gray-400 bg-gray-500/10';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Entry Level': return 'text-green-400';
      case 'Associate': return 'text-yellow-400';
      case 'Professional': return 'text-orange-400';
      case 'Expert': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const sortedCerts = [...certifications].sort((a, b) => {
    const statusOrder = { 'In Progress': 0, 'Planned': 1, 'Complete': 2 };
    return statusOrder[a.status] - statusOrder[b.status];
  });

  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gray-900 border-gray-800 cyber-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Completed</p>
                <p className="text-2xl font-bold text-green-400">
                  {certifications.filter(c => c.status === 'Complete').length}
                </p>
              </div>
              <Award className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800 cyber-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">In Progress</p>
                <p className="text-2xl font-bold text-blue-400">
                  {certifications.filter(c => c.status === 'In Progress').length}
                </p>
              </div>
              <Clock className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800 cyber-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Planned</p>
                <p className="text-2xl font-bold text-yellow-400">
                  {certifications.filter(c => c.status === 'Planned').length}
                </p>
              </div>
              <Target className="w-8 h-8 text-yellow-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800 cyber-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Avg Progress</p>
                <p className="text-2xl font-bold text-purple-400">
                  {Math.round(certifications.reduce((acc, cert) => acc + cert.progress, 0) / certifications.length)}%
                </p>
              </div>
              <Calendar className="w-8 h-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Timeline */}
      <div className="space-y-6">
        {sortedCerts.map((cert, index) => (
          <div key={cert.id} className="relative">
            {/* Timeline Line */}
            {index !== sortedCerts.length - 1 && (
              <div className="absolute left-8 top-16 w-0.5 h-16 bg-gradient-to-b from-green-500/50 to-gray-600"></div>
            )}
            
            <Card 
              className={`bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 cursor-pointer cyber-border ${
                selectedCert?.id === cert.id ? 'ring-2 ring-green-500/50' : ''
              }`}
              onClick={() => setSelectedCert(selectedCert?.id === cert.id ? null : cert)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    {/* Timeline Dot */}
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      cert.status === 'Complete' ? 'bg-green-500 border-green-500' :
                      cert.status === 'In Progress' ? 'bg-blue-500 border-blue-500' :
                      'bg-gray-600 border-gray-600'
                    }`}></div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <cert.icon className={`w-8 h-8 ${cert.color}`} />
                        <div>
                          <CardTitle className="text-gray-100 text-lg">{cert.name}</CardTitle>
                          <CardDescription className="text-gray-400 text-sm">{cert.fullName}</CardDescription>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-gray-400">{cert.issuer}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-400">{cert.year}</span>
                        <span className="text-gray-500">•</span>
                        <span className={getDifficultyColor(cert.difficulty)}>{cert.difficulty}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Badge className={getStatusColor(cert.status)}>
                    {cert.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-gray-400">{cert.progress}%</span>
                    </div>
                    <Progress 
                      value={cert.progress} 
                      className="h-2 bg-gray-800"
                    />
                  </div>

                  {/* Expanded Details */}
                  {selectedCert?.id === cert.id && (
                    <div className="space-y-4 pt-4 border-t border-gray-800 animate-fade-in">
                      <p className="text-gray-300 text-sm">{cert.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-200 mb-2">Estimated Hours</h4>
                          <p className="text-gray-400 text-sm">{cert.estimatedHours}+ hours</p>
                        </div>
                        
                        {cert.prerequisites && cert.prerequisites.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold text-gray-200 mb-2">Prerequisites</h4>
                            <div className="flex flex-wrap gap-1">
                              {cert.prerequisites.map((prereq, idx) => (
                                <Badge key={idx} className="bg-gray-800 text-gray-300 text-xs">
                                  {prereq}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
