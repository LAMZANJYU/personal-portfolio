"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, MapPin, Phone, Send, ExternalLink, Download, Menu, X, Loader2, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

export default function Home() {
  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    backend: ["Go", "Node.js", "Python", "PostgreSQL", "Redis"],
    devops: ["Docker", "Kubernetes", "CI/CD", "AWS", "GCP"],
    tools: ["Git", "VS Code", "Linux", "Figma"],
  };

  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "An amazing project built with modern technologies",
      tags: ["React", "TypeScript", "Go"],
      link: "#",
    },
    {
      id: 2,
      title: "Project Two",
      description: "Another awesome project showcasing technical skills",
      tags: ["Next.js", "PostgreSQL", "Docker"],
      link: "#",
    },
    {
      id: 3,
      title: "Project Three",
      description: "A creative solution to complex problems",
      tags: ["Vue.js", "Python", "AWS"],
      link: "#",
    },
  ];

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "your-name-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmitContact = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://formspree.io/f/xykdobve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(contactForm),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: "Unknown error" }));
        throw new Error(errorData.error || "Failed to send message");
      }

      setFormStatus("success");
      setContactForm({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 5000);
    } catch (error) {
      setFormStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message. Please try again.");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  const heroRef = useScrollAnimation();
  const skillsRef = useScrollAnimation();
  const projectsRef = useScrollAnimation();
  const contactRef = useScrollAnimation();

  return (
    <div className="min-h-screen bg-[#fbfbfd] dark:bg-black">
      {/* Navigation - Apple style glass */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="flex justify-between items-center h-14">
            <span className="text-[15px] font-semibold tracking-tight">
              Portfolio
            </span>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/about"
                className="text-[13px] text-[#1d1d1f] dark:text-white/80 hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors"
              >
                About
              </Link>
              <a
                href="#skills"
                onClick={(e) => handleSmoothScroll(e, "skills")}
                className="text-[13px] text-[#1d1d1f] dark:text-white/80 hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, "projects")}
                className="text-[13px] text-[#1d1d1f] dark:text-white/80 hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "contact")}
                className="text-[13px] text-[#1d1d1f] dark:text-white/80 hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 -mr-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-black/95 backdrop-bl-xl border-t border-black/5 dark:border-white/5 px-6 pb-4">
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-[15px]"
            >
              About
            </Link>
            <a
              href="#skills"
              onClick={(e) => handleSmoothScroll(e, "skills")}
              className="block py-3 text-[15px]"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, "projects")}
              className="block py-3 text-[15px]"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="block py-3 text-[15px]"
            >
              Contact
            </a>
          </div>
        )}
      </nav>

      <main className="max-w-5xl mx-auto px-6 md:px-8 pt-32 pb-20">
        {/* Hero Section - Apple style */}
        <section
          ref={heroRef.ref}
          id="about"
          className={`py-16 md:py-24 text-center transition-all duration-700 ${
            heroRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-10 inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-[#0071e3] to-[#5e5ce6] p-[3px] mx-auto">
              <div className="w-full h-full rounded-full bg-[#f5f5f7] dark:bg-[#1d1d1f] flex items-center justify-center">
                <span className="text-5xl md:text-6xl">👨‍💻</span>
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-[#1d1d1f] dark:text-white mb-4 tracking-tight">
            Your Name
          </h1>
          <p className="text-xl md:text-2xl text-[#86868b] mb-6 font-light">
            Full Stack Developer
          </p>
          <p className="text-[17px] text-[#86868b] max-w-2xl mx-auto mb-10 leading-relaxed">
            Passionate developer building amazing things with modern technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button
              size="lg"
              className="bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full px-6 h-11 text-[15px]"
              asChild
            >
              <a href="#contact" className="flex items-center gap-2">
                Get In Touch
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-6 h-11 text-[15px] border-[#d2d2d7] dark:border-[#424245]" asChild>
              <a href="#projects" className="flex items-center gap-2">
                View Projects
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-6 h-11 text-[15px] border-[#d2d2d7] dark:border-[#424245]" asChild>
              <Link href="/about" className="flex items-center gap-2">
                More About Me
              </Link>
            </Button>
          </div>
          <div className="flex justify-center gap-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#86868b] hover:text-[#0071e3] transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#86868b] hover:text-[#0071e3] transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </section>

        {/* Skills Section - Apple style cards */}
        <section
          ref={skillsRef.ref}
          id="skills"
          className={`py-16 md:py-24 transition-all duration-700 ${
            skillsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1d1d1f] dark:text-white text-center mb-4">
            Skills & Technologies
          </h2>
          <p className="text-[17px] text-[#86868b] text-center mb-12 max-w-xl mx-auto">
            Technologies I work with
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(skills).map(([category, items]) => (
              <Card
                key={category}
                className="bg-white dark:bg-[#1d1d1f] border-0 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(255,255,255,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_24px_rgba(255,255,255,0.08)] transition-all duration-300"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="capitalize text-[15px] font-medium text-[#1d1d1f] dark:text-white">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-[#f5f5f7] dark:bg-[#2c2c2e] text-[#1d1d1f] dark:text-white/80 rounded-full px-3 py-0.5 text-[12px] font-normal"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section
          ref={projectsRef.ref}
          id="projects"
          className={`py-16 md:py-24 transition-all duration-700 ${
            projectsRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1d1d1f] dark:text-white text-center mb-4">
            Featured Projects
          </h2>
          <p className="text-[17px] text-[#86868b] text-center mb-12 max-w-xl mx-auto">
            Some of the things I&apos;ve built
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="bg-white dark:bg-[#1d1d1f] border-0 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(255,255,255,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_24px_rgba(255,255,255,0.12)] transition-all duration-300 group"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-[17px] font-medium text-[#1d1d1f] dark:text-white">
                    {project.title}
                  </CardTitle>
                  <p className="text-[13px] text-[#86868b]">
                    {project.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-[#d2d2d7] dark:border-[#424245] text-[#86868b] rounded-full px-3 py-0.5 text-[11px]"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full text-[#0071e3] hover:text-[#0077ed] hover:bg-[#f5f5f7] dark:hover:bg-[#2c2c2e] rounded-xl text-[13px] h-9" asChild>
                    <a href={project.link} className="flex items-center justify-center gap-1">
                      View Project
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          ref={contactRef.ref}
          id="contact"
          className={`py-16 md:py-24 transition-all duration-700 ${
            contactRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1d1d1f] dark:text-white text-center mb-4">
            Get In Touch
          </h2>
          <p className="text-[17px] text-[#86868b] text-center mb-12 max-w-xl mx-auto">
            Have a question or want to work together? Send me a message.
          </p>
          <div className="max-w-md mx-auto">
            <Card className="bg-white dark:bg-[#1d1d1f] border-0 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_16px_rgba(255,255,255,0.06)]">
              <CardContent className="pt-6 space-y-4">
                <form onSubmit={handleSubmitContact} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      id="name"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#d2d2d7] dark:border-[#424245] bg-[#f5f5f7] dark:bg-[#2c2c2e] text-[#1d1d1f] dark:text-white text-[15px] focus:ring-2 focus:ring-[#0071e3] focus:border-transparent outline-none transition-all"
                      placeholder="Name"
                      disabled={formStatus === "loading"}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      id="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#d2d2d7] dark:border-[#424245] bg-[#f5f5f7] dark:bg-[#2c2c2e] text-[#1d1d1f] dark:text-white text-[15px] focus:ring-2 focus:ring-[#0071e3] focus:border-transparent outline-none transition-all"
                      placeholder="Email"
                      disabled={formStatus === "loading"}
                    />
                  </div>
                  <div>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#d2d2d7] dark:border-[#424245] bg-[#f5f5f7] dark:bg-[#2c2c2e] text-[#1d1d1f] dark:text-white text-[15px] focus:ring-2 focus:ring-[#0071e3] focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Message"
                      disabled={formStatus === "loading"}
                    />
                  </div>

                  {formStatus === "loading" && (
                    <div className="flex items-center justify-center gap-2 text-[#0071e3]">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span className="text-[13px]">Sending...</span>
                    </div>
                  )}

                  {formStatus === "success" && (
                    <div className="flex items-center justify-center gap-2 text-[#34c759] bg-[#34c759]/10 p-3 rounded-xl">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-[13px]">Message sent successfully!</span>
                    </div>
                  )}

                  {formStatus === "error" && (
                    <div className="flex items-center justify-center gap-2 text-[#ff3b30] bg-[#ff3b30]/10 p-3 rounded-xl">
                      <AlertCircle className="w-4 h-4" />
                      <span className="text-[13px]">{errorMessage}</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={formStatus === "loading"}
                    className="w-full bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-xl h-11 text-[15px]"
                  >
                    {formStatus === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                {/* Contact Info */}
                <div className="pt-4 border-t border-[#f5f5f7] dark:border-[#424245] space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-xl">
                    <Mail className="w-4 h-4 text-[#0071e3]" />
                    <div>
                      <p className="text-[11px] text-[#86868b]">Email</p>
                      <p className="text-[13px] text-[#1d1d1f] dark:text-white">your.email@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl">
                    <Phone className="w-4 h-4 text-[#0071e3]" />
                    <div>
                      <p className="text-[11px] text-[#86868b]">Phone</p>
                      <p className="text-[13px] text-[#1d1d1f] dark:text-white">+86 123 4567 8900</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl">
                    <MapPin className="w-4 h-4 text-[#0071e3]" />
                    <div>
                      <p className="text-[11px] text-[#86868b]">Location</p>
                      <p className="text-[13px] text-[#1d1d1f] dark:text-white">China</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#f5f5f7] dark:border-[#424245] py-8">
        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">
          <p className="text-[12px] text-[#86868b]">
            &copy; {new Date().getFullYear()} Your Name. Built with Next.js & Go.
          </p>
        </div>
      </footer>
    </div>
  );
}
