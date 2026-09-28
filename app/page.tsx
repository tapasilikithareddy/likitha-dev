'use client'

import { FormEvent, useState } from 'react'

const skillGroups = [
  ['LANGUAGES', ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL']],
  ['FRONTEND', ['React.js', 'Next.js', 'Vite', 'HTML', 'CSS', 'Tailwind CSS']],
  ['BACKEND', ['Node.js', 'Express.js', 'Spring Boot']],
  ['DATABASES', ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis']],
  ['AI / GENAI', ['LLM', 'RAG', 'Vector Databases', 'Qdrant', 'Pinecone', 'Generative AI']],
  ['CLOUD / DEVOPS', ['AWS', 'Docker', 'Git', 'GitHub', 'WSL']],
  ['TOOLS', ['Postman', 'Jupyter Notebook', 'Tableau', 'Power BI']],
]

const projects = [
  { number: '01', type: 'MULTIPLAYER WEB GAME', title: 'SCUBA SCUBA', description: 'A real-time multiplayer arcade platform where players can create or join rooms and play browser-based games together.', tech: ['Node.js', 'Socket.IO', 'JavaScript', 'HTML', 'CSS'], status: 'PROJECT', tone: 'ocean' },
  { number: '02', type: 'AI / RESEARCH', title: 'ENHANCED INTRUSION DETECTION', description: 'A machine-learning network intrusion detection project focused on identifying rare threats in network traffic using deep attention mechanisms.', tech: ['Python', 'DNN', 'RNN / LSTM', 'Attention'], status: 'RESEARCH', tone: 'violet' },
  { number: '03', type: 'FULL-STACK APPLICATION', title: 'PERSONAL FINANCE MANAGEMENT SYSTEM', description: 'A practical application designed to help users organize and track their financial activity.', tech: ['Java', 'React', 'Node.js', 'SQL'], status: 'PROJECT', tone: 'green' },
  { number: '04', type: 'SALESFORCE', title: 'COSMETIC STORE MANAGEMENT SYSTEM', description: 'A Salesforce-based application for managing cosmetic store operations.', tech: ['Salesforce'], status: 'PROJECT', tone: 'blue' },
]

const certifications = ['Google Cloud Computing Foundations', 'AWS Academy Cloud Foundations', 'Salesforce Platform Developer I', 'ITIL V4', 'Career Essentials in Generative AI', 'IBM Cybersecurity SkillsBuild']

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const subject = encodeURIComponent(`Portfolio message from ${data.get('name')}`)
    const body = encodeURIComponent(`${data.get('message')}\n\nReply to: ${data.get('email')}`)
    window.location.href = `mailto:?subject=${subject}&body=${body}`
    setSent(true)
    form.reset()
  }

  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Likitha Reddy home">LR<span>_</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="main-nav">{menuOpen ? 'CLOSE' : 'MENU'}</button>
        <nav id="main-nav" className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {['about', 'skills', 'projects', 'research', 'contact'].map((item) => <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
        </nav>
        <span className="header-status"><i /> OPEN TO OPPORTUNITIES</span>
      </header>

      <section className="hero section-shell">
        <div className="hero-content">
          <p className="kicker"><span>01</span> SOFTWARE / AI / SYSTEMS</p>
          <h1>LIKITHA<br /><em>REDDY</em></h1>
          <p className="role">Software Developer <b>·</b> AI Researcher</p>
          <p className="hero-description">I build practical software and explore intelligent systems at the intersection of backend engineering, AI, and modern web technologies.</p>
          <div className="hero-actions"><a className="primary-button" href="#projects">VIEW PROJECTS <span>↘</span></a><a className="secondary-button" href="/resume.pdf" download>DOWNLOAD RESUME <span>↗</span></a></div>
          <div className="social-row"><a href="https://github.com/tapasilikithareddy" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/tapasi-likitha-reddy/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
        </div>
        <div className="hero-visual" aria-label="Abstract system visualization" role="img"><div className="visual-grid" /><div className="core-node"><span>LR</span></div><div className="signal signal-a">API / 200</div><div className="signal signal-b">AI_LAYER</div><div className="signal signal-c">BUILDING...</div><div className="connector connector-a" /><div className="connector connector-b" /><div className="connector connector-c" /></div>
        <div className="scroll-cue">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section className="section-shell section-block" id="about"><div className="section-heading"><span>02</span><h2>ABOUT / OVERVIEW</h2></div><div className="about-grid"><div><p className="large-copy">I&apos;m a Computer Science graduate focused on building practical software and exploring intelligent systems.</p><p>My interests span backend development, modern web technologies, AI/GenAI, and systems that solve real-world problems. I enjoy taking an idea from concept to a working application — designing the backend, connecting the pieces, debugging the difficult parts, and shipping the result.</p></div><dl className="info-panel"><div><dt>ROLE</dt><dd>Software Developer · AI Researcher</dd></div><div><dt>EDUCATION</dt><dd>B.Tech in Computer Science and Engineering</dd></div><div><dt>GRADUATION</dt><dd>2025</dd></div><div><dt>LOCATION</dt><dd>India</dd></div><div><dt>FOCUS</dt><dd>Backend · AI · GenAI · Intelligent Systems</dd></div></dl></div></section>

      <section className="section-shell section-block" id="skills"><div className="section-heading"><span>03</span><h2>TECH STACK</h2></div><div className="skills-grid">{skillGroups.map(([group, items]) => <div className="skill-group" key={group}><h3>{group}</h3><div>{(items as string[]).map((skill, index) => <span className={index < 3 ? 'priority' : ''} key={skill}>{skill}</span>)}</div></div>)}</div></section>

      <section className="section-shell section-block" id="projects"><div className="section-heading"><span>04</span><h2>SELECTED PROJECTS</h2></div><div className="projects-grid">{projects.map((project) => <article className={`project-card ${project.tone}`} key={project.title}><div className="project-visual"><span>{project.number}</span><b>{project.status}</b><div className="mini-lines" /></div><div className="project-meta">{project.type}<span>↗</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tech.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-links"><span>GITHUB — NOT PROVIDED</span></div></article>)}</div></section>

      <section className="section-shell section-block research-block" id="research"><div className="section-heading"><span>05</span><h2>AI / RESEARCH</h2></div><p className="research-intro">Exploring intelligent systems beyond the surface level — from machine learning and intrusion detection to modern LLM-powered applications.</p><div className="research-grid">{[['01', 'INTELLIGENT SYSTEMS', 'Deep learning · RNN/LSTM · Attention mechanisms · Network intrusion detection'], ['02', 'GENERATIVE AI', 'LLMs · RAG · Vector databases · Qdrant · Pinecone'], ['03', 'APPLIED AI', 'Building practical applications where AI connects with software systems, APIs, data and real-world workflows.']].map(([num, title, text]) => <div className="research-card" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></div>)}</div></section>

      <section className="section-shell section-block timeline-section"><div className="section-heading"><span>06</span><h2>EDUCATION / EXPERIENCE</h2></div><div className="timeline"><div><span>2021 — 2025</span><h3>B.Tech — Computer Science and Engineering</h3><p>Sree Vidyanikethan Engineering College <b>·</b> CGPA: 8.73 / 10</p></div><div><span>OCT — DEC 2024</span><h3>Infosys Springboard Internship</h3><p>Personal Finance Management System</p></div><div><span>2023 — 2025</span><h3>Virtual Internships</h3><p>Salesforce Developer · Salesforce Admin · Cloud</p></div></div><div className="certs"><h3>CERTIFICATIONS</h3>{certifications.map((cert) => <span key={cert}>{cert}</span>)}</div></section>

      <section className="section-shell section-block contact-section" id="contact"><div className="contact-copy"><p className="kicker"><span>07</span> GET IN TOUCH</p><h2>LET&apos;S BUILD<br /><em>SOMETHING USEFUL.</em></h2><p>Have an opportunity, project idea, or just want to connect?<br />I&apos;d love to hear from you.</p><div className="contact-socials"><a href="https://github.com/tapasilikithareddy" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/tapasi-likitha-reddy/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="mailto:">Email ↗</a></div></div><form className="contact-form" onSubmit={submitContact}><label htmlFor="name">NAME<input id="name" name="name" required /></label><label htmlFor="email">EMAIL<input id="email" name="email" type="email" required /></label><label htmlFor="message">MESSAGE<textarea id="message" name="message" rows={5} required /></label><button className="primary-button" type="submit">SEND MESSAGE <span>↗</span></button>{sent && <p className="form-success" role="status">Your email client should open with the message ready to send.</p>}</form></section>

      <footer className="site-footer section-shell"><div><a className="brand" href="#top">LR<span>_</span></a><p>Software Developer · AI Researcher</p></div><div className="footer-links"><a href="https://github.com/tapasilikithareddy" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/tapasi-likitha-reddy/" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:">Email</a></div><small>© 2026 Likitha Reddy</small></footer>
    </main>
  )
}
