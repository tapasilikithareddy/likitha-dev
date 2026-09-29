'use client'

import { FormEvent, useEffect, useState } from 'react'

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
  { number: '01', type: 'AI / FULL-STACK', title: 'AI RESUME ANALYZER', description: 'An intelligent resume analysis platform that uses LLM and RAG workflows to deliver useful career feedback.', tech: ['React', 'Node.js', 'PostgreSQL', 'LLM', 'RAG'], status: 'AI PROJECT', image: '/project-resume.png' },
  { number: '02', type: 'AI / DEVELOPER TOOLS', title: 'DEVELOPER SUPPORT AI', description: 'An AI-powered developer support system that retrieves relevant technical context and generates grounded answers.', tech: ['React', 'FastAPI', 'PostgreSQL', 'Qdrant', 'LLM', 'RAG'], status: 'AI PROJECT', image: '/project-support.png' },
  { number: '03', type: 'AI / FINTECH', title: 'AI PERSONAL FINANCE COPILOT', description: 'A personal finance assistant designed to turn financial data into practical, conversational guidance.', tech: ['React', 'Node.js', 'PostgreSQL', 'LLM', 'RAG'], status: 'AI PROJECT', image: '/project-finance.png' },
  { number: '04', type: 'CLOUD PLATFORM', title: 'CLOUD FILE PROCESSING PLATFORM', description: 'A cloud-native file processing platform built around reliable queues, object storage, and containerized services.', tech: ['React', 'Spring Boot', 'AWS S3', 'SQS', 'PostgreSQL', 'Docker'], status: 'PLATFORM', image: '/project-cloud.png' },
  { number: '05', type: 'MULTIPLAYER WEB GAME', title: 'SCUBA SCUBA', description: 'A real-time multiplayer arcade game where players can create or join rooms and play together in the browser.', tech: ['Node.js', 'Socket.IO', 'JavaScript', 'HTML', 'CSS'], status: 'GAME', tone: 'ocean' },
  { number: '06', type: 'PAYMENTS', title: 'STRIPE PAYMENT INTEGRATION', description: 'A secure payment integration connecting a React experience to a Node.js REST API and Stripe.', tech: ['Stripe', 'Node.js', 'React', 'REST API'], status: 'INTEGRATION', tone: 'violet' },
  { number: '07', type: 'FULL-STACK APPLICATION', title: 'PERSONAL FINANCE MANAGEMENT SYSTEM', description: 'A practical application designed to help users organize and track their financial activity.', tech: ['Java', 'React', 'Node.js', 'SQL'], status: 'PROJECT', tone: 'green' },
  { number: '08', type: 'AI / RESEARCH', title: 'ENHANCED INTRUSION DETECTION IN NETWORK TRAFFIC', description: 'A deep learning research project focused on identifying network threats using sequential models and attention.', tech: ['Python', 'DNN', 'RNN/LSTM', 'Attention', 'NSL-KDD'], status: 'RESEARCH', tone: 'violet' },
  { number: '09', type: 'SALESFORCE', title: 'COSMETIC STORE MANAGEMENT SYSTEM', description: 'A Salesforce-based application for managing cosmetic store operations and workflows.', tech: ['Salesforce'], status: 'PROJECT', tone: 'blue' },
  { number: '10', type: 'WEB APPLICATION', title: 'WEATHER FORECAST WEB APP', description: 'A responsive weather application that presents forecast information through a clean React interface.', tech: ['React', 'API'], status: 'WEB APP', tone: 'ocean' },
  { number: '11', type: 'JAVA APPLICATION', title: 'ATM MACHINE SIMULATION', description: 'A Java-based ATM simulation covering common banking operations and user flows.', tech: ['Java'], status: 'PROJECT', tone: 'green' },
  { number: '12', type: 'FRONTEND RECREATION', title: 'APPLE WEBSITE CLONE', description: 'A responsive recreation of the Apple website experience built with a modern frontend toolchain.', tech: ['React', 'Vite', 'CSS'], status: 'WEB APP', tone: 'blue' },
]

const certifications = ['Google Cloud Computing Foundations', 'AWS Academy Cloud Foundations', 'Salesforce Platform Developer I', 'ITIL V4', 'Career Essentials in Generative AI', 'IBM Cybersecurity SkillsBuild']

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const [showMoreProjects, setShowMoreProjects] = useState(false)

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('likitha-theme')
    if (savedTheme === 'light') setIsDark(false)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('light', !isDark)
    window.localStorage.setItem('likitha-theme', isDark ? 'dark' : 'light')
  }, [isDark])

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
        <div className="header-tools"><span className="header-status"><i /> OPEN TO OPPORTUNITIES</span><button className="theme-toggle" type="button" onClick={() => setIsDark((current) => !current)} aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}>{isDark ? '☀' : '☾'}</button></div>
      </header>

      <section className="hero section-shell">
        <div className="hero-banner"><img src="/likitha-banner.png" alt="Pixel-art mountain landscape" /><span className="live-time"><i /> ONLINE</span></div>
        <div className="profile-card">
          <img className="avatar" src="/likitha-avatar.png" alt="Portrait of Likitha Reddy" />
          <div className="profile-copy"><h1>Likitha Reddy <span className="verified">●</span></h1><p>22 · I am a <strong>Software Developer</strong></p><small>● Building AI systems · Reading books · Always learning</small></div><span className="views">◉ 859</span>
        </div>
        <div className="hero-content"><p className="hero-description">Full Stack AI Engineer. I love building, breaking, and shipping things.</p><ul><li>Skilled in <strong>React, JavaScript, Node.js, Java, Python, and PostgreSQL.</strong></li><li>Learning in AI, system design, and GenAI.</li><li>Passionate about exploring new technologies and solving real-world problems.</li></ul></div>
      </section>

      <section className="section-shell section-block" id="about"><div className="section-heading"><span>02</span><h2>ABOUT / OVERVIEW</h2></div><div className="about-grid"><div><p className="large-copy">I&apos;m a Computer Science graduate focused on building practical software and exploring intelligent systems.</p><p>My interests span backend development, modern web technologies, AI/GenAI, and systems that solve real-world problems. I enjoy taking an idea from concept to a working application — designing the backend, connecting the pieces, debugging the difficult parts, and shipping the result.</p></div><dl className="info-panel"><div><dt>ROLE</dt><dd>Software Developer · AI Researcher</dd></div><div><dt>EDUCATION</dt><dd>B.Tech in Computer Science and Engineering</dd></div><div><dt>GRADUATION</dt><dd>2025</dd></div><div><dt>LOCATION</dt><dd>India</dd></div><div><dt>FOCUS</dt><dd>Backend · AI · GenAI · Intelligent Systems</dd></div></dl></div></section>

      <section className="section-shell section-block" id="skills"><div className="section-heading"><span>03</span><h2>TECH STACK</h2></div><div className="skills-grid">{skillGroups.map(([group, items]) => <div className="skill-group" key={group}><h3>{group}</h3><div>{(items as string[]).map((skill, index) => <span className={index < 3 ? 'priority' : ''} key={skill}>{skill}</span>)}</div></div>)}</div></section>

      <section className="section-shell section-block" id="projects"><div className="section-heading"><span>04</span><h2>SELECTED PROJECTS</h2></div><div className="projects-grid">{projects.slice(0, showMoreProjects ? projects.length : 4).map((project) => <article className="project-card" key={project.title}><div className="project-visual"><img src={project.image ?? '/likitha-banner.png'} alt={`${project.title} project preview`} /><span>{project.number}</span><b>{project.status}</b></div><div className="project-meta">{project.type}<span>FEATURED</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tech.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div><button className="more-projects" type="button" onClick={() => setShowMoreProjects((current) => !current)}>{showMoreProjects ? 'SHOW FEWER PROJECTS' : 'VIEW MORE PROJECTS'} <span>→</span></button></section>

      <section className="section-shell section-block research-block" id="research"><div className="section-heading"><span>05</span><h2>AI / RESEARCH</h2></div><p className="research-intro">Exploring intelligent systems beyond the surface level — from machine learning and intrusion detection to modern LLM-powered applications.</p><div className="research-grid">{[['01', 'INTELLIGENT SYSTEMS', 'Deep learning · RNN/LSTM · Attention mechanisms · Network intrusion detection'], ['02', 'GENERATIVE AI', 'LLMs · RAG · Vector databases · Qdrant · Pinecone'], ['03', 'APPLIED AI', 'Building practical applications where AI connects with software systems, APIs, data and real-world workflows.']].map(([num, title, text]) => <div className="research-card" key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></div>)}</div></section>

      <section className="section-shell section-block contact-section" id="contact"><div className="contact-copy"><p className="kicker"><span>07</span> GET IN TOUCH</p><h2>LET&apos;S BUILD<br /><em>SOMETHING USEFUL.</em></h2><p>Have an opportunity, project idea, or just want to connect?<br />I&apos;d love to hear from you.</p><div className="contact-socials"><a href="https://github.com/tapasilikithareddy" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/tapasi-likitha-reddy/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="mailto:">Email ↗</a></div></div><form className="contact-form" onSubmit={submitContact}><label htmlFor="name">NAME<input id="name" name="name" required /></label><label htmlFor="email">EMAIL<input id="email" name="email" type="email" required /></label><label htmlFor="message">MESSAGE<textarea id="message" name="message" rows={5} required /></label><button className="primary-button" type="submit">SEND MESSAGE <span>↗</span></button>{sent && <p className="form-success" role="status">Your email client should open with the message ready to send.</p>}</form></section>

      <footer className="site-footer section-shell"><div><a className="brand" href="#top">LR<span>_</span></a><p>Software Developer · AI Researcher</p></div><div className="footer-links"><a href="https://github.com/tapasilikithareddy" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/tapasi-likitha-reddy/" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:">Email</a></div><small>© 2026 Likitha Reddy</small></footer>
    </main>
  )
}
