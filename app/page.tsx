'use client'

import { FormEvent, useEffect, useMemo, useState } from 'react'

type Project = { number: string; category: string; title: string; description: string; tech: string[]; image?: string; details: string[]; github?: string }

const skillGroups = [
  ['CORE', ['Java', 'Python', 'JavaScript', 'SQL']],
  ['BACKEND', ['Node.js', 'Express.js', 'Spring Boot', 'REST APIs']],
  ['DATABASES', ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis']],
  ['AI / GENAI', ['LLMs', 'RAG', 'Embeddings', 'Vector Databases', 'Qdrant', 'Pinecone']],
  ['FRONTEND', ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS']],
  ['CLOUD / DEVOPS', ['AWS', 'Docker', 'Git', 'GitHub']],
]

const projects: Project[] = [
  { number: '01', category: 'AI / FULL-STACK', title: 'AI RESUME ANALYZER', description: 'An LLM and RAG-powered platform that turns resume content into practical, grounded career feedback.', tech: ['React', 'Node.js', 'PostgreSQL', 'LLM', 'RAG'], image: '/project-resume.png', details: ['Resume analysis workflow', 'Structured career feedback', 'Retrieval-augmented generation'] },
  { number: '02', category: 'AI / DEVELOPER TOOLS', title: 'DEVELOPER SUPPORT AI', description: 'A developer support system that retrieves technical context and generates grounded answers for common engineering issues.', tech: ['React', 'FastAPI', 'PostgreSQL', 'Qdrant', 'LLM', 'RAG'], image: '/project-support.png', details: ['Semantic knowledge retrieval', 'Qdrant vector search', 'Context-aware support responses'] },
  { number: '03', category: 'AI / FINTECH', title: 'AI PERSONAL FINANCE COPILOT', description: 'A conversational assistant designed to turn personal finance data into practical, understandable guidance.', tech: ['React', 'Node.js', 'PostgreSQL', 'LLM', 'RAG'], image: '/project-finance.png', details: ['Conversational finance guidance', 'Structured data workflows', 'Retrieval-augmented answers'] },
  { number: '04', category: 'CLOUD PLATFORM', title: 'CLOUD FILE PROCESSING PLATFORM', description: 'A cloud-native processing platform built around AWS S3, SQS, PostgreSQL, and containerized services.', tech: ['React', 'Spring Boot', 'AWS S3', 'AWS SQS', 'PostgreSQL', 'Docker'], image: '/project-cloud.png', details: ['Object storage with AWS S3', 'Queue-based processing with AWS SQS', 'Containerized backend services'] },
  { number: '05', category: 'MULTIPLAYER WEB GAME', title: 'SCUBA SCUBA', description: 'A real-time multiplayer arcade game where players create or join rooms and play together in the browser.', tech: ['Node.js', 'Socket.IO', 'JavaScript', 'HTML', 'CSS'], details: ['Real-time room communication', 'Browser-based multiplayer flow'] },
  { number: '06', category: 'PAYMENTS', title: 'STRIPE PAYMENT INTEGRATION', description: 'A React payment experience connected to a Node.js REST API and Stripe.', tech: ['Stripe', 'Node.js', 'React', 'REST API'], details: ['REST API integration', 'Stripe payment workflow'] },
  { number: '07', category: 'FULL-STACK APPLICATION', title: 'PERSONAL FINANCE MANAGEMENT SYSTEM', description: 'A practical application for organizing and tracking personal financial activity.', tech: ['Java', 'React', 'Node.js', 'SQL'], details: ['Finance tracking workflow', 'Full-stack application structure'] },
  { number: '08', category: 'AI / RESEARCH', title: 'ENHANCED INTRUSION DETECTION IN NETWORK TRAFFIC', description: 'A deep learning research project focused on identifying network threats using sequential models and attention.', tech: ['Python', 'DNN', 'RNN/LSTM', 'Attention', 'NSL-KDD'], details: ['Sequential threat detection', 'Attention-based modeling'] },
  { number: '09', category: 'SALESFORCE', title: 'COSMETIC STORE MANAGEMENT SYSTEM', description: 'A Salesforce-based application for managing cosmetic store operations and workflows.', tech: ['Salesforce'], details: ['Salesforce platform workflow'] },
  { number: '10', category: 'WEB APPLICATION', title: 'WEATHER FORECAST WEB APP', description: 'A responsive React application that presents forecast information through a clean interface.', tech: ['React', 'API'], details: ['Forecast API integration', 'Responsive web interface'] },
  { number: '11', category: 'JAVA APPLICATION', title: 'ATM MACHINE SIMULATION', description: 'A Java-based ATM simulation covering common banking operations and user flows.', tech: ['Java'], details: ['Banking operation simulation'] },
  { number: '12', category: 'FRONTEND RECREATION', title: 'APPLE WEBSITE CLONE', description: 'A responsive recreation of the Apple website experience built with React, Vite, and CSS.', tech: ['React', 'Vite', 'CSS'], details: ['Responsive visual recreation'] },
]

const interests = [
  ['01', 'BACKEND SYSTEMS', 'REST APIs · Service Architecture · Databases · Distributed Processing'],
  ['02', 'AI / GENAI', 'LLMs · RAG · Embeddings · Vector Search · AI Applications'],
  ['03', 'CLOUD SYSTEMS', 'AWS · Docker · Object Storage · Queues · Scalable Services'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const [showMore, setShowMore] = useState(false)
  const [activeSkill, setActiveSkill] = useState('')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeSection, setActiveSection] = useState('top')
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('likitha-theme')
    if (savedTheme === 'light') setIsDark(false)
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)), { rootMargin: '-30% 0px -55% 0px' })
    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('light', !isDark)
    window.localStorage.setItem('likitha-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const visibleProjects = useMemo(() => showMore ? projects : projects.slice(0, 4), [showMore])
  const filteredProjects = activeSkill ? visibleProjects.filter((project) => project.tech.includes(activeSkill)) : visibleProjects

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    window.location.href = `mailto:?subject=${encodeURIComponent(`Portfolio message from ${data.get('name')}`)}&body=${encodeURIComponent(`${data.get('message')}\n\nReply to: ${data.get('email')}`)}`
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Likitha Reddy home"><span className="brand-lr">LR</span><span className="brand-infinity" aria-hidden="true">∞</span></a>
        <nav id="main-nav" className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">{['about', 'experience', 'projects', 'skills', 'education', 'contact'].map((item) => <a className={activeSection === item ? 'active' : ''} key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item}</a>)}</nav>
        <div className="header-actions"><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>{menuOpen ? 'CLOSE' : 'MENU'}</button><button className="theme-toggle" type="button" onClick={() => setIsDark((current) => !current)} aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}>{isDark ? '☀' : '☾'}</button></div>
      </header>

      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className={`hero-banner ${isDark ? 'night-scene' : 'sunrise-scene'}`}><img src={isDark ? '/beach-night.png' : '/beach-sunrise.png'} alt="Cinematic beach shoreline atmosphere" /></div>
        <div className="profile-card"><img className="avatar" src="/likitha-avatar.png" alt="Portrait of Likitha Reddy" /><div className="profile-copy"><p className="eyebrow">SOFTWARE ENGINEER</p><h1 id="hero-title">LIKITHA REDDY</h1><p className="role">BACKEND DEVELOPER <span>·</span> AI / GENAI</p><p className="hero-description">I build backend systems and AI-powered applications with modern web, cloud, and GenAI technologies.</p><div className="hero-actions"><a className="primary-button" href="#projects">VIEW PROJECTS <span>↗</span></a><a className="secondary-button" href="/resume.pdf" download>DOWNLOAD RESUME</a></div><div className="hero-links"><a href="https://github.com/tapasilikithareddy" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/tapasi-likitha-reddy/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="mailto:">Email ↗</a></div></div></div>
      </section>

      <section className="section-shell section-block" id="about"><div className="section-heading"><span>01</span><h2>ABOUT / OVERVIEW</h2></div><div className="about-grid"><div><p className="large-copy">I&apos;m a Computer Science graduate focused on backend development and AI-powered applications.</p><p>I enjoy designing APIs, working with databases, integrating AI systems, and turning ideas into reliable software.</p></div><dl className="info-panel"><div><dt>ROLE</dt><dd>Backend Developer · AI / GenAI</dd></div><div><dt>EDUCATION</dt><dd>B.Tech in Computer Science &amp; Engineering</dd></div><div><dt>GRADUATION</dt><dd>2025</dd></div><div><dt>FOCUS</dt><dd>Backend · AI · GenAI · Cloud</dd></div></dl></div></section>

      <section className="section-shell section-block" id="experience"><div className="section-heading"><span>02</span><h2>EXPERIENCE</h2></div><div className="timeline"><article><span>01 / FEB 2026 — APR 2026</span><h3>Deloitte US-India Offices</h3><p className="experience-role">Analyst Trainee · Bengaluru, India</p><p>Full Stack Developer</p><ul><li>Managed transaction processing and SQL validation workflows for data pipelines, resolving data anomalies within SLA turnarounds.</li><li>Documented failure modes, performed root-cause analysis, and collaborated with teams to resolve application issues.</li><li>Completed technical training in Java, SQL, Spring Boot, .NET, AI, and software testing.</li></ul></article><article><span>02 / JUL 2026 — AUG 2026</span><h3>Project Dynamo</h3><p className="experience-role">AI Task Contributor · Remote, India</p><ul><li>Designed realistic command-line tasks to evaluate AI agents on repository exploration, debugging, testing, and code execution.</li><li>Built evaluation scenarios involving Git repositories, terminal environments, and automated testing workflows.</li><li>Investigated technical issues and created scenarios exposing AI-agent limitations and software-engineering failure modes.</li></ul></article></div></section>

      <section className="section-shell section-block" id="projects"><div className="section-heading"><span>03</span><h2>ENGINEERING LAB / PROJECTS</h2></div><p className="section-intro">Selected systems, experiments, and products built across backend development, AI, cloud, and the web.</p><div className="projects-grid">{filteredProjects.map((project) => <button className="project-card" key={project.title} type="button" onClick={() => setSelectedProject(project)}><div className="project-visual">{project.image ? <img src={project.image} alt={`${project.title} project preview`} /> : <div className="visual-fallback">Project preview</div>}<span>{project.number}</span><b>{project.category}</b></div><div className="project-meta">{project.category}<span>OPEN CASE STUDY ↗</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tech.map((tag) => <span key={tag}>{tag}</span>)}</div></button>)}</div><button className="more-projects" type="button" onClick={() => setShowMore((current) => !current)}>{showMore ? 'SHOW FEWER PROJECTS' : 'VIEW ALL PROJECTS'} <span>→</span></button></section>

      <section className="section-shell section-block" id="skills"><div className="section-heading"><span>04</span><h2>TECH STACK</h2></div><p className="section-intro">Select a technology to trace it through the engineering lab.</p><div className="skills-grid">{skillGroups.map(([group, items]) => <div className="skill-group" key={group}><h3>{group}</h3><div>{items.map((skill) => <button className={activeSkill === skill ? 'selected' : ''} onClick={() => setActiveSkill(activeSkill === skill ? '' : skill)} key={skill}>{skill}</button>)}</div></div>)}</div>{activeSkill && <p className="filter-note">Showing projects using <strong>{activeSkill}</strong>. <button onClick={() => setActiveSkill('')}>Clear filter</button></p>}</section>

      <section className="section-shell section-block" id="education"><div className="section-heading"><span>05</span><h2>EDUCATION / MILESTONE</h2></div><div className="education-card"><div className="education-years"><span>2021</span><div><i /><b /><i /></div><span>2025</span></div><div><p className="eyebrow">GRADUATED / 08.73</p><h3>B.Tech — Computer Science &amp; Engineering</h3><p>Sree Vidyanikethan Engineering College, Tirupati</p><p className="muted">Core Focus: Backend Architecture · Database Management Systems · Artificial Intelligence · Machine Learning · Systems Design</p></div><strong className="cgpa">CGPA<br /><b>8.73</b> / 10</strong></div></section>

      <section className="section-shell section-block" id="interests"><div className="section-heading"><span>06</span><h2>ENGINEERING INTERESTS</h2></div><div className="research-grid">{interests.map(([num, title, text]) => <div className="research-card" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></div>)}</div></section>

      <section className="section-shell section-block contact-section" id="contact"><div className="contact-copy"><p className="kicker"><span>07</span> OPEN TO OPPORTUNITIES</p><h2>BUILDING<br /><em>USEFUL SYSTEMS.</em></h2><p>Interested in backend development, AI/GenAI, and building practical software systems.</p><div className="contact-socials"><a href="https://github.com/tapasilikithareddy" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/tapasi-likitha-reddy/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="mailto:">Email ↗</a><a href="/resume.pdf" download>Resume ↗</a></div></div><form className="contact-form" onSubmit={submitContact}><label htmlFor="name">NAME<input id="name" name="name" required /></label><label htmlFor="email">EMAIL<input id="email" name="email" type="email" required /></label><label htmlFor="message">MESSAGE<textarea id="message" name="message" rows={4} required /></label><button className="primary-button" type="submit">SEND MESSAGE <span>↗</span></button>{sent && <p className="form-success" role="status">Your email client should open with the message ready to send.</p>}</form></section>

      <footer className="site-footer section-shell"><div><a className="brand" href="#top">LR<span>_</span></a><p>Backend Developer · AI / GenAI</p></div><div className="footer-links"><a href="https://github.com/tapasilikithareddy" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/tapasi-likitha-reddy/" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:">Email</a></div><small>© 2026 Likitha Reddy</small></footer>

      {selectedProject && <div className="modal-backdrop" role="presentation" onClick={() => setSelectedProject(null)}><article className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project details">×</button><p className="eyebrow">{selectedProject.number} / CASE STUDY</p><h2 id="project-modal-title">{selectedProject.title}</h2><p>{selectedProject.description}</p><h3>KEY TECHNICAL HIGHLIGHTS</h3><ul>{selectedProject.details.map((detail) => <li key={detail}>{detail}</li>)}</ul><div className="architecture"><span>FRONTEND</span><b>↓</b><span>API / BACKEND SERVICE</span><b>↓</b><span>DATABASE / PROCESSING</span></div><div className="tag-row">{selectedProject.tech.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="modal-actions"><a className="primary-button" href="https://github.com/tapasilikithareddy" target="_blank" rel="noreferrer">GITHUB ↗</a><button className="secondary-button" onClick={() => setSelectedProject(null)}>CLOSE</button></div></article></div>}
    </main>
  )
}
