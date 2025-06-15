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
    { name: "Web Security", icon: Shield, level: 85, color: "text-amber-400", category: "Offensive Security" },
    { name: "Red Team Operations", icon: Bug, level: 78, color: "text-orange-500", category: "Offensive Security" },
    { name: "Blue Team Defense", icon: Eye, level: 72, color: "text-blue-400", category: "Defensive Security" },
    { name: "Digital Forensics", icon: Search, level: 80, color: "text-emerald-400", category: "Defensive Security" },
    { name: "Malware Analysis", icon: Cpu, level: 75, color: "text-yellow-400", category: "Reverse Engineering" },
    { name: "Network Security", icon: Network, level: 82, color: "text-purple-400", category: "Infrastructure" },
    { name: "Cryptography", icon: Key, level: 70, color: "text-cyan-400", category: "Fundamentals" },
    { name: "Incident Response", icon: AlertTriangle, level: 77, color: "text-red-400", category: "Defensive Security" }
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
      color: "text-amber-400",
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
      color: "text-emerald-400",
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
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="modern-card group transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">Active Projects</p>
                      <p className="text-3xl font-bold text-primary">6</p>
                    </div>
                    <Code className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">+2 this month</div>
                </CardContent>
              </Card>

              <Card className="modern-card group transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">CTF Solved</p>
                      <p className="text-3xl font-bold text-blue-400">187</p>
                    </div>
                    <Trophy className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">Top 5% globally</div>
                </CardContent>
              </Card>

              <Card className="modern-card group transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">Certifications</p>
                      <p className="text-3xl font-bold text-purple-400">4</p>
                    </div>
                    <Award className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">OSCP in progress</div>
                </CardContent>
              </Card>

              <Card className="modern-card group transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">Writeups</p>
                      <p className="text-3xl font-bold text-emerald-400">45</p>
                    </div>
                    <Book className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">Medium & GitHub</div>
                </CardContent>
              </Card>
            </div>

            {/* About Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold">About Me</h2>
                  <div className="section-divider"></div>
                </div>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    I'm a passionate cybersecurity student and ethical hacker dedicated to securing the digital world. 
                    With expertise in penetration testing, vulnerability research, and incident response, 
                    I help organizations strengthen their security posture.
                  </p>
                  <p>
                    Currently pursuing my OSCP certification while actively participating in bug bounty programs 
                    and CTF competitions. I believe in continuous learning and sharing knowledge through 
                    technical writeups and open-source contributions.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Ethical Hacking", "Penetration Testing", "Security Research", "CTF Player", "Bug Bounty Hunter"].map((tag) => (
                    <span key={tag} className="skill-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-orange-400/20 p-1">
                  <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                    <Shield className="w-32 h-32 text-primary" />
                  </div>
                </div>
              </div>
            </div>

            {/* Activity Feed */}
            <Card className="modern-card">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Activity className="w-5 h-5 mr-3 text-primary" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 rounded-lg bg-secondary/30">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3 animate-pulse"></div>
                    <div>
                      <p className="font-medium">Completed TryHackMe "Relevant" room</p>
                      <p className="text-sm text-muted-foreground">Windows privilege escalation techniques - 23 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-lg bg-secondary/20">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-3"></div>
                    <div>
                      <p className="font-medium">Published "Advanced XSS Techniques" on Medium</p>
                      <p className="text-sm text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-lg bg-secondary/20">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3"></div>
                    <div>
                      <p className="font-medium">Submitted critical vulnerability report</p>
                      <p className="text-sm text-muted-foreground">1 day ago</p>
                    </div>
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
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Technical Skills</h2>
              <div className="section-divider"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A comprehensive overview of my cybersecurity expertise across multiple domains
              </p>
            </div>
            <InteractiveSkillMeter skills={skills} />
          </div>
        );

      case "certifications":
        return (
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Certifications</h2>
              <div className="section-divider"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                My professional development path through industry-recognized cybersecurity certifications
              </p>
            </div>
            <CertificationTimeline certifications={certifications} />
          </div>
        );

      case "achievements":
        return (
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Achievements</h2>
              <div className="section-divider"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Recognition and achievements in cybersecurity research, competitions, and community contributions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className="modern-card group transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <achievement.icon className={`w-8 h-8 ${achievement.color} group-hover:scale-110 transition-transform`} />
                      <Badge variant="secondary" className="text-xs">
                        {achievement.date}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    <CardDescription className="text-sm">{achievement.description}</CardDescription>
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
      {/* Navigation */}
      <nav className="sticky top-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Aswin Paudel</h1>
                <p className="text-sm text-muted-foreground">Cybersecurity Specialist</p>
              </div>
            </div>
            <div className="flex space-x-1">
              {[
                { id: "about", label: "About", icon: User },
                { id: "projects", label: "Projects", icon: Briefcase },
                { id: "skills", label: "Skills", icon: Code },
                { id: "certifications", label: "Certifications", icon: Award },
                { id: "achievements", label: "Achievements", icon: Trophy }
              ].map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeSection === section.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
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
      <section className="py-20 px-6 gradient-bg">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12 animate-fade-in">
            <h1 className="text-6xl font-bold mb-6">
              <span className="text-gradient">Aswin</span>{" "}
              <span>Paudel</span>
            </h1>
            
            <p className="text-2xl text-muted-foreground mb-8">
              Cybersecurity Student & Ethical Hacker
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              Passionate about securing the digital world through ethical hacking, 
              vulnerability research, and continuous learning in cybersecurity.
            </p>
            
            <div className="flex justify-center space-x-4">
              <Button className="modern-button">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
              <Button variant="outline" className="px-6 py-3">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <Button variant="outline" className="px-6 py-3">
                <Book className="w-4 h-4 mr-2" />
                Read Blog
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {renderSection()}
      </div>

      {/* Footer */}
      <footer className="bg-secondary/20 border-t border-border py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-8">
            <h3 className="text-3xl font-bold mb-4">
              Let's Connect
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Open to collaboration on cybersecurity research, bug bounty partnerships, 
              and discussing the latest threats in the digital landscape.
            </p>
            
            <div className="flex justify-center space-x-4">
              <Button className="modern-button">
                <Mail className="w-5 h-5 mr-2" />
                aswin@cybersec.dev
              </Button>
              <Button variant="outline">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button variant="outline">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </div>
            
            <Separator className="my-8" />
            
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>© 2024 Aswin Paudel | Securing the digital world, one vulnerability at a time</p>
              <div className="flex justify-center space-x-4">
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
