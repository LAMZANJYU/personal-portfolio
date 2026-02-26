"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Code, Database, Cloud, Users, Target, Zap, Award, Briefcase, GraduationCap } from "lucide-react";
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
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "I believe in writing maintainable, well-documented code that follows best practices.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Continuous Learning",
      description: "Technology evolves rapidly, and I'm always learning new tools and techniques.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Great products are built by great teams. I value communication and teamwork.",
    },
    {
      icon: <Target className="w-8 h-8" />,
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </Link>
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Header */}
        <section
          ref={introRef.ref}
          className={`py-12 transition-all duration-1000 transform ${
            introRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            Passionate about building exceptional digital experiences that make a difference.
          </p>

          <Card className="border-slate-200 dark:border-gray-800 mb-8">
            <CardContent className="pt-6">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                Hello! I'm a full-stack developer with over 5 years of experience building web applications
                that are both beautiful and functional. My journey in tech started with a curiosity about how
                websites work, and has evolved into a passion for creating impactful digital solutions.
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                I specialize in modern JavaScript frameworks, particularly React and Next.js for frontend
                development, and Go and Node.js for backend services. I believe in writing clean, maintainable
                code and following best practices to ensure scalability and reliability.
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source
                projects, or sharing knowledge through blog posts and tech community meetups.
              </p>
            </CardContent>
          </Card>

          {/* Technical Skills */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category} className="border-slate-200 dark:border-gray-800">
                <CardHeader>
                  <CardTitle className="capitalize text-slate-800 dark:text-slate-200 text-lg">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
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
          className={`py-12 transition-all duration-1000 transform ${
            experienceRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200">Work Experience</h2>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-slate-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <CardTitle className="text-slate-800 dark:text-slate-200">{exp.title}</CardTitle>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="text-slate-600 dark:text-slate-400">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
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
          className={`py-12 transition-all duration-1000 transform ${
            educationRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200">Education</h2>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="border-slate-200 dark:border-gray-800">
                <CardHeader>
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <CardTitle className="text-slate-800 dark:text-slate-200">{edu.degree}</CardTitle>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.school}</p>
                    </div>
                    <Badge variant="outline" className="text-slate-600 dark:text-slate-400">
                      {edu.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section
          ref={valuesRef.ref}
          className={`py-12 transition-all duration-1000 transform ${
            valuesRef.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200">Core Values</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-slate-200 dark:border-gray-800 hover:shadow-lg transition-all hover:scale-105">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="text-blue-600 dark:text-blue-400">{value.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-none text-white">
          <CardContent className="pt-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
            <p className="mb-6 opacity-90">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <Link href="/#contact">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-slate-100">
                Get In Touch
              </Button>
            </Link>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
