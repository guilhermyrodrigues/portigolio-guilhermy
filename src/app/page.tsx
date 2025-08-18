'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database, Server, Smartphone, Cloud, Users, Calendar, ChevronDown, Menu, X, Star } from 'lucide-react';
import { title } from 'process';

// ============= DATA LAYER =============
const portfolioData = {
  personal: {
    name: "Guilhermy Rodrigues Gomes",
    title: "Desenvolvedor Full Stack Junior",
    description: "Tecnólogo em Análise e Desenvolvimento de Sistemas com experiência em Java, Spring Boot, React, Angular e tecnologias modernas de desenvolvimento web.",
    location: "Goiânia, Goiás",
    phone: "(62) 99874-9303",
    email: "guilhermyr87@gmail.com",
    github: "https://github.com/guilhermyrodrigues",
    linkedin: "https://linkedin.com/in/guilhermy-rodrigues-7a5163244"
  },
  
  about: {
    summary: [
      "Profissional recém-formado em Análise e Desenvolvimento de Sistemas pela Faculdade Senac Goiás, com sólida experiência em projetos práticos utilizando tecnologias modernas.",
      "Possuo conhecimentos abrangentes em desenvolvimento full stack, com foco em Java, Spring Boot, React, Angular e PostgreSQL. Tenho facilidade para aprender novas tecnologias e sou proativo na busca por soluções inovadoras."
    ],
    education: {
      degree: "Tecnólogo ADS",
      institution: "Faculdade Senac Goiás",
      period: "2022 - 2025"
    },
    experience: {
      position: "Assistente Administrativo",
      company: "DCCO Rental Goiânia",
      period: "2023 - 2025",
      activities: [
        "Apoio técnico aos mecânicos na utilização dos aplicativos",
        "Utilização do sistema Sankhya para gestão de manutenção",
        "Criação de planilhas e site interativo para melhoria de processos"
      ]
    }
  },

  skills: {
    frontend: {
      icon: Code,
      color: "slate",
      items: ['React', 'Next.js', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3']
    },
    backend: {
      icon: Server,
      color: "gray",
      items: ['Java', 'Spring Boot', 'Node.js', 'REST APIs', 'Microservices']
    },
    database: {
      icon: Database,
      color: "zinc",
      items: ['PostgreSQL', 'Modelagem de Dados', 'PL/pgSQL']
    },
    tools: {
      icon: Users,
      color: "stone",
      items: ['Git', 'GitHub', 'Docker', 'Postman', 'GitHub Actions']
    },
    mobile: {
      icon: Smartphone,
      color: "neutral",
      items: ['Flutter']
    },
    cloud: {
      icon: Cloud,
      color: "slate",
      items: ['AWS (EC2, SQS, SNS, RDS, Lambda)']
    }
  },

  projects: [
    {
      title: "Coffee World",
      description: "Sistema completo de e-commerce com frontend Angular e backend Spring Boot",
      tech: ["Angular", "Spring Boot", "PostgreSQL"],
      links: {
        frontend: "https://github.com/guilhermyrodrigues/coffee-front",
        backend: "https://github.com/guilhermyrodrigues/coffe-backend"
      },
      category: "Fullstack"
    },
    {
      title: "SPA Books - Catálogo de Livros",
      description: "Single Page Application com Angular, Spring Boot e Docker",
      tech: ["Angular", "Spring Boot", "Docker", "PostgreSQL"],
      links: {
        github: "https://github.com/guilhermyrodrigues/book-catalog"
      },
      category: "Fullstack"
    },
    {
      title: "Dragon Ball App",
      description: "Aplicação React com Next.js consumindo API Dragon Ball",
      tech: ["React", "Next.js", "API Rest"],
      links: {
        github: "https://github.com/guilhermyrodrigues/app-dragon-ball-next"
      },
      category: "Frontend"
    },
    {
      title: "Multithreading com Java",
      description: "Implementação de programação paralela e concorrente",
      tech: ["Java", "Multithreading"],
      links: {
        github: "https://github.com/guilhermyrodrigues/thread-concorrency"
      },
      category: "Backend"
    },
    {
      title: "Padrões de Design",
      description: "Implementação de Design Patterns (Observer, SOLID, Criacionais, Estruturais)",
      tech: ["Java", "Design Patterns", "SOLID"],
      links: {
        observer_front: "https://github.com/guilhermyrodrigues/frontend-observer",
        observer_back: "https://github.com/guilhermyrodrigues/backend-observer",
        structural: "https://github.com/guilhermyrodrigues/padroes-estruturais",
        creational: "https://github.com/guilhermyrodrigues/padroes-criacionais",
        solid: "https://github.com/guilhermyrodrigues/exercicios-solid"
      },
      category: "Architecture"
    },
    {
      title: "CRUD em Camadas",
      description: "Sistema CRUD implementado com arquitetura em camadas usando Spring Boot",
      tech: ["Spring Boot", "PostgreSQL", "Swagger", "Java"],
      links: {
        github: "https://github.com/guilhermyrodrigues/projeto-crud"
      },
      category: "Backend"
    },
    {
      title: "Projeto Ecommerce",
      description: "Projeto de e-commerce desenvolvido com Spring Boot, seguindo os 12 factores de uma aplicação moderna",
      tech: ["Spring Boot", "PostgreSQL", "Java"],
      links: {
        github: "https://github.com/guilhermyrodrigues/ecommerce-backend"
      },
      category: "Backend"
    }
  ],

  navigation: ['home', 'sobre', 'skills', 'projetos', 'contato']
};

// ============= UTILITY FUNCTIONS =============
const getColorClasses = (color) => ({
  text: `text-${color}-400`,
  bg: `bg-${color}-100/10`,
  textBg: `text-${color}-200`,
  border: `border-${color}-300/30`,
  hover: `hover:text-${color}-300`
});

// ============= REUSABLE COMPONENTS =============

// Navigation Component
const Navigation = ({ activeSection, onSectionChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    onSectionChange(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/5 backdrop-blur-lg border-b border-gray-200/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-100">
            {portfolioData.personal.name.split(' ')[0]} {portfolioData.personal.name.split(' ')[1]}
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {portfolioData.navigation.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-all duration-300 hover:text-gray-300 ${
                  activeSection === item ? 'text-gray-200 border-b-2 border-gray-300' : 'text-gray-400'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden p-2 text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/5 backdrop-blur-lg border-t border-gray-200/10">
          <div className="px-4 py-2 space-y-2">
            {portfolioData.navigation.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-2 capitalize hover:bg-white/5 rounded-lg transition-colors text-gray-300"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// Social Links Component
const SocialLinks = ({ size = "default", className = "" }) => {
  const iconSize = size === "large" ? 24 : 20;
  const linkClass = size === "large" 
    ? "flex items-center gap-2 px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
    : "flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105";

  return (
    <div className={`flex flex-wrap justify-center gap-4 ${className}`}>
      <a 
        href={portfolioData.personal.github} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`${linkClass} bg-gray-800/60 hover:bg-gray-700/80 text-gray-200`}
      >
        <Github size={iconSize} />
        GitHub
      </a>
      <a 
        href={portfolioData.personal.linkedin} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`${linkClass} bg-blue-800/60 hover:bg-blue-700/80 text-blue-100`}
      >
        <Linkedin size={iconSize} />
        LinkedIn
      </a>
      <a 
        href={`mailto:${portfolioData.personal.email}`}
        className={`${linkClass} bg-gray-700/60 hover:bg-gray-600/80 text-gray-200`}
      >
        <Mail size={iconSize} />
        Contato
      </a>
    </div>
  );
};

// Section Header Component
const SectionHeader = ({ title, className = "" }) => (
  <h2 className={`text-4xl font-bold text-center mb-12 text-gray-100 ${className}`}>
    {title}
  </h2>
);

// Skill Card Component
const SkillCard = ({ title, skills, icon: Icon, color }) => {
  const colorClasses = getColorClasses(color);
  
  return (
    <div className={`bg-white/5 rounded-2xl p-6 border border-gray-200/10 hover:border-gray-200/20 transition-all duration-300`}>
      <div className="flex items-center gap-3 mb-4">
        <Icon className="text-gray-300" size={24} />
        <h3 className="text-xl font-bold text-gray-100">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className={`px-3 py-1 bg-gray-700/30 text-gray-200 rounded-full text-sm`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

// Project Links Component
const ProjectLinks = ({ links }) => {
  const linkConfigs = {
    github: { icon: Github, label: "Repositório", color: "text-gray-300 hover:text-gray-200" },
    frontend: { icon: Code, label: "Frontend", color: "text-gray-300 hover:text-gray-200" },
    backend: { icon: Server, label: "Backend", color: "text-gray-300 hover:text-gray-200" },
    observer_front: { icon: Star, label: "Observer Frontend", color: "text-gray-300 hover:text-gray-200" },
    observer_back: { icon: Star, label: "Observer Backend", color: "text-gray-300 hover:text-gray-200" },
    structural: { icon: Star, label: "Padrões Estruturais", color: "text-gray-300 hover:text-gray-200" },
    creational: { icon: Star, label: "Padrões Criacionais", color: "text-gray-300 hover:text-gray-200" },
    solid: { icon: Star, label: "SOLID", color: "text-gray-300 hover:text-gray-200" }
  };

  return (
    <div className="space-y-2">
      {Object.entries(links).map(([key, url]) => {
        const config = linkConfigs[key];
        if (!config) return null;
        
        const { icon: Icon, label, color } = config;
        
        return (
          <a 
            key={key}
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex items-center gap-2 ${color} text-sm transition-colors`}
          >
            <Icon size={16} />
            {label}
            <ExternalLink size={12} />
          </a>
        );
      })}
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project }) => (
  <div className="bg-white/5 rounded-2xl p-6 border border-gray-200/10 hover:border-gray-200/20 transition-all duration-300 hover:scale-105">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-bold text-gray-100">{project.title}</h3>
      <span className="text-xs px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full">
        {project.category}
      </span>
    </div>
    
    <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
    
    <div className="flex flex-wrap gap-2 mb-4">
      {project.tech.map((tech) => (
        <span key={tech} className="text-xs px-2 py-1 bg-gray-800/50 text-gray-200 rounded">
          {tech}
        </span>
      ))}
    </div>
    
    <ProjectLinks links={project.links} />
  </div>
);

// Contact Card Component
const ContactCard = ({ icon: Icon, title, content, link, color }) => (
  <div className="bg-white/5 rounded-2xl p-6 border border-gray-200/10">
    <Icon className="text-gray-300 mx-auto mb-4" size={32} />
    <h3 className="text-lg font-bold text-gray-100 mb-2">{title}</h3>
    {link ? (
      <a href={link} className="text-gray-300 hover:text-gray-200 transition-colors">
        {content}
      </a>
    ) : (
      <p className="text-gray-300">{content}</p>
    )}
  </div>
);

// ============= MAIN SECTIONS =============

// Hero Section
const HeroSection = ({ isVisible }) => (
  <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
    <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
      <div className="mb-8">
        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-gray-600 to-gray-400 p-1">
          <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
            <Code size={48} className="text-gray-300" />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-100">
          {portfolioData.personal.name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-6">
          {portfolioData.personal.title}
        </p>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {portfolioData.personal.description}
        </p>
      </div>
      
      <SocialLinks size="default" className="mb-12" />

      <div className="animate-bounce">
        <ChevronDown size={32} className="mx-auto text-gray-400" />
      </div>
    </div>
  </section>
);

// About Section
const AboutSection = () => (
  <section id="sobre" className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <SectionHeader title="Sobre Mim" />
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          {portfolioData.about.summary.map((paragraph, index) => (
            <p key={index} className="text-lg text-gray-300 leading-relaxed">
              {paragraph}
            </p>
          ))}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-white/5 rounded-lg p-4 border border-gray-200/10">
              <Calendar className="text-gray-300 mb-2" size={24} />
              <h3 className="font-semibold text-gray-100 mb-1">Formação</h3>
              <p className="text-sm text-gray-400">{portfolioData.about.education.period}</p>
              <p className="text-sm text-gray-400">{portfolioData.about.education.degree}</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-gray-200/10">
              <MapPin className="text-gray-300 mb-2" size={24} />
              <h3 className="font-semibold text-gray-100 mb-1">Localização</h3>
              <p className="text-sm text-gray-400">{portfolioData.personal.location}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/5 rounded-2xl p-8 border border-gray-200/10">
          <h3 className="text-2xl font-bold mb-6 text-gray-200">Experiência Profissional</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-gray-100">{portfolioData.about.experience.position}</h4>
              <p className="text-gray-300">{portfolioData.about.experience.company}</p>
              <p className="text-sm text-gray-400 mb-2">{portfolioData.about.experience.period}</p>
              <ul className="text-sm text-gray-300 space-y-1">
                {portfolioData.about.experience.activities.map((activity, index) => (
                  <li key={index}>• {activity}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Skills Section
const SkillsSection = () => (
  <section id="skills" className="py-20 px-4 bg-black/10">
    <div className="max-w-6xl mx-auto">
      <SectionHeader title="Habilidades Técnicas" />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(portfolioData.skills).map(([key, skillGroup]) => (
          <SkillCard
            key={key}
            title={key.charAt(0).toUpperCase() + key.slice(1)}
            skills={skillGroup.items}
            icon={skillGroup.icon}
            color={skillGroup.color}
          />
        ))}
      </div>
    </div>
  </section>
);

// Projects Section
const ProjectsSection = () => (
  <section id="projetos" className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <SectionHeader title="Projetos"/>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  </section>
);

// Contact Section
const ContactSection = () => (
  <section id="contato" className="py-20 px-4 bg-black/10">
    <div className="max-w-4xl mx-auto text-center">
      <SectionHeader title="Vamos Conversar?" />
      
      <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
        Estou sempre aberto a novas oportunidades e desafios. 
        Entre em contato para discutirmos como posso contribuir com seu projeto!
      </p>
      
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <ContactCard
          icon={Mail}
          title="Email"
          content={portfolioData.personal.email}
          link={`mailto:${portfolioData.personal.email}`}
          color="gray"
        />
        <ContactCard
          icon={Phone}
          title="Telefone"
          content={portfolioData.personal.phone}
          link={`tel:+5562998749303`}
          color="gray"
        />
        <ContactCard
          icon={MapPin}
          title="Localização"
          content={portfolioData.personal.location}
          color="gray"
        />
      </div>
      
      <SocialLinks size="large" />
    </div>
  </section>
);

// Footer Component
const Footer = () => (
  <footer className="py-8 px-4 border-t border-gray-200/10">
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-gray-400">
        © 2025 {portfolioData.personal.name}. Desenvolvido com React e Next.js
      </p>
    </div>
  </footer>
);

// ============= MAIN COMPONENT =============
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      <HeroSection isVisible={isVisible} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Portfolio;