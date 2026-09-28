const projects = [
  {
    number: '01',
    title: 'AI Resume Analyzer',
    description:
      'An AI-powered tool that compares a resume with a job description and highlights matching and missing skills.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'LLM', 'RAG'],
    color: 'peach',
  },
  {
    number: '02',
    title: 'Developer Support AI',
    description:
      'An AI assistant that answers questions from uploaded technical documentation using RAG.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Qdrant', 'LLM'],
    color: 'lilac',
  },
  {
    number: '03',
    title: 'AI Personal Finance Copilot',
    description:
      'An assistant that helps users understand their spending and ask questions about their finances using natural language.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'LLM', 'RAG'],
    color: 'mint',
  },
  {
    number: '04',
    title: 'Cloud File Processing Platform',
    description:
      'A cloud application for uploading files, processing them in the background, and tracking processing status.',
    tech: ['React', 'Spring Boot', 'AWS S3', 'SQS', 'PostgreSQL', 'Docker'],
    color: 'butter',
  },
  {
    number: '05',
    title: 'Scuba Scuba',
    description:
      'A real-time multiplayer arcade game with private rooms, room codes, player lobbies, and multiplayer mini-games.',
    tech: ['Node.js', 'Socket.IO', 'JavaScript', 'HTML', 'CSS'],
    color: 'blue',
  },
]

const skills = ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'React', 'Node.js', 'Spring Boot', 'FastAPI', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Git', 'GitHub', 'LLMs', 'RAG']

export default function Page() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="logo" href="#top">LRT<span>.</span></a>
        <div className="nav-links">
          <a href="#about">about</a>
          <a href="#projects">projects</a>
          <a href="#contact">contact</a>
        </div>
        <a className="nav-dot" href="#contact" aria-label="Jump to contact">↗</a>
      </nav>

      <section className="hero section-wrap" id="top">
        <div className="hero-copy">
          <p className="eyebrow">computer science · ai · builder</p>
          <h1>Hi, I&apos;m<br /><em>Likitha</em> <span className="wave" aria-hidden="true">👋</span></h1>
          <p className="hero-intro">A Computer Science graduate who enjoys building software, exploring AI, and learning how things work.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#projects">See my work <span>↓</span></a>
            <a className="text-link" href="#contact">Let&apos;s connect <span>↗</span></a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="sun"></div>
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="spark spark-one">✦</div>
          <div className="spark spark-two">✳</div>
          <div className="art-note">always curious <span>↘</span></div>
        </div>
      </section>

      <section className="about section-wrap" id="about">
        <div className="section-label"><span>01</span><span>about me</span></div>
        <div className="about-grid">
          <h2>Building useful things<br /><em>with a curious mind.</em></h2>
          <div className="about-copy">
            <p>Computer Science graduate interested in backend development, AI applications, web development, and cloud technologies.</p>
            <p className="hand-note">currently learning<br /><strong>one thing at a time.</strong> ✦</p>
          </div>
        </div>
      </section>

      <section className="skills section-wrap">
        <div className="section-label"><span>02</span><span>things I work with</span></div>
        <div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
      </section>

      <section className="projects section-wrap" id="projects">
        <div className="section-label"><span>03</span><span>selected projects</span></div>
        <div className="project-list">
          {projects.map((project) => (
            <article className={`project-card ${project.color}`} key={project.title}>
              <div className="project-top"><span className="project-number">{project.number}</span><span className="project-arrow">↗</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-list">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="education section-wrap">
        <div className="section-label"><span>04</span><span>education</span></div>
        <div className="education-card">
          <div><p className="muted">2021 — 2025</p><h2>B.Tech in Computer Science<br />and Engineering</h2></div>
          <div className="school"><p>Sree Vidyanikethan Engineering College</p><span>CGPA: 8.73 / 10</span></div>
        </div>
      </section>

      <footer className="footer section-wrap" id="contact">
        <div className="footer-heading"><p className="eyebrow">have a question or just want to say hi?</p><h2>Let&apos;s make<br /><em>something good.</em></h2></div>
        <div className="contact-links"><a href="https://github.com/tapasilikithareddy" target="_blank" rel="noreferrer">GitHub <span>↗</span></a><a href="https://www.linkedin.com/in/tapasi-likitha-reddy/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a></div>
        <div className="footer-bottom"><span>© 2025 Likitha Reddy Tapasi</span><span>made with curiosity ✦</span></div>
      </footer>
    </main>
  )
}
