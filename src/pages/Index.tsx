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
  const [activeSection, setActiveSection] = useState("about");

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
      case "about":
        return (
          <div className="space-y-16">
            {/* Professional Summary */}
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-6">Professional Summary</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto mb-8 rounded-full"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Dedicated cybersecurity professional with extensive experience in penetration testing, 
                    vulnerability assessment, and security research. Passionate about protecting digital 
                    infrastructure and staying ahead of emerging threats.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Currently pursuing advanced certifications including OSCP while actively contributing 
                    to the cybersecurity community through research, writeups, and open-source tools.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 pt-4">
                    <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 px-3 py-1">
                      Penetration Testing
                    </Badge>
                    <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 px-3 py-1">
                      Digital Forensics
                    </Badge>
                    <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 px-3 py-1">
                      Malware Analysis
                    </Badge>
                    <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 px-3 py-1">
                      Red Team Operations
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <Card className="professional-border">
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                            <Shield className="w-6 h-6 text-emerald-400" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">Security Clearance</h3>
                            <p className="text-sm text-muted-foreground">Available upon request</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                            <Award className="w-6 h-6 text-emerald-400" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">Certifications</h3>
                            <p className="text-sm text-muted-foreground">Security+, OSCP (In Progress)</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                            <Target className="w-6 h-6 text-emerald-400" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">Specialization</h3>
                            <p className="text-sm text-muted-foreground">Web App & Network Security</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="professional-border group hover:border-emerald-500/30 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/20 transition-colors">
                    <Code className="w-8 h-8 text-emerald-400" />
                  </div>
                  <p className="text-3xl font-bold text-foreground mb-2">6+</p>
                  <p className="text-sm text-muted-foreground font-medium">Active Projects</p>
                </CardContent>
              </Card>

              <Card className="professional-border group hover:border-emerald-500/30 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/20 transition-colors">
                    <Trophy className="w-8 h-8 text-emerald-400" />
                  </div>
                  <p className="text-3xl font-bold text-foreground mb-2">187</p>
                  <p className="text-sm text-muted-foreground font-medium">CTF Challenges</p>
                </CardContent>
              </Card>

              <Card className="professional-border group hover:border-emerald-500/30 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/20 transition-colors">
                    <Award className="w-8 h-8 text-emerald-400" />
                  </div>
                  <p className="text-3xl font-bold text-foreground mb-2">4</p>
                  <p className="text-sm text-muted-foreground font-medium">Certifications</p>
                </CardContent>
              </Card>

              <Card className="professional-border group hover:border-emerald-500/30 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/20 transition-colors">
                    <Book className="w-8 h-8 text-emerald-400" />
                  </div>
                  <p className="text-3xl font-bold text-foreground mb-2">45+</p>
                  <p className="text-sm text-muted-foreground font-medium">Technical Writeups</p>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case "projects":
        return <ProjectShowcase projects={projects} />;

      case "skills":
        return (
          <div className="space-y-12">
            <div className="text-center space-y-6">
              <h2 className="text-4xl font-bold text-foreground">Technical Expertise</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Comprehensive cybersecurity skill set developed through hands-on experience, 
                continuous learning, and real-world application across multiple security domains.
              </p>
            </div>
            <InteractiveSkillMeter skills={skills} />
          </div>
        );

      case "certifications":
        return (
          <div className="space-y-12">
            <div className="text-center space-y-6">
              <h2 className="text-4xl font-bold text-foreground">Professional Development</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Commitment to continuous professional development through industry-recognized 
                certifications and ongoing education in cybersecurity best practices.
              </p>
            </div>
            <CertificationTimeline certifications={certifications} />
          </div>
        );

      case "achievements":
        return (
          <div className="space-y-12">
            <div className="text-center space-y-6">
              <h2 className="text-4xl font-bold text-foreground">Professional Recognition</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Recognition for contributions to cybersecurity research, community engagement, 
                and excellence in security practice and education.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className="professional-border group hover:border-emerald-500/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                        <achievement.icon className="w-6 h-6 text-emerald-400" />
                      </div>
                      <Badge className="bg-muted text-muted-foreground border-border">
                        {achievement.date}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground leading-tight">
                      {achievement.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </CardDescription>
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
    <div className="min-h-screen bg-background text-foreground">
      {/* Professional Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-emerald-400" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Aswin Paudel</h1>
                <p className="text-sm text-muted-foreground">Cybersecurity Professional</p>
              </div>
            </div>
            
            <nav className="flex space-x-2">
              {[
                { id: "about", label: "About", icon: User },
                { id: "projects", label: "Projects", icon: Briefcase },
                { id: "skills", label: "Skills", icon: Code },
                { id: "certifications", label: "Certifications", icon: Award },
                { id: "achievements", label: "Recognition", icon: Trophy }
              ].map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all professional-button ${
                    activeSection === section.id
                      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <section.icon className="w-4 h-4" />
                  <span>{section.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-6 gradient-bg relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="animate-fade-in">
              <div className="w-32 h-32 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 p-1 animate-glow">
                <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                  <Shield className="w-16 h-16 text-emerald-400" />
                </div>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-gradient">Aswin</span>{" "}
                <span className="text-foreground">Paudel</span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-muted-foreground mb-4 font-medium">
                Cybersecurity Professional
              </p>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                Dedicated to securing digital infrastructure through ethical hacking, 
                security research, and proactive threat mitigation strategies.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-background font-semibold professional-button">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Me
                </Button>
                <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted professional-button">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {renderSection()}
      </main>

      {/* Professional Footer */}
      <footer className="bg-muted/30 border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-8">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Let's Connect
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Open to discussing cybersecurity opportunities, collaboration on security research, 
              and sharing insights about the evolving threat landscape.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-background font-semibold professional-button">
                <Mail className="w-5 h-5 mr-2" />
                aswin.paudel@cybersec.dev
              </Button>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted professional-button">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted professional-button">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </div>
            
            <Separator className="my-8 bg-border" />
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                © 2024 Aswin Paudel. All rights reserved.
              </p>
              <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
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
