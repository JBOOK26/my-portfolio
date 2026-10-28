
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Boxes,
  Database,
  Dumbbell,
  ExternalLink,
  GraduationCap,
  Laptop,
  Mail,
  MessageCircle,
  Network,
  Phone,
  Wallet,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import ContributionsCalendar from "./contributions-calendar";
import SiteHeader from "./site-header";

const profileLinks = {
  email: "justinbucod3@gmail.com",
  github: "https://github.com/JBOOK26",
  linkedin: "",
};

const contactOptions = [
  {
    name: "WhatsApp",
    icon: MessageCircle,
    display: "09626962188",
    href: "https://wa.me/639626962188",
    action: "Message on WhatsApp",
    external: true,
  },
  {
    name: "Email",
    icon: Mail,
    display: profileLinks.email,
    href: `mailto:${profileLinks.email}`,
    action: "Send Email",
    external: false,
  },
  {
    name: "Phone",
    icon: Phone,
    display: "09931464527",
    href: "tel:+639931464527",
    action: "Call Me",
    external: false,
  },
];

const socialLinks = [
  { label: "GitHub", href: profileLinks.github },
  { label: "LinkedIn", href: profileLinks.linkedin },
].filter((link) => link.href);

const skills = [
  {
    title: "Networking",
    icon: Network,
    level: "Currently learning",
    items: ["TCP/IP fundamentals", "LANs and VLANs", "Routing and switching", "Cisco Packet Tracer"],
  },
  {
    title: "Web Development",
    icon: Braces,
    level: "Building projects",
    items: ["HTML and CSS", "JavaScript", "PHP", "Next.js fundamentals"],
  },
  {
    title: "Databases",
    icon: Database,
    level: "Hands-on practice",
    items: ["MySQL / MariaDB", "Database design", "CRUD operations", "Database triggers"],
  },
  {
    title: "Tools & Systems",
    icon: Wrench,
    level: "Growing my toolkit",
    items: ["VS Code", "Git and GitHub", "XAMPP", "Windows troubleshooting"],
  },
];

type Project = {
  number: string;
  title: string;
  category: string;
  icon: LucideIcon;
  repositoryName: string | null;
  description: string;
  technologies: string[];
  repositoryUrl: string | null;
  liveDemoUrl: string | null;
};

const projects: Project[] = [
  {
    number: "01",
    title: "StockPilot Inventory Management System",
    category: "Web app · Inventory management",
    icon: Database,
    repositoryName: null,
    description:
      "A PHP inventory management system developed with XAMPP and MySQL/MariaDB. It supports inventory create, read, update, and delete workflows, stores activity logs and price history in related tables, and uses three database triggers.",
    technologies: ["PHP", "XAMPP", "MySQL / MariaDB", "CRUD", "Database triggers"],
    repositoryUrl: null,
    liveDemoUrl: null,
  },
  {
    number: "02",
    title: "Inventory App",
    category: "Team project · Inventory management",
    icon: Boxes,
    repositoryName: "Bucod-Dagoy-ADV101-final-project",
    description:
      "A Next.js and MySQL inventory app with product create, search, update, and delete workflows, plus authenticated sales records, sale details, revenue summaries, and stock updates.",
    technologies: ["Next.js", "React", "MySQL", "mysql2", "JWT"],
    repositoryUrl: "https://github.com/JBOOK26/Bucod-Dagoy-ADV101-final-project",
    liveDemoUrl: null,
  },
  {
    number: "03",
    title: "BudgetBuddy",
    category: "Mobile app · Budget tracking",
    icon: Wallet,
    repositoryName: "BudgetBuddy",
    description:
      "An Expo and React Native budgeting app with Firebase authentication and Firestore transactions. Its dashboard summarizes income, expenses, balance, and spending by category, with transaction entry and history.",
    technologies: ["React Native", "Expo", "Firebase Auth", "Cloud Firestore", "React Native Chart Kit"],
    repositoryUrl: "https://github.com/JBOOK26/BudgetBuddy",
    liveDemoUrl: null,
  },
  {
    number: "04",
    title: "GymSphere",
    category: "Front-end prototype · Fitness",
    icon: Dumbbell,
    repositoryName: "HCI",
    description:
      "A multi-section gym website prototype with membership-plan and class-booking flows, account screens, and contact and class-suggestion forms.",
    technologies: ["HTML", "CSS", "JavaScript"],
    repositoryUrl: "https://github.com/JBOOK26/HCI",
    liveDemoUrl: null,
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
      <section className="hero section-wrap" id="home" aria-labelledby="home-title">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" /> THIRD-YEAR IT STUDENT
          </div>

          <h1 id="home-title">
            Curious about tech.
            <br />
            Driven to <span className="gradient-text">build.</span>
          </h1>

          <p className="hero-lede">
            I’m an Information Technology student exploring networking,
            software development, databases, and the systems that connect them.
          </p>

          <p className="hero-note">
            Learning by doing, one project at a time.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <ArrowUpRight size={17} />
            </a>
            {(profileLinks.email || socialLinks.length > 0) && (
              <a className="button button-secondary" href="#contact">
                Let’s connect <Mail size={16} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="code-window">
            <div className="window-top">
              <span /><span /><span />
              <small>my-journey.ts</small>
            </div>

            <div className="code-lines">
              <p><span className="code-muted">01</span> <span className="code-purple">const</span> <span className="code-blue">student</span> = {"{"}</p>
              <p><span className="code-muted">02</span> &nbsp; role: <span className="code-green">&quot;IT Student&quot;</span>,</p>
              <p><span className="code-muted">03</span> &nbsp; year: <span className="code-orange">3</span>,</p>
              <p><span className="code-muted">04</span> &nbsp; interests: [</p>
              <p><span className="code-muted">05</span> &nbsp;&nbsp; <span className="code-green">&quot;networking&quot;</span>,</p>
              <p><span className="code-muted">06</span> &nbsp;&nbsp; <span className="code-green">&quot;development&quot;</span>,</p>
              <p><span className="code-muted">07</span> &nbsp;&nbsp; <span className="code-green">&quot;databases&quot;</span></p>
              <p><span className="code-muted">08</span> &nbsp; ],</p>
              <p><span className="code-muted">09</span> &nbsp; mindset: <span className="code-green">&quot;keep learning&quot;</span></p>
              <p><span className="code-muted">10</span> {"}"};</p>
              <p className="code-comment"><span className="code-muted">11</span> {"// keep learning, keep building"}</p>
            </div>

            <div className="terminal-status">
              <span className="status-dot" /> OPEN TO LEARNING
            </div>
          </div>

          <div className="floating-chip chip-top">
            <Network size={16} /> Networking
          </div>
          <div className="floating-chip chip-bottom">
            <Database size={16} /> Databases
          </div>
          <div className="hero-glow" />
        </div>

        <a className="scroll-hint" href="#about">
          <ArrowDown size={15} /> Scroll to explore
        </a>
      </section>

      <section className="about section-wrap section-block" id="about" aria-labelledby="about-title">
        <div className="section-heading">
          <p className="section-kicker">A LITTLE ABOUT ME</p>
          <h2 id="about-title">
            Building my foundation <span className="muted-heading">in tech.</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            <p>
              I’m currently a third-year Information Technology student
              developing practical skills across networking, web development,
              and databases. I enjoy understanding how systems work and turning
              what I learn in class into hands-on projects.
            </p>
            <p>
              I’m still exploring which IT path fits me best, so I’m keeping an
              open mind, practicing consistently, and adding new projects as I grow.
            </p>
          </div>

          <div className="about-facts">
            <div className="fact-card">
              <GraduationCap />
              <div>
                <span>Education</span>
                <strong>Information Technology</strong>
                <small>Third-year student</small>
              </div>
            </div>
            <div className="fact-card">
              <Laptop />
              <div>
                <span>Interests</span>
                <strong>Networks · Code · Data</strong>
                <small>Learning through practice</small>
              </div>
            </div>
            <div className="fact-card">
              <Wrench />
              <div>
                <span>Approach</span>
                <strong>Hands-on learning</strong>
                <small>Learn, build, improve</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap section-block" id="skills" aria-labelledby="skills-title">
        <div className="section-heading heading-row">
          <div>
            <p className="section-kicker">WHAT I’M LEARNING</p>
            <h2 id="skills-title">
              Skills & <span className="muted-heading">toolkit.</span>
            </h2>
          </div>
          <p className="heading-aside">
            A growing toolkit. I’m always working to turn new concepts into
            practical skills.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <article className="skill-card" key={skill.title}>
                <div className="skill-card-top">
                  <span className="skill-icon"><Icon size={21} /></span>
                  <div>
                    <h3>{skill.title}</h3>
                    <p>{skill.level}</p>
                  </div>
                </div>
                <ul>
                  {skill.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            );
          })}
        </div>

        <p className="honesty-note">
          <span>*</span> Skills listed reflect my current learning and practice.
          I’ll update this section as I gain experience.
        </p>
      </section>

      <ContributionsCalendar />

      <section className="section-wrap section-block" id="projects" aria-labelledby="projects-title">
        <div className="section-heading heading-row">
          <div>
            <p className="section-kicker">SELECTED WORK</p>
            <h2 id="projects-title">
              Explore my <span className="muted-heading">projects.</span>
            </h2>
          </div>
          <p className="heading-aside">
            A selection of projects built while developing practical skills in web development and databases.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-icon" aria-hidden="true">
                <project.icon size={25} />
              </div>

              <div className="project-content">
                <div className="project-meta">{project.category}</div>
                <h3>{project.title}</h3>
                {project.repositoryName && (
                  <p className="project-repository">GitHub repository: {project.repositoryName}</p>
                )}
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.technologies.map((technology) => (
                    <span className="tag" key={technology}>{technology}</span>
                  ))}
                </div>
                {(project.repositoryUrl || project.liveDemoUrl) && (
                  <div className="project-actions">
                    {project.repositoryUrl && (
                      <a
                        className="button button-secondary project-link"
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View repository <ExternalLink size={16} aria-hidden="true" />
                      </a>
                    )}
                    {project.liveDemoUrl && (
                      <a
                        className="button button-primary project-link"
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live demo <ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="section-wrap contact-inner">
          <div className="contact-heading">
            <p className="section-kicker">HAVE A PROJECT OR OPPORTUNITY?</p>
            <h2 id="contact-title">
              Let’s <span className="gradient-text">connect.</span>
            </h2>
            <p className="contact-copy">
              Have a project, collaboration idea, or IT-related opportunity?
              I’d be glad to hear from you.
            </p>
          </div>
          <div className="contact-options">
            {contactOptions.map((option) => {
              const Icon = option.icon;

              return (
                <article className="contact-card" key={option.name}>
                  <span className="contact-icon" aria-hidden="true">
                    <Icon size={22} />
                  </span>
                  <h3>{option.name}</h3>
                  <a
                    className="contact-detail"
                    href={option.href}
                    target={option.external ? "_blank" : undefined}
                    rel={option.external ? "noopener noreferrer" : undefined}
                    aria-label={`${option.name}: ${option.display}`}
                  >
                    {option.display}
                  </a>
                  <a
                    className="button button-primary contact-action"
                    href={option.href}
                    target={option.external ? "_blank" : undefined}
                    rel={option.external ? "noopener noreferrer" : undefined}
                  >
                    {option.action}
                    {option.external && <ArrowUpRight size={16} aria-hidden="true" />}
                  </a>
                </article>
              );
            })}
          </div>
          {socialLinks.length > 0 && (
            <div className="contact-socials" aria-label="Other profiles">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                  Also find me on {link.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
      </main>
      <footer className="site-footer section-wrap">
        <a className="brand footer-brand" href="#home" aria-label="Back to home">
          <span className="brand-mark"><Braces size={20} /></span>
          <span>justin<span className="brand-dot">'s</span> portfolio</span>
        </a>
        <p>Designed with curiosity. Built while learning.</p>
        <a href="#home" className="back-top">Back to top ↑</a>
      </footer>
    </>
  );
}