"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Code, Database, Cloud, Users, Target, Zap, Award, Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AboutPage() {
  const introRef = useScrollAnimation();
  const experienceRef = useScrollAnimation();
  const educationRef = useScrollAnimation();
  const valuesRef = useScrollAnimation();

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Company Inc.",
      period: "2022 - Present",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
    },
    {
      title: "Full Stack Developer",
      company: "Startup Co.",
      period: "2020 - 2022",
      description: "Built and maintained multiple client-facing applications from concept to deployment.",
      technologies: ["Vue.js", "Go", "MongoDB", "Docker", "GCP"],
    },
    {
      title: "Junior Developer",
      company: "Digital Agency",
      period: "2018 - 2020",
      description: "Developed responsive websites and web applications for various clients.",
      technologies: ["JavaScript", "PHP", "MySQL", "WordPress"],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University Name",
      period: "2014 - 2018",
      description: "Graduated with honors. Focus on software engineering and distributed systems.",
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      school: "Tech Academy",
      period: "2018",
      description: "Intensive program covering modern web development technologies and best practices.",
    },
  ];

  const values = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "Clean Code",
      description: "I believe in writing maintainable, well-documented code that follows best practices.",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Continuous Learning",
      description: "Technology evolves rapidly, and I'm always learning new tools and techniques.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Collaboration",
      description: "Great products are built by great teams. I value communication and teamwork.",
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "User-Focused",
      description: "Every technical decision should ultimately serve the user's needs and experience.",
    },
  ];

  const skills = {
    languages: ["JavaScript", "TypeScript", "Go", "Python", "SQL", "HTML", "CSS"],
    frameworks: ["React", "Next.js", "Vue.js", "Node.js", "Gin", "Express"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    cloud: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD"],
    tools: ["Git", "VS Code", "Linux", "Figma", "Postman"],
  };

  return (
    <div className="min-h-screen bg-[#fbfbfd] dark:bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="flex justify-between items-center h-14">
            <Link href="/" className="text-[15px] font-semibold tracking-tight">
              Portfolio
            </Link>
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-[13px] h-9 hover:bg-[#f5f5f7] dark:hover:bg-[#2c2c2e] rounded-xl">
                <ArrowLeft className="w-4 h-4 mr-1.5" />
                Back
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 md:px-8 pt-28 pb-20">
        {/* Header */}
        <section
          ref={introRef.ref}
          className={`py-12 transition-all duration-700 ${
            introRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] dark:text-white mb-6 tracking-tight">
            About Me
          </h1>
          <p className="text-xl text-[#86868b] mb-8 font-light">
            Passionate about building exceptional digital experiences that make a difference.
          </p>

          <Card className="bg-white dark:bg-[#1d1d1f] border-0 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(255,255,255,0.04)] mb-8">
            <CardContent className="pt-6">
              <p className="text-[15px] text-[#1d1d1f] dark:text-white/90 leading-relaxed mb-4">
                Hello! I&apos;m a full-stack developer with over 5 years of experience building web applications
                that are both beautiful and functional. My journey in tech started with a curiosity about how
                websites work, and has evolved into a passion for creating impactful digital solutions.
              </p>
              <p className="text-[15px] text-[#1d1d1f] dark:text-white/90 leading-relaxed mb-4">
                I specialize in modern JavaScript frameworks, particularly React and Next.js for frontend
                development, and Go and Node.js for backend services. I believe in writing clean, maintainable
                code and following best practices to ensure scalability and reliability.
              </p>
              <p className="text-[15px] text-[#1d1d1f] dark:text-white/90 leading-relaxed">
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source
                projects, or sharing knowledge through blog posts and tech community meetups.
              </p>
            </CardContent>
          </Card>

          {/* Technical Skills */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category} className="bg-white dark:bg-[#1d1d1f] border-0 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(255,255,255,0.04)]">
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

        {/* Work Experience */}
        <section
          ref={experienceRef.ref}
          className={`py-12 transition-all duration-700 ${
            experienceRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-5 h-5 text-[#0071e3]" />
            <h2 className="text-2xl font-semibold text-[#1d1d1f] dark:text-white">Work Experience</h2>
          </div>
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-white dark:bg-[#1d1d1f] border-0 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(255,255,255,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_24px_rgba(255,255,255,0.08)] transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <CardTitle className="text-[15px] font-medium text-[#1d1d1f] dark:text-white">{exp.title}</CardTitle>
                      <p className="text-[13px] text-[#0071e3] font-normal">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="text-[11px] text-[#86868b] border-[#d2d2d7] dark:border-[#424245] rounded-full">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[13px] text-[#86868b] mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-[#f5f5f7] dark:bg-[#2c2c2e] text-[#86868b] rounded-full px-2.5 py-0.5 text-[11px]"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education */}
        <section
          ref={educationRef.ref}
          className={`py-12 transition-all duration-700 ${
            educationRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-5 h-5 text-[#0071e3]" />
            <h2 className="text-2xl font-semibold text-[#1d1d1f] dark:text-white">Education</h2>
          </div>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card key={index} className="bg-white dark:bg-[#1d1d1f] border-0 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(255,255,255,0.04)]">
                <CardHeader>
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <CardTitle className="text-[15px] font-medium text-[#1d1d1f] dark:text-white">{edu.degree}</CardTitle>
                      <p className="text-[13px] text-[#0071e3] font-normal">{edu.school}</p>
                    </div>
                    <Badge variant="outline" className="text-[11px] text-[#86868b] border-[#d2d2d7] dark:border-[#424245] rounded-full">
                      {edu.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[13px] text-[#86868b]">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section
          ref={valuesRef.ref}
          className={`py-12 transition-all duration-700 ${
            valuesRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-5 h-5 text-[#0071e3]" />
            <h2 className="text-2xl font-semibold text-[#1d1d1f] dark:text-white">Core Values</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {values.map((value, index) => (
              <Card key={index} className="bg-white dark:bg-[#1d1d1f] border-0 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(255,255,255,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_24px_rgba(255,255,255,0.08)] transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="text-[#0071e3]">{value.icon}</div>
                    <div>
                      <h3 className="text-[15px] font-medium text-[#1d1d1f] dark:text-white mb-1.5">
                        {value.title}
                      </h3>
                      <p className="text-[13px] text-[#86868b]">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <Card className="bg-[#0071e3] border-0 rounded-2xl overflow-hidden">
          <CardContent className="pt-10 pb-10 text-center">
            <h3 className="text-2xl font-semibold text-white mb-3">Let&apos;s Work Together</h3>
            <p className="text-[15px] text-white/80 mb-6 max-w-sm mx-auto">
              I&apos;m always interested in hearing about new projects and opportunities.
            </p>
            <Link href="/#contact">
              <Button size="lg" className="bg-white text-[#0071e3] hover:bg-white/90 rounded-full px-6 h-11">
                Get In Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
