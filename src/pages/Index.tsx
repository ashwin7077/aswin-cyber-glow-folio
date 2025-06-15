
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Github, Linkedin, ExternalLink, Shield, Code, Book, Award, FileText, User, Briefcase, Terminal, Eye, Bug, Zap, Lock, Search, Cpu, Network, Key, AlertTriangle, CheckCircle, Clock, Trophy, Star, Download, Activity, Target } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");

  const skills = [
    { name: "Web Security", level: 85, category: "Offensive Security" },
    { name: "Penetration Testing", level: 78, category: "Offensive Security" },
    { name: "Digital Forensics", level: 80, category: "Defensive Security" },
    { name: "Malware Analysis", level: 75, category: "Reverse Engineering" },
    { name: "Network Security", level: 82, category: "Infrastructure" },
    { name: "Incident Response", level: 77, category: "Defensive Security" }
  ];

  const projects = [
    {
      title: "Web Vulnerability Scanner",
      description: "Automated web application security scanner with custom payloads",
      tech: ["Python", "Requests", "BeautifulSoup"],
      status: "Active",
      type: "Tool"
    },
    {
      title: "TryHackMe Writeups",
      description: "Detailed writeups for 50+ TryHackMe rooms",
      tech: ["Penetration Testing", "CTF", "Documentation"],
      status: "Ongoing",
      type: "Writeup"
    },
    {
      title: "Malware Analysis Lab",
      description: "Isolated environment for analyzing malicious software",
      tech: ["Virtual Machines", "Wireshark", "IDA Pro"],
      status: "Complete",
      type: "Research"
    },
    {
      title: "Phishing Detection AI",
      description: "Machine learning model to detect phishing emails",
      tech: ["Python", "TensorFlow", "NLP"],
      status: "Complete",
      type: "Tool"
    }
  ];

  const certifications = [
    { name: "OSCP", status: "In Progress", progress: 75, year: "2024" },
    { name: "CEH", status: "Planned", progress: 25, year: "2024" },
    { name: "Security+", status: "Complete", progress: 100, year: "2023" }
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return (
          <div className="space-y-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-100 flex items-center">
                  <User className="w-6 h-6 mr-2 text-blue-400" />
                  About Me
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Passionate cybersecurity specialist with expertise in penetration testing, 
                  digital forensics, and security research. Currently pursuing OSCP certification 
                  and actively contributing to the security community through CTF competitions 
                  and vulnerability research.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">150+</div>
                    <div className="text-sm text-gray-400">CTF Challenges</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">6</div>
                    <div className="text-sm text-gray-400">Active Projects</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">3</div>
                    <div className="text-sm text-gray-400">Certifications</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-400">40+</div>
                    <div className="text-sm text-gray-400">Writeups</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "skills":
        return (
          <div className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-100 flex items-center">
                  <Code className="w-6 h-6 mr-2 text-blue-400" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500">{skill.category}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "projects":
        return (
          <div className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-100 flex items-center">
                  <Briefcase className="w-6 h-6 mr-2 text-blue-400" />
                  Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {projects.map((project, index) => (
                    <Card key={index} className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                      <CardHeader>
                        <CardTitle className="text-lg text-gray-100">{project.title}</CardTitle>
                        <CardDescription className="text-gray-400">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, techIndex) => (
                              <Badge key={techIndex} className="bg-gray-700 text-gray-300 text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex justify-between items-center">
                            <Badge className={`${
                              project.status === 'Complete' ? 'bg-green-600' :
                              project.status === 'Active' ? 'bg-blue-600' : 'bg-yellow-600'
                            } text-white`}>
                              {project.status}
                            </Badge>
                            <span className="text-xs text-gray-500">{project.type}</span>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                              <Github className="w-3 h-3 mr-1" />
                              Code
                            </Button>
                            <Button size="sm" variant="outline" className="border-gray-600 text-gray-300">
                              <ExternalLink className="w-3 h-3 mr-1" />
                              Demo
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "certifications":
        return (
          <div className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-100 flex items-center">
                  <Award className="w-6 h-6 mr-2 text-blue-400" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {certifications.map((cert, index) => (
                    <div key={index} className="p-4 bg-gray-800 rounded-lg">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-semibold text-gray-100">{cert.name}</h3>
                        <Badge className={`${
                          cert.status === 'Complete' ? 'bg-green-600' :
                          cert.status === 'In Progress' ? 'bg-blue-600' : 'bg-gray-600'
                        } text-white`}>
                          {cert.status}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Progress</span>
                          <span className="text-gray-400">{cert.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${cert.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-500">Expected: {cert.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-blue-400" />
              <div>
                <span className="text-xl font-bold text-gray-100">Aswin Paudel</span>
                <div className="text-sm text-gray-400">Cybersecurity Specialist</div>
              </div>
            </div>
            <div className="flex space-x-1">
              {[
                { id: "about", label: "About", icon: User },
                { id: "skills", label: "Skills", icon: Code },
                { id: "projects", label: "Projects", icon: Briefcase },
                { id: "certifications", label: "Certifications", icon: Award }
              ].map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    activeSection === section.id
                      ? "bg-blue-600 text-white"
                      : "text-gray-400 hover:text-gray-200 hover:bg-gray-800"
                  }`}
                >
                  <section.icon className="w-4 h-4" />
                  <span>{section.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-gray-900 to-gray-950">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
              <Shield className="w-16 h-16 text-blue-400" />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-gray-100">Aswin</span>{" "}
            <span className="text-blue-400">Paudel</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-2">Aspiring Cybersecurity Specialist</p>
          <p className="text-lg text-gray-400 mb-8">Ethical Hacker & Security Researcher</p>
          
          <div className="flex justify-center space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {renderSection()}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-gray-100 mb-4">Get In Touch</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Interested in cybersecurity collaboration, bug bounty partnerships, or discussing the latest security trends? Let's connect!
          </p>
          
          <div className="flex justify-center space-x-4 mb-8">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Mail className="w-4 h-4 mr-2" />
              aswin@example.com
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
          </div>
          
          <Separator className="my-6 bg-gray-800" />
          
          <p className="text-gray-500">
            © 2024 Aswin Paudel. Building secure digital solutions.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
