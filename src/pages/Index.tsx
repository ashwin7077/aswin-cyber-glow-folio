
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
          <div className="space-y-16">
            <AnimatedTerminal />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <Card className="professional-card relative group hover-lift hover-glow">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Active Projects</p>
                      <p className="text-4xl font-bold text-primary mt-2">6</p>
                    </div>
                    <Code className="w-12 h-12 text-primary group-hover:scale-110 transition-transform animate-float" />
                  </div>
                  <div className="mt-4 text-sm text-muted-foreground">+2 this month</div>
                </CardContent>
              </Card>

              <Card className="professional-card relative group hover-lift hover-glow">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">CTF Solved</p>
                      <p className="text-4xl font-bold text-primary mt-2">187</p>
                    </div>
                    <Trophy className="w-12 h-12 text-primary group-hover:scale-110 transition-transform animate-float" style={{ animationDelay: '1s' }} />
                  </div>
                  <div className="mt-4 text-sm text-muted-foreground">Top 5% globally</div>
                </CardContent>
              </Card>

              <Card className="professional-card relative group hover-lift hover-glow">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Certifications</p>
                      <p className="text-4xl font-bold text-primary mt-2">4</p>
                    </div>
                    <Award className="w-12 h-12 text-primary group-hover:scale-110 transition-transform animate-float" style={{ animationDelay: '2s' }} />
                  </div>
                  <div className="mt-4 text-sm text-muted-foreground">OSCP in progress</div>
                </CardContent>
              </Card>

              <Card className="professional-card relative group hover-lift hover-glow">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Publications</p>
                      <p className="text-4xl font-bold text-primary mt-2">45</p>
                    </div>
                    <Book className="w-12 h-12 text-primary group-hover:scale-110 transition-transform animate-float" style={{ animationDelay: '3s' }} />
                  </div>
                  <div className="mt-4 text-sm text-muted-foreground">Medium & GitHub</div>
                </CardContent>
              </Card>
            </div>

            <Card className="professional-card relative">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center text-2xl">
                  <Activity className="w-6 h-6 mr-3 text-primary" />
                  Recent Activity
                </CardTitle>
                <CardDescription className="text-muted-foreground text-lg">
                  Latest achievements and contributions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-primary/5 border border-primary/20 animate-fade-in">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-primary/10 text-primary border-primary/20">LIVE</Badge>
                        <span className="text-foreground font-medium">Completed TryHackMe "Relevant" room</span>
                      </div>
                      <p className="text-muted-foreground text-sm mt-1">Windows privilege escalation • 23 minutes ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-blue-400/10 text-blue-400 border-blue-400/20">BLOG</Badge>
                        <span className="text-foreground font-medium">Published "Advanced XSS Techniques"</span>
                      </div>
                      <p className="text-muted-foreground text-sm mt-1">Medium publication • 2 hours ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-yellow-400/10 text-yellow-400 border-yellow-400/20">CVE</Badge>
                        <span className="text-foreground font-medium">Critical vulnerability report submitted</span>
                      </div>
                      <p className="text-muted-foreground text-sm mt-1">Security research • 1 day ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <Badge className="bg-purple-400/10 text-purple-400 border-purple-400/20">CERT</Badge>
                        <span className="text-foreground font-medium">OSCP Lab progress: 75% complete</span>
                      </div>
                      <p className="text-muted-foreground text-sm mt-1">Certification path • 3 days ago</p>
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
    <div className="min-h-screen bg-background text-foreground">
      {/* Professional Terminal Header */}
      <div className="bg-card/50 backdrop-blur-sm border-b border-border/50 p-3">
        <div className="flex items-center space-x-3 text-sm font-mono">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          <span className="text-muted-foreground">aswin@cybersec-pro:~$</span>
          <span className="text-primary animate-pulse">portfolio --professional</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 bg-background/95 backdrop-blur-lg border-b border-border/50 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Shield className="w-10 h-10 text-primary animate-glow" />
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
              </div>
              <div>
                <span className="text-3xl font-bold text-primary">Aswin Paudel</span>
                <div className="text-sm text-muted-foreground font-medium">Cybersecurity Professional</div>
              </div>
            </div>
            <div className="flex space-x-2">
              {[
                { id: "dashboard", label: "Overview", icon: Activity },
                { id: "projects", label: "Projects", icon: Briefcase },
                { id: "skills", label: "Skills", icon: Code },
                { id: "certifications", label: "Certifications", icon: Award },
                { id: "achievements", label: "Achievements", icon: Trophy }
              ].map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                    activeSection === section.id
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
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
      <section className="py-32 px-6 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <div className="mb-16 animate-fade-in">
              <div className="w-56 h-56 mx-auto mb-12 rounded-full bg-gradient-to-r from-primary/20 via-emerald-400/20 to-teal-400/20 p-2 animate-glow">
                <div className="w-full h-full rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                  <Shield className="w-28 h-28 text-primary relative z-10 animate-float" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-emerald-400/10 animate-pulse"></div>
                </div>
              </div>
              
              <h1 className="text-7xl lg:text-8xl font-bold mb-8 animate-slide-up">
                <span className="text-gradient">Aswin</span>{" "}
                <span className="text-foreground">Paudel</span>
              </h1>
              
              <div className="space-y-4 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <p className="text-3xl lg:text-4xl text-foreground font-semibold">
                  Cybersecurity Professional
                </p>
                <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Ethical Hacker • Security Researcher • Penetration Testing Specialist
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Protecting digital infrastructure through advanced security research and ethical hacking methodologies
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                <Button size="lg" className="professional-button text-lg px-8 py-4">
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
                <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 text-lg px-8 py-4 hover-lift">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
                <Button size="lg" variant="outline" className="border-emerald-400/30 text-emerald-400 hover:bg-emerald-400/10 text-lg px-8 py-4 hover-lift">
                  <Book className="w-5 h-5 mr-2" />
                  Technical Blog
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {renderSection()}
      </div>

      {/* Professional Footer */}
      <footer className="bg-card/30 backdrop-blur-sm border-t border-border/50 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-emerald-400/5"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center space-y-12">
            <div className="space-y-6">
              <h3 className="text-5xl font-bold text-foreground">
                Let's Connect
              </h3>
              <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
                Open to opportunities in cybersecurity consulting, red team operations, 
                and collaborative security research initiatives.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button size="lg" className="professional-button text-lg px-8 py-4">
                <Mail className="w-5 h-5 mr-2" />
                aswin.paudel@cybersec.dev
              </Button>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted/50 text-lg px-8 py-4 hover-lift">
                <Github className="w-5 h-5 mr-2" />
                GitHub Portfolio
              </Button>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted/50 text-lg px-8 py-4 hover-lift">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn Profile
              </Button>
            </div>
            
            <div className="section-divider my-12"></div>
            
            <div className="space-y-6">
              <p className="text-muted-foreground">
                © 2024 Aswin Paudel • Professional Cybersecurity Portfolio
              </p>
              <div className="flex justify-center gap-8 text-sm text-muted-foreground">
                <span>Built with React & TypeScript</span>
                <span>Styled with Tailwind CSS</span>
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
