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
  const [dark, setDark] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className={dark ? 'palak-page dark-mode' : 'palak-page'} id="top">
      <header className="palak-header">
        <a className="palak-logo" href="#top">likitha<span>web</span></a>
        <button className="theme-toggle" aria-label="Toggle dark mode" onClick={() => setDark(!dark)}><span>{dark ? '☾' : '☼'}</span></button>
        <button className="menu-trigger" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>Menu <b>{menuOpen ? '×' : '↗'}</b></button>
        <nav className={menuOpen ? 'palak-menu open' : 'palak-menu'}>
          <a href="#top" onClick={() => setMenuOpen(false)}>Home</a><a href="#work" onClick={() => setMenuOpen(false)}>Projects</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#contact" onClick={() => setMenuOpen(false)}>Talk</a>
        </nav>
      </header>

      <section className="ref-hero">
        <div className="hero-frame">
          <div className="hero-videos"><div className="hero-orb" /><div className="hero-orb second" /></div>
          <div className="story-card"><span>what&apos;s likitha building rn?</span><button aria-label="View story">↗</button></div>
          <img className="hero-avatar" src="/likitha-avatar.png" alt="Likitha Reddy" />
        </div>
        <div className="hero-actions"><a href="#work">View Designs <span>↗</span></a><a href="#contact">View Resume <span>↗</span></a></div>
        <div className="floating-nav"><a href="#top" aria-label="Home">⌂</a><a href="#work" aria-label="Projects">▱</a><a href="#work" aria-label="Designs">⊞</a><a href="#about" aria-label="About">▤</a><a href="#contact" aria-label="Talk">➤</a></div>
        <div className="ref-intro"><h1>Likitha Reddy <span>✦</span></h1><p>Software Developer · AI Researcher</p><small>20, India</small></div>
      </section>

      <section className="ref-section" id="about"><h2>Who is Likitha?</h2><p>I build products that feel <strong>effortless to use and enjoyable to interact with</strong>. From the first idea to the final line of code, I enjoy shaping digital experiences where <strong>thoughtful engineering and intelligent systems work as one</strong>.</p><p>Currently focused on <strong>AI-powered applications</strong>, I spend most of my time building with <strong>modern full-stack tools</strong> and obsessing over the details that make a product memorable.</p></section>

      <section className="ref-section stack-ref"><h2>Tech Stack</h2><div className="stack-marquee"><div>{stack.map((item) => <span key={item}><i>✦</i>{item}</span>)}</div><div aria-hidden="true">{stack.map((item) => <span key={`copy-${item}`}><i>✦</i>{item}</span>)}</div></div></section>

      <section className="ref-section" id="work"><h2>Selected Work</h2><p className="section-note">A few things I&apos;ve built, explored, and shipped.</p><div className="project-list">{projects.slice(0, showAll ? projects.length : 6).map(([title, tech], index) => <article className="project-row" key={title}><span className="project-number">{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{tech}</p></div><span className="project-arrow">↗</span></article>)}</div><button className="text-button" onClick={() => setShowAll(!showAll)}>{showAll ? 'Show fewer projects' : 'View all projects'} <span>↗</span></button></section>

      <section className="ref-section approach"><h2>Building with intention</h2><p>Curious by nature, I learn how systems work and turn rough ideas into dependable software. My sweet spot is where <strong>backend systems, AI, and thoughtful interfaces</strong> meet.</p><button className="hire-button" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>Let&apos;s talk <span>↗</span></button></section>
      <section className="ref-contact" id="contact"><p>Have an idea?</p><h2>Let&apos;s build it.</h2><a href="mailto:tapasilikithareddy@gmail.com">tapasilikithareddy@gmail.com <span>↗</span></a><div><a href="https://github.com/tapasilikithareddy" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/tapasi-likitha-reddy/" target="_blank" rel="noreferrer">LinkedIn</a></div></section>
      <footer>Made with care and curiosity by Likitha Reddy <span>© 2026</span></footer>
    </main>
  )
}
