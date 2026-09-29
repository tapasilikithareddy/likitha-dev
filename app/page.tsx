'use client'

import { useState } from 'react'

const projects = [
  ['AI Resume Analyzer', 'React · Node.js · PostgreSQL · LLM · RAG'],
  ['Developer Support AI', 'React · FastAPI · PostgreSQL · Qdrant · LLM · RAG'],
  ['AI Personal Finance Copilot', 'React · Node.js · PostgreSQL · LLM · RAG'],
  ['Cloud File Processing Platform', 'React · Spring Boot · AWS S3 · SQS · PostgreSQL · Docker'],
  ['Scuba Scuba — Multiplayer Arcade Game', 'Node.js · Socket.IO · JavaScript · HTML · CSS'],
  ['Stripe Payment Integration', 'Stripe · Node.js · React · REST API'],
  ['Personal Finance Management System', 'Java · React · Node.js · SQL'],
  ['Enhanced Intrusion Detection in Network Traffic', 'Python · DNN · RNN/LSTM · Attention · NSL-KDD'],
  ['Cosmetic Store Management System', 'Salesforce'],
  ['Weather Forecast Web App', 'React · API'],
  ['ATM Machine Simulation', 'Java'],
  ['Apple Website Clone', 'React · Vite · CSS'],
]

const stack = ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'Java', 'Python', 'PostgreSQL', 'AWS', 'Docker', 'LLM', 'RAG']

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showAll, setShowAll] = useState(false)

  return (
    <main className="palak-page palak-clone-page">
      <header className="palak-header">
        <a href="#top" className="palak-logo">likitha<span>●</span></a>
        <button className="palak-menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>Menu <span>{menuOpen ? '×' : '↗'}</span></button>
        <nav className={menuOpen ? 'palak-nav open' : 'palak-nav'}>
          <a href="#top" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </header>

      <section className="palak-hero" id="top">
        <div className="hero-image-wrap">
          <img src="/likitha-blossom.png" alt="Cherry blossoms beside a vintage street lamp" />
        </div>
        <div className="hero-actions"><a href="#work">View Designs <span>↗</span></a><a href="#contact">View Resume <span>↗</span></a></div>
        <div className="hero-intro">
          <p className="eyebrow">SOFTWARE DEVELOPER · AI RESEARCHER</p>
          <h1>Likitha<br /><em>Reddy</em></h1>
          <p className="hero-lede">I build thoughtful digital products and intelligent systems where clean engineering meets curious ideas.</p>
        </div>
      </section>

      <section className="palak-section about-section" id="about">
        <div className="palak-label">01 — WHO IS LIKITHA?</div>
        <div className="about-copy"><h2>Designing with<br /><em>logic &amp; soul.</em></h2><p>I&apos;m a Computer Science graduate focused on building practical software and exploring intelligent systems. From the first idea to the final working product, I enjoy shaping experiences that feel clear, useful, and human.</p><p>My work spans backend development, modern web technologies, AI/GenAI, and the small details that make a product memorable.</p></div>
      </section>

      <section className="palak-section stack-section">
        <div className="palak-label">02 — TECH STACK</div>
        <div className="stack-content"><h2>Tools I use<br /><em>to make things happen.</em></h2><div className="stack-list">{stack.map((item, i) => <span key={item} className={i < 4 ? 'featured' : ''}>{item}</span>)}</div></div>
      </section>

      <section className="palak-section work-section" id="work">
        <div className="palak-label">03 — SELECTED WORK</div>
        <div className="work-content"><h2>Things I&apos;ve<br /><em>built &amp; explored.</em></h2><div className="project-list">{projects.slice(0, showAll ? projects.length : 6).map(([title, tech], index) => <article className="project-row" key={title}><span className="project-number">{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{tech}</p></div><span className="project-arrow">↗</span></article>)}</div><button className="text-button" onClick={() => setShowAll(!showAll)}>{showAll ? 'Show fewer projects' : 'View all projects'} <span>↗</span></button></div>
      </section>

      <section className="palak-section experience-section">
        <div className="palak-label">04 — APPROACH</div>
        <div className="experience-copy"><h2>Always learning.<br /><em>Always building.</em></h2><p>I like asking better questions, learning how systems work, and turning rough ideas into dependable software. My current focus is AI-powered applications, backend systems, and real-world products that make work simpler.</p><div className="mini-facts"><div><strong>01</strong><span>Backend &amp; APIs</span></div><div><strong>02</strong><span>AI / GenAI systems</span></div><div><strong>03</strong><span>Full-stack products</span></div></div></div>
      </section>

      <section className="palak-contact" id="contact"><div className="palak-label">05 — GET IN TOUCH</div><div><h2>Have an idea?<br /><em>Let&apos;s build it.</em></h2><a className="contact-link" href="mailto:">Let&apos;s Talk <span>↗</span></a><div className="social-links"><a href="https://github.com/tapasilikithareddy" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/tapasi-likitha-reddy/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="mailto:">Email ↗</a></div></div></section>

      <footer className="palak-footer"><span>Made with care and curiosity by Likitha Reddy</span><span>© 2026</span></footer>
    </main>
  )
}
