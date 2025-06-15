
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Github, Linkedin, ExternalLink, Shield, Code, Book, Award, FileText, User, Briefcase } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");

  const achievements = [
    {
      title: "Cybersecurity Excellence Award",
      description: "Recognized for outstanding performance in cybersecurity coursework",
      year: "2024"
    },
    {
      title: "Ethical Hacking Competition Winner",
      description: "First place in university-wide ethical hacking competition",
      year: "2024"
    },
    {
      title: "Bug Bounty Recognition",
      description: "Successfully identified and reported critical vulnerabilities",
      year: "2023"
    }
  ];

  const certifications = [
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      status: "In Progress",
      year: "2024"
    },
    {
      name: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      status: "Planned",
      year: "2024"
    },
    {
      name: "CISSP Associate",
      issuer: "(ISC)²",
      status: "Planned",
      year: "2025"
    }
  ];

  const skills = [
    "Network Security", "Penetration Testing", "Vulnerability Assessment",
    "Incident Response", "Malware Analysis", "Digital Forensics",
    "Python", "Linux", "Wireshark", "Metasploit", "Nmap", "Burp Suite"
  ];

  const blogPosts = [
    {
      title: "Understanding Zero-Day Exploits",
      description: "A deep dive into zero-day vulnerabilities and their impact on cybersecurity",
      url: "#",
      readTime: "8 min read"
    },
    {
      title: "Building Secure Authentication Systems",
      description: "Best practices for implementing robust authentication mechanisms",
      url: "#",
      readTime: "12 min read"
    },
    {
      title: "The Future of Cybersecurity",
      description: "Exploring emerging threats and defense strategies",
      url: "#",
      readTime: "6 min read"
    }
  ];

  const projects = [
    {
      title: "Network Security Scanner",
      description: "Automated tool for network vulnerability assessment",
      tech: ["Python", "Nmap", "Flask"],
      status: "Completed"
    },
    {
      title: "Phishing Detection System",
      description: "Machine learning-based email phishing detection",
      tech: ["Python", "TensorFlow", "NLP"],
      status: "In Progress"
    },
    {
      title: "Secure Chat Application",
      description: "End-to-end encrypted messaging platform",
      tech: ["React", "Node.js", "Cryptography"],
      status: "Completed"
    }
  ];

  return (
    <div className="min-h-screen gradient-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gradient">
              Aswin Paudel
            </div>
            <div className="flex space-x-6">
              {["about", "skills", "projects", "achievements", "certifications", "blogs"].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize px-3 py-2 rounded-lg transition-all font-medium ${
                    activeSection === section
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
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
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 p-1">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                <Shield className="w-16 h-16 text-primary" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4 text-gradient">
              Aswin Paudel
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Cybersecurity Student & Ethical Hacker
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Passionate about protecting digital assets and exploring the ever-evolving landscape of cybersecurity. 
              Currently pursuing my studies while actively contributing to the security community through research and writing.
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
              <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                <FileText className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        {/* About Section */}
        {activeSection === "about" && (
          <div className="animate-fade-in">
            <Card className="card-gradient backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-foreground">
                  <User className="w-6 h-6 mr-3 text-primary" />
                  About Me
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                <p>
                  I'm a dedicated cybersecurity student with a passion for understanding and mitigating digital threats. 
                  My journey in cybersecurity began with a curiosity about how systems work and how they can be protected.
                </p>
                <p>
                  Through my studies and hands-on experience, I've developed expertise in various areas of cybersecurity, 
                  from network security to ethical hacking. I believe in the importance of continuous learning in this 
                  rapidly evolving field.
                </p>
                <p>
                  When I'm not studying or working on security projects, I enjoy sharing my knowledge through blog posts 
                  on Medium, contributing to the cybersecurity community's collective knowledge.
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Skills Section */}
        {activeSection === "skills" && (
          <div className="animate-fade-in">
            <Card className="card-gradient backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-foreground">
                  <Code className="w-6 h-6 mr-3 text-primary" />
                  Skills & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      className="bg-primary/10 border-primary/20 text-foreground hover:bg-primary/20 transition-all duration-300 justify-center py-2"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Projects Section */}
        {activeSection === "projects" && (
          <div className="animate-fade-in space-y-6">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
              <Briefcase className="w-8 h-8 mr-3 text-primary" />
              Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="card-gradient backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-foreground">{project.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-secondary text-secondary-foreground">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Badge 
                      className={`${
                        project.status === "Completed" 
                          ? "bg-green-500/20 text-green-400 border-green-500/30" 
                          : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Achievements Section */}
        {activeSection === "achievements" && (
          <div className="animate-fade-in space-y-6">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
              <Award className="w-8 h-8 mr-3 text-primary" />
              Achievements
            </h2>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="card-gradient backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-foreground">{achievement.title}</CardTitle>
                        <CardDescription className="text-muted-foreground mt-2">{achievement.description}</CardDescription>
                      </div>
                      <Badge className="bg-primary text-primary-foreground">
                        {achievement.year}
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Certifications Section */}
        {activeSection === "certifications" && (
          <div className="animate-fade-in space-y-6">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
              <Shield className="w-8 h-8 mr-3 text-primary" />
              Certifications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="card-gradient backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-foreground">{cert.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <Badge 
                        className={`${
                          cert.status === "Completed" 
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : cert.status === "In Progress"
                            ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                            : "bg-muted text-muted-foreground border-muted"
                        }`}
                      >
                        {cert.status}
                      </Badge>
                      <span className="text-muted-foreground text-sm">{cert.year}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Blogs Section */}
        {activeSection === "blogs" && (
          <div className="animate-fade-in space-y-6">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
              <Book className="w-8 h-8 mr-3 text-primary" />
              Latest Blog Posts
            </h2>
            <div className="space-y-4">
              {blogPosts.map((post, index) => (
                <Card key={index} className="card-gradient backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-foreground hover:text-primary transition-colors">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground mt-2">{post.description}</CardDescription>
                        <div className="flex items-center mt-3 space-x-4">
                          <span className="text-sm text-muted-foreground">{post.readTime}</span>
                          <Button 
                            size="sm" 
                            className="bg-primary hover:bg-primary/90 text-primary-foreground"
                          >
                            Read on Medium
                            <ExternalLink className="w-3 h-3 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <Card className="card-gradient backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-muted-foreground mb-4">Want to read more of my cybersecurity insights?</p>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Visit My Medium Profile
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-card/50 border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Let's Connect</h3>
            <p className="text-muted-foreground mb-6">
              Always open to discussing cybersecurity, collaboration opportunities, or just having a great conversation!
            </p>
            <div className="flex justify-center space-x-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </div>
            <Separator className="my-8 bg-border" />
            <p className="text-muted-foreground">
              © 2024 Aswin Paudel. Built with passion for cybersecurity.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
