
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Github, Linkedin, ExternalLink, Shield, Code, Book, Award, FileText, User, Briefcase, Terminal, Eye, Bug, Zap, Lock, Search, Cpu, Network, Key, AlertTriangle, CheckCircle, Clock, Trophy, Star } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const skills = [
    { name: "Web Security", icon: Shield, level: 85, color: "text-red-400" },
    { name: "Red Team", icon: Bug, level: 78, color: "text-red-500" },
    { name: "Blue Team", icon: Eye, level: 72, color: "text-blue-400" },
    { name: "Digital Forensics", icon: Search, level: 80, color: "text-green-400" },
    { name: "Malware Analysis", icon: Cpu, level: 75, color: "text-yellow-400" },
    { name: "Network Security", icon: Network, level: 82, color: "text-purple-400" },
    { name: "Cryptography", icon: Key, level: 70, color: "text-cyan-400" },
    { name: "Incident Response", icon: AlertTriangle, level: 77, color: "text-orange-400" }
  ];

  const projects = [
    {
      title: "Web Vulnerability Scanner",
      description: "Automated web application security scanner with custom payloads",
      tech: ["Python", "Requests", "BeautifulSoup"],
      status: "Active",
      type: "Tool",
      icon: Shield,
      github: "#",
      demo: "#"
    },
    {
      title: "TryHackMe Writeups",
      description: "Detailed writeups for 50+ TryHackMe rooms and challenges",
      tech: ["Penetration Testing", "CTF", "Documentation"],
      status: "Ongoing",
      type: "Writeup",
      icon: Book,
      github: "#",
      demo: "#"
    },
    {
      title: "Malware Analysis Lab",
      description: "Isolated environment for analyzing malicious software samples",
      tech: ["Virtual Machines", "Wireshark", "IDA Pro"],
      status: "Complete",
      type: "Research",
      icon: Bug,
      github: "#",
      demo: "#"
    },
    {
      title: "Phishing Detection ML",
      description: "Machine learning model to detect phishing emails with 94% accuracy",
      tech: ["Python", "TensorFlow", "NLP"],
      status: "Complete",
      type: "Tool",
      icon: Zap,
      github: "#",
      demo: "#"
    },
    {
      title: "CTF Challenge Solutions",
      description: "Solutions and writeups for various CTF competitions",
      tech: ["Reverse Engineering", "Cryptography", "Web Exploitation"],
      status: "Ongoing",
      type: "Writeup",
      icon: Trophy,
      github: "#",
      demo: "#"
    },
    {
      title: "Network Traffic Analyzer",
      description: "Real-time network monitoring and anomaly detection system",
      tech: ["Python", "Scapy", "Matplotlib"],
      status: "Active",
      type: "Tool",
      icon: Network,
      github: "#",
      demo: "#"
    }
  ];

  const certifications = [
    {
      name: "OSCP",
      fullName: "Offensive Security Certified Professional",
      issuer: "Offensive Security",
      status: "In Progress",
      progress: 75,
      year: "2024",
      icon: Shield,
      color: "text-red-400"
    },
    {
      name: "CEH",
      fullName: "Certified Ethical Hacker",
      issuer: "EC-Council",
      status: "Planned",
      progress: 25,
      year: "2024",
      icon: Bug,
      color: "text-orange-400"
    },
    {
      name: "CISSP",
      fullName: "Certified Information Systems Security Professional",
      issuer: "(ISC)²",
      status: "Planned",
      progress: 10,
      year: "2025",
      icon: Lock,
      color: "text-blue-400"
    },
    {
      name: "Security+",
      fullName: "CompTIA Security+",
      issuer: "CompTIA",
      status: "Complete",
      progress: 100,
      year: "2023",
      icon: CheckCircle,
      color: "text-green-400"
    }
  ];

  const achievements = [
    {
      title: "Top 10% TryHackMe",
      description: "Ranked in top 10% globally on TryHackMe platform",
      icon: Trophy,
      color: "text-yellow-400",
      date: "2024"
    },
    {
      title: "Bug Bounty Recognition",
      description: "Discovered critical vulnerability in major web application",
      icon: Bug,
      color: "text-red-400",
      date: "2024"
    },
    {
      title: "CTF Competition Winner",
      description: "1st place in university cybersecurity competition",
      icon: Star,
      color: "text-purple-400",
      date: "2023"
    },
    {
      title: "Research Publication",
      description: "Published research on machine learning in cybersecurity",
      icon: Book,
      color: "text-blue-400",
      date: "2023"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Terminal-style Header */}
      <div className="bg-gray-900 border-b border-gray-800 p-2">
        <div className="flex items-center space-x-2 text-sm">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-gray-400 font-mono">aswin@cybersec:~$</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Terminal className="w-6 h-6 text-green-400" />
              <span className="text-xl font-bold text-green-400 font-mono">aswin@cybersec</span>
            </div>
            <div className="flex space-x-1">
              {["dashboard", "projects", "skills", "certifications", "achievements"].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
                    activeSection === section
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "text-gray-400 hover:text-gray-200 hover:bg-gray-800"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-green-400/20 to-blue-400/20 p-1">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  <Shield className="w-20 h-20 text-green-400" />
                </div>
              </div>
              <h1 className="text-6xl font-bold mb-4 font-mono">
                <span className="text-green-400">Aswin</span>{" "}
                <span className="text-gray-100">Paudel</span>
              </h1>
              <div className="text-2xl text-gray-300 mb-6 font-mono">
                <span className="text-green-400">$</span> whoami
              </div>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Aspiring Cybersecurity Specialist | Ethical Hacker | Security Researcher
              </p>
              <div className="flex justify-center space-x-4">
                <Button className="bg-green-500 hover:bg-green-600 text-black font-mono">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
                <Button variant="outline" className="border-green-500/30 text-green-400 hover:bg-green-500/10 font-mono">
                  <FileText className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Dashboard Overview */}
        {activeSection === "dashboard" && (
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400">Active Projects</p>
                      <p className="text-2xl font-bold text-green-400">6</p>
                    </div>
                    <Code className="w-8 h-8 text-green-400" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400">CTF Solved</p>
                      <p className="text-2xl font-bold text-blue-400">127</p>
                    </div>
                    <Trophy className="w-8 h-8 text-blue-400" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400">Certifications</p>
                      <p className="text-2xl font-bold text-purple-400">4</p>
                    </div>
                    <Award className="w-8 h-8 text-purple-400" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400">Blog Posts</p>
                      <p className="text-2xl font-bold text-yellow-400">23</p>
                    </div>
                    <Book className="w-8 h-8 text-yellow-400" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-100 flex items-center">
                  <Terminal className="w-5 h-5 mr-2 text-green-400" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">Completed TryHackMe "Overpass" room</span>
                    <span className="text-gray-500">2 hours ago</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-400">→</span>
                    <span className="text-gray-300">Published blog post on XSS vulnerabilities</span>
                    <span className="text-gray-500">1 day ago</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400">!</span>
                    <span className="text-gray-300">Found critical vulnerability in web app</span>
                    <span className="text-gray-500">3 days ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Projects Section */}
        {activeSection === "projects" && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-100 flex items-center">
                <Briefcase className="w-8 h-8 mr-3 text-green-400" />
                Projects Dashboard
              </h2>
              <div className="flex space-x-2">
                <Badge variant="outline" className="border-green-500/30 text-green-400">Tools</Badge>
                <Badge variant="outline" className="border-blue-500/30 text-blue-400">Writeups</Badge>
                <Badge variant="outline" className="border-purple-500/30 text-purple-400">Research</Badge>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <project.icon className="w-8 h-8 text-green-400" />
                      <Badge 
                        variant="outline"
                        className={`${
                          project.status === "Complete" 
                            ? "border-green-500/30 text-green-400" 
                            : project.status === "Active"
                            ? "border-blue-500/30 text-blue-400"
                            : "border-yellow-500/30 text-yellow-400"
                        }`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-gray-100">{project.title}</CardTitle>
                    <CardDescription className="text-gray-400">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} className="bg-gray-800 text-gray-300 text-xs">
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

        {/* Skills Section */}
        {activeSection === "skills" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-100 flex items-center">
              <Code className="w-8 h-8 mr-3 text-green-400" />
              Skills & Expertise
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <skill.icon className={`w-6 h-6 ${skill.color}`} />
                        <span className="text-gray-100 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div 
                        className="bg-green-400 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Certifications Section */}
        {activeSection === "certifications" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-100 flex items-center">
              <Award className="w-8 h-8 mr-3 text-green-400" />
              Certifications & Training
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <cert.icon className={`w-8 h-8 ${cert.color}`} />
                      <Badge 
                        className={`${
                          cert.status === "Complete" 
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : cert.status === "In Progress"
                            ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                            : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                        }`}
                      >
                        {cert.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-gray-100">{cert.name}</CardTitle>
                    <CardDescription className="text-gray-400">{cert.fullName}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">{cert.issuer}</span>
                        <span className="text-gray-400">{cert.year}</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-400">Progress</span>
                          <span className="text-sm text-gray-400">{cert.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <div 
                            className="bg-green-400 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${cert.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Achievements Section */}
        {activeSection === "achievements" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-100 flex items-center">
              <Trophy className="w-8 h-8 mr-3 text-green-400" />
              Achievements & Recognition
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                      <span className="text-gray-400 text-sm">{achievement.date}</span>
                    </div>
                    <CardTitle className="text-gray-100">{achievement.title}</CardTitle>
                    <CardDescription className="text-gray-400">{achievement.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Contact Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-100 mb-4 font-mono">$ contact --aswin</h3>
            <p className="text-gray-400 mb-8">
              Open to collaboration, bug bounty partnerships, and cybersecurity discussions
            </p>
            <div className="flex justify-center space-x-6">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-black font-mono">
                <Mail className="w-5 h-5 mr-2" />
                Email
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 font-mono">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 font-mono">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </div>
            <Separator className="my-8 bg-gray-800" />
            <p className="text-gray-500 font-mono">
              © 2024 Aswin Paudel | Securing the digital world, one vulnerability at a time
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
