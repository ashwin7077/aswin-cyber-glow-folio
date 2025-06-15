import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Github, Linkedin, ExternalLink, Shield, Code, Book, Award, FileText, User, Briefcase, Terminal, Eye, Bug, Zap, Lock, Search, Cpu, Network, Key, AlertTriangle, CheckCircle, Clock, Trophy, Star, Download, Activity, Target } from "lucide-react";

import { AnimatedTerminal } from "@/components/AnimatedTerminal";
import { InteractiveSkillMeter } from "@/components/InteractiveSkillMeter";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { CertificationTimeline } from "@/components/CertificationTimeline";

const Index = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const skills = [
    { name: "Web Security", icon: Shield, level: 85, color: "text-red-400", category: "Offensive Security" },
    { name: "Red Team Operations", icon: Bug, level: 78, color: "text-red-500", category: "Offensive Security" },
    { name: "Blue Team Defense", icon: Eye, level: 72, color: "text-blue-400", category: "Defensive Security" },
    { name: "Digital Forensics", icon: Search, level: 80, color: "text-green-400", category: "Defensive Security" },
    { name: "Malware Analysis", icon: Cpu, level: 75, color: "text-yellow-400", category: "Reverse Engineering" },
    { name: "Network Security", icon: Network, level: 82, color: "text-purple-400", category: "Infrastructure" },
    { name: "Cryptography", icon: Key, level: 70, color: "text-cyan-400", category: "Fundamentals" },
    { name: "Incident Response", icon: AlertTriangle, level: 77, color: "text-orange-400", category: "Defensive Security" }
  ];

  const projects = [
    {
      id: "1",
      title: "Advanced Web Vulnerability Scanner",
      description: "Automated web application security scanner with custom payloads and ML-based detection",
      longDescription: "A comprehensive web vulnerability scanner built with Python that incorporates machine learning for intelligent payload generation and vulnerability detection.",
      tech: ["Python", "Requests", "BeautifulSoup", "TensorFlow", "SQLMap"],
      status: "Active" as const,
      type: "Tool" as const,
      icon: Shield,
      github: "#",
      demo: "#",
      featured: true,
      difficulty: "Advanced" as const
    },
    {
      id: "2",
      title: "TryHackMe Elite Writeups",
      description: "Detailed writeups for 50+ TryHackMe rooms including OSCP-prep challenges",
      longDescription: "Comprehensive documentation of advanced penetration testing techniques through detailed writeups.",
      tech: ["Penetration Testing", "CTF", "Documentation", "Bash", "Python"],
      status: "Ongoing" as const,
      type: "Writeup" as const,
      icon: Book,
      github: "#",
      demo: "#",
      featured: true,
      difficulty: "Intermediate" as const
    },
    {
      id: "3",
      title: "Isolated Malware Analysis Lab",
      description: "Enterprise-grade isolated environment for analyzing malicious software samples",
      longDescription: "Complete malware analysis environment with custom VM orchestration and automated analysis pipelines.",
      tech: ["Virtual Machines", "Wireshark", "IDA Pro", "Ghidra", "YARA"],
      status: "Complete" as const,
      type: "Research" as const,
      icon: Bug,
      github: "#",
      demo: "#",
      featured: false,
      difficulty: "Advanced" as const
    },
    {
      id: "4",
      title: "AI-Powered Phishing Detection",
      description: "Machine learning model to detect phishing emails with 96% accuracy",
      longDescription: "Neural network-based phishing detection system using NLP and computer vision for email analysis.",
      tech: ["Python", "TensorFlow", "NLP", "Computer Vision", "Scikit-learn"],
      status: "Complete" as const,
      type: "Tool" as const,
      icon: Zap,
      github: "#",
      demo: "#",
      featured: false,
      difficulty: "Advanced" as const
    },
    {
      id: "5",
      title: "CTF Challenge Solutions Archive",
      description: "Solutions and writeups for 100+ CTF competitions with detailed explanations",
      longDescription: "Comprehensive archive of CTF solutions covering various categories from beginner to expert level.",
      tech: ["Reverse Engineering", "Cryptography", "Web Exploitation", "Binary Analysis"],
      status: "Ongoing" as const,
      type: "CTF" as const,
      icon: Trophy,
      github: "#",
      demo: "#",
      featured: false,
      difficulty: "Intermediate" as const
    },
    {
      id: "6",
      title: "Real-time Network Threat Monitor",
      description: "Enterprise network monitoring and anomaly detection system with ML capabilities",
      longDescription: "Real-time network traffic analysis system with machine learning-based anomaly detection.",
      tech: ["Python", "Scapy", "Matplotlib", "Elasticsearch", "Kibana"],
      status: "Active" as const,
      type: "Tool" as const,
      icon: Network,
      github: "#",
      demo: "#",
      featured: false,
      difficulty: "Advanced" as const
    }
  ];

  const certifications = [
    {
      id: "1",
      name: "OSCP",
      fullName: "Offensive Security Certified Professional",
      issuer: "Offensive Security",
      status: "In Progress" as const,
      progress: 75,
      year: "2024",
      icon: Shield,
      color: "text-red-400",
      difficulty: "Professional" as const,
      estimatedHours: 300,
      prerequisites: ["Linux fundamentals", "Network basics", "Scripting"],
      description: "Hands-on penetration testing certification requiring successful exploitation of multiple machines in a controlled environment."
    },
    {
      id: "2",
      name: "CEH",
      fullName: "Certified Ethical Hacker",
      issuer: "EC-Council",
      status: "Planned" as const,
      progress: 25,
      year: "2024",
      icon: Bug,
      color: "text-orange-400",
      difficulty: "Associate" as const,
      estimatedHours: 120,
      prerequisites: ["Security+", "Networking fundamentals"],
      description: "Comprehensive ethical hacking certification covering various attack vectors and defensive techniques."
    },
    {
      id: "3",
      name: "CISSP",
      fullName: "Certified Information Systems Security Professional",
      issuer: "(ISC)²",
      status: "Planned" as const,
      progress: 10,
      year: "2025",
      icon: Lock,
      color: "text-blue-400",
      difficulty: "Expert" as const,
      estimatedHours: 200,
      prerequisites: ["5 years experience", "Security domains knowledge"],
      description: "Advanced certification covering eight domains of cybersecurity knowledge for security professionals."
    },
    {
      id: "4",
      name: "Security+",
      fullName: "CompTIA Security+",
      issuer: "CompTIA",
      status: "Complete" as const,
      progress: 100,
      year: "2023",
      icon: CheckCircle,
      color: "text-green-400",
      difficulty: "Entry Level" as const,
      estimatedHours: 80,
      description: "Foundation-level certification covering essential cybersecurity principles and practices."
    }
  ];

  const achievements = [
    {
      title: "Top 5% TryHackMe Global",
      description: "Ranked in top 5% globally on TryHackMe platform with 500+ completed rooms",
      icon: Trophy,
      color: "text-yellow-400",
      date: "2024"
    },
    {
      title: "Critical CVE Discovery",
      description: "Discovered and reported critical vulnerability (CVE-2024-XXXX) in major enterprise software",
      icon: Bug,
      color: "text-red-400",
      date: "2024"
    },
    {
      title: "National CTF Championship",
      description: "1st place in National Cybersecurity Competition representing university team",
      icon: Star,
      color: "text-purple-400",
      date: "2024"
    },
    {
      title: "Research Publication",
      description: "Published peer-reviewed research on ML applications in threat detection at IEEE conference",
      icon: Book,
      color: "text-blue-400",
      date: "2023"
    },
    {
      title: "Bug Bounty Hall of Fame",
      description: "Recognized in Hall of Fame by 3+ major tech companies for security research",
      icon: Shield,
      color: "text-green-400",
      date: "2023"
    },
    {
      title: "Open Source Contributor",
      description: "Maintainer of popular cybersecurity tools with 1000+ GitHub stars",
      icon: Code,
      color: "text-cyan-400",
      date: "2023"
    }
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <div className="space-y-12">
            <AnimatedTerminal />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="bg-gray-900 border-gray-800 cyber-border group hover:bg-gray-800/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400">Active Projects</p>
                      <p className="text-3xl font-bold text-green-400">6</p>
                    </div>
                    <Code className="w-10 h-10 text-green-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="mt-2 text-xs text-gray-500">+2 this month</div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800 cyber-border group hover:bg-gray-800/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400">CTF Solved</p>
                      <p className="text-3xl font-bold text-blue-400">187</p>
                    </div>
                    <Trophy className="w-10 h-10 text-blue-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="mt-2 text-xs text-gray-500">Top 5% globally</div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800 cyber-border group hover:bg-gray-800/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400">Certifications</p>
                      <p className="text-3xl font-bold text-purple-400">4</p>
                    </div>
                    <Award className="w-10 h-10 text-purple-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="mt-2 text-xs text-gray-500">OSCP in progress</div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800 cyber-border group hover:bg-gray-800/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400">Writeups</p>
                      <p className="text-3xl font-bold text-yellow-400">45</p>
                    </div>
                    <Book className="w-10 h-10 text-yellow-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="mt-2 text-xs text-gray-500">Medium & GitHub</div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gray-900 border-gray-800 cyber-border">
              <CardHeader>
                <CardTitle className="text-gray-100 flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-green-400" />
                  Live Activity Feed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-center space-x-3 animate-fade-in">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400">[LIVE]</span>
                    <span className="text-gray-300">Completed TryHackMe "Relevant" room - Windows privilege escalation</span>
                    <span className="text-gray-500">23 minutes ago</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-blue-400">[BLOG]</span>
                    <span className="text-gray-300">Published "Advanced XSS Techniques" on Medium</span>
                    <span className="text-gray-500">2 hours ago</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-yellow-400">[CVE]</span>
                    <span className="text-gray-300">Submitted critical vulnerability report to vendor</span>
                    <span className="text-gray-500">1 day ago</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-purple-400">[CERT]</span>
                    <span className="text-gray-300">OSCP Lab progress: 75% complete</span>
                    <span className="text-gray-500">3 days ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "projects":
        return <ProjectShowcase projects={projects} />;

      case "skills":
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-gray-100 flex items-center justify-center">
                <Code className="w-10 h-10 mr-3 text-green-400" />
                Technical Arsenal
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A comprehensive overview of my cybersecurity expertise across multiple domains, 
                from offensive security to digital forensics.
              </p>
            </div>
            <InteractiveSkillMeter skills={skills} />
          </div>
        );

      case "certifications":
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-gray-100 flex items-center justify-center">
                <Award className="w-10 h-10 mr-3 text-green-400" />
                Certification Journey
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                My professional development path through industry-recognized cybersecurity certifications, 
                tracking progress and future goals.
              </p>
            </div>
            <CertificationTimeline certifications={certifications} />
          </div>
        );

      case "achievements":
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-gray-100 flex items-center justify-center">
                <Trophy className="w-10 h-10 mr-3 text-green-400" />
                Hall of Fame
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Recognition and achievements in cybersecurity research, competitions, and community contributions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 cyber-border group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <achievement.icon className={`w-10 h-10 ${achievement.color} group-hover:scale-110 transition-transform`} />
                      <Badge className="bg-gray-800 text-gray-300 text-xs">
                        {achievement.date}
                      </Badge>
                    </div>
                    <CardTitle className="text-gray-100">{achievement.title}</CardTitle>
                    <CardDescription className="text-gray-400">{achievement.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="bg-gray-900 border-b border-gray-800 p-2">
        <div className="flex items-center space-x-2 text-sm">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          <span className="text-gray-400 font-mono">aswin@cybersec:~$</span>
          <span className="text-green-400 font-mono animate-pulse">_</span>
        </div>
      </div>

      <nav className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Terminal className="w-8 h-8 text-green-400 animate-glow" />
                <div className="absolute inset-0 bg-green-400 opacity-20 rounded-full animate-ping"></div>
              </div>
              <div>
                <span className="text-2xl font-bold text-green-400 font-mono">aswin@cybersec</span>
                <div className="text-xs text-gray-500 font-mono">Cybersecurity Specialist</div>
              </div>
            </div>
            <div className="flex space-x-1">
              {[
                { id: "dashboard", label: "dashboard", icon: Activity },
                { id: "projects", label: "projects", icon: Briefcase },
                { id: "skills", label: "skills", icon: Code },
                { id: "certifications", label: "certifications", icon: Award },
                { id: "achievements", label: "achievements", icon: Trophy }
              ].map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-mono text-sm transition-all cyber-button ${
                    activeSection === section.id
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
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

      <section className="py-20 px-6 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 via-blue-400/5 to-purple-400/5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <div className="mb-12 animate-fade-in">
              <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-green-400/20 via-blue-400/20 to-purple-400/20 p-1 animate-glow">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center relative overflow-hidden">
                  <Shield className="w-24 h-24 text-green-400 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10 animate-pulse"></div>
                </div>
              </div>
              
              <h1 className="text-7xl font-bold mb-6 font-mono">
                <span className="text-gradient animate-slide-up">Aswin</span>{" "}
                <span className="text-gray-100 animate-slide-up" style={{ animationDelay: '0.2s' }}>Paudel</span>
              </h1>
              
              <div className="text-3xl text-gray-300 mb-4 font-mono animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <span className="text-green-400">$</span> whoami
              </div>
              
              <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                <p className="text-2xl text-gray-300 font-mono">
                  <span className="text-green-400">{'>'}</span> Cybersecurity Specialist
                </p>
                <p className="text-xl text-gray-400 font-mono">
                  <span className="text-blue-400">{'>'}</span> Ethical Hacker & Security Researcher
                </p>
                <p className="text-lg text-gray-500 font-mono">
                  <span className="text-purple-400">{'>'}</span> CTF Player & Bug Bounty Hunter
                </p>
              </div>
              
              <div className="flex justify-center space-x-4 mt-8 animate-slide-up" style={{ animationDelay: '0.8s' }}>
                <Button className="bg-green-500 hover:bg-green-600 text-black font-mono cyber-button">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
                <Button variant="outline" className="border-green-500/30 text-green-400 hover:bg-green-500/10 font-mono cyber-button">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
                <Button variant="outline" className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 font-mono cyber-button">
                  <Book className="w-4 h-4 mr-2" />
                  Read Blog
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {renderSection()}
      </div>

      <footer className="bg-gray-900 border-t border-gray-800 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 via-transparent to-blue-400/5"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center space-y-8">
            <h3 className="text-4xl font-bold text-gray-100 mb-4 font-mono">
              $ contact --aswin --secure
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Open to collaboration on cybersecurity research, bug bounty partnerships, 
              and discussing the latest threats in the digital landscape.
            </p>
            
            <div className="flex justify-center space-x-6">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-black font-mono cyber-button">
                <Mail className="w-5 h-5 mr-2" />
                aswin@cybersec.dev
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 font-mono cyber-button">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 font-mono cyber-button">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </div>
            
            <Separator className="my-8 bg-gray-800" />
            
            <div className="space-y-4">
              <p className="text-gray-500 font-mono">
                © 2024 Aswin Paudel | Securing the digital world, one vulnerability at a time
              </p>
              <div className="flex justify-center space-x-4 text-sm text-gray-600">
                <span>Built with React & TypeScript</span>
                <span>•</span>
                <span>Styled with Tailwind CSS</span>
                <span>•</span>
                <span>Deployed on Lovable</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
