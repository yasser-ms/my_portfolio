import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import {
  FaGithub,
  FaDatabase,
  FaServer,
  FaNetworkWired,
  FaCar,
  FaArrowLeft,
  FaExternalLinkAlt,
  FaCreditCard,
  FaUserShield,
  FaHistory,
  FaChartLine,
  FaLock,
  FaCheck,
  FaRocket,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
} from "react-icons/fa";
import { BiNetworkChart } from "react-icons/bi";
import Footer from "../components/Footer";
import { projectData } from "../constants/projectData";

const iconMap = {
  FaServer,
  FaDatabase,
  FaLock,
  FaChartLine,
  FaCar,
  FaCreditCard,
  FaUserShield,
  FaHistory,
  FaNetworkWired,
  BiNetworkChart,
  FaRocket,
};
const getIcon = (name) => iconMap[name] || FaServer;

/* ===== Fade Animation ===== */
const Fade = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ===== Image with Placeholder ===== */
const ProjectImage = ({ src, placeholder, alt, className = "" }) => {
  const [error, setError] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);

  if (error || !src) {
    return (
      <div className={`img-placeholder ${className}`}>
        <p>{placeholder || "Image coming soon"}</p>
      </div>
    );
  }

  return (
    <div className={`img-wrapper ${className}`}>
      {!loaded && <div className="img-skeleton" />}
      <img
        src={src}
        alt={alt || "Screenshot"}
        loading="lazy"
        decoding="async"
        onError={() => setError(true)}
        onLoad={() => setLoaded(true)}
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
        }}
      />
    </div>
  );
};
/* ===== Carousel Component ===== */
const ImageCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const x = useMotionValue(0);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;
      animate(x, targetX, {
        type: "spring",
        stiffness: 300,
        damping: 30,
      });
    }
  }, [index, x]);

  const goNext = () => setIndex((i) => Math.min(images.length - 1, i + 1));
  const goPrev = () => setIndex((i) => Math.max(0, i - 1));

  return (
    <div className="carousel">
      <div className="carousel-container" ref={containerRef}>
        <motion.div className="carousel-track" style={{ x }}>
          {images.map((img, i) => (
            <div key={i} className="carousel-slide">
              <ProjectImage
                src={img.src}
                placeholder={img.placeholder}
                alt={img.title}
              />
            </div>
          ))}
        </motion.div>

        {/* Navigation Arrows */}
        <button
          onClick={goPrev}
          disabled={index === 0}
          className={`carousel-btn prev ${index === 0 ? "disabled" : ""}`}
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={goNext}
          disabled={index === images.length - 1}
          className={`carousel-btn next ${
            index === images.length - 1 ? "disabled" : ""
          }`}
        >
          <FaChevronRight />
        </button>

        {/* Title Overlay */}
        <div className="carousel-title">{images[index]?.title}</div>
      </div>

      {/* Dots */}
      <div className="carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`carousel-dot ${i === index ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

/* ===== Endpoints Table ===== */
const EndpointsTable = ({ endpoints }) => {
  const [expanded, setExpanded] = useState(false);
  const displayEndpoints = expanded ? endpoints : endpoints.slice(0, 5);

  const methodColors = {
    GET: "#22c55e",
    POST: "#3b82f6",
    PUT: "#f59e0b",
    DELETE: "#ef4444",
  };

  return (
    <div className="endpoints-section">
      <div className="endpoints-header">
        <span className="endpoints-count">{endpoints.length} endpoints</span>
      </div>
      <div className="endpoints-table">
        {displayEndpoints.map((ep, i) => (
          <div key={i} className="endpoint-row">
            <span
              className="endpoint-method"
              style={{
                background: `${methodColors[ep.method]}20`,
                color: methodColors[ep.method],
              }}
            >
              {ep.method}
            </span>
            <code className="endpoint-path">{ep.path}</code>
            <span className="endpoint-desc">{ep.desc}</span>
          </div>
        ))}
      </div>
      {endpoints.length > 5 && (
        <button
          className="endpoints-toggle"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show less" : `Show all ${endpoints.length} endpoints`}
        </button>
      )}
    </div>
  );
};

/* ===== Main Component ===== */
const ParkFlowProject = () => {
  const { project, hero, v1, pivot, v2, built, next, demo, comparison } =
    projectData;

  return (
    <div className="page">
      <div className="bg-glow" />

      {/* ===== HEADER ===== */}
      <header className="header">
        <motion.a
          href="/#work"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <FaArrowLeft /> Back to Portfolio
        </motion.a>
      </header>

      {/* ===== HERO ===== */}
      <section className="hero-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge">{project.badge}</span>
          <h1>{project.name}</h1>
          <p className="hook">{hero.hook}</p>
          <p className="subtitle">{hero.subtitle}</p>
          <div className="hero-btns">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn primary"
            >
              <FaGithub /> V2 Repository
            </a>
            <a
              href={project.githubV1}
              target="_blank"
              rel="noreferrer"
              className="btn secondary"
            >
              V1 Code
            </a>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="btn secondary"
              >
                <FaPlay /> Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </section>

      {/* ===== V1 - THE UNIVERSITY PROJECT ===== */}
      <section className="section">
        <div className="container">
          <Fade>
            <span className="label">{v1.label}</span>
            <h2>{v1.title}</h2>
          </Fade>

          <Fade delay={0.1}>
            <p className="story-text">{v1.story}</p>
            <p className="story-text reflection">{v1.reflection}</p>
          </Fade>
          {/* Arch */}
          <Fade delay={0.15}>
            <div className="image-block">
              <ProjectImage
                src={v1.images.arch.src}
                placeholder={v1.images.ui.placeholder}
                alt="V1 architecture"
                className="main-img"
              />
              <span className="caption">High level architecture</span>
            </div>
          </Fade>

          {/* UI Screenshot */}
          <Fade delay={0.15}>
            <div className="image-block">
              <ProjectImage
                src={v1.images.ui.src}
                placeholder={v1.images.ui.placeholder}
                alt="V1 Interface"
                className="main-img"
              />
              <span className="caption">PHP / VanillaJS web interface</span>
            </div>
          </Fade>

          {/* MCD + Limitations */}
          <div className="grid-1">
            <Fade delay={0.2}>
              <div className="image-block">
                <ProjectImage
                  src={v1.images.mcd.src}
                  placeholder={v1.images.mcd.placeholder}
                  alt="Database Schema"
                />
                <span className="caption">Database schema (MCD)</span>
              </div>
            </Fade>

            <Fade delay={0.25}>
              <div className="limitations-box">
                <h4>The Limitations</h4>
                {v1.limitations.map((item) => {
                  const Icon = getIcon(item.icon);
                  return (
                    <div key={item.title} className="limitation-item">
                      <Icon />
                      <div>
                        <strong>{item.title}</strong>
                        <span>{item.desc}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Fade>
          </div>

          {/* Tech Stack */}
          <Fade delay={0.3}>
            <div className="tech-row">
              <div className="tech-tags">
                {v1.techStack.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* ===== THE PIVOT ===== */}
      <section className="section pivot-section">
        <div className="container">
          <Fade>
            <span className="label">{pivot.label}</span>
            <h2>{pivot.title}</h2>
          </Fade>

          <Fade delay={0.1}>
            <div className="pivot-content">
              <p>{pivot.story.discovery}</p>

              <div className="problem-box">
                <h4>The Problem</h4>
                <p>{pivot.story.problem}</p>
              </div>

              <div className="question-box">
                <span>The Question</span>
                <h3>"{pivot.story.question}"</h3>
              </div>

              <p className="decision">{pivot.story.decision}</p>
              <p className="kept">{pivot.kept}</p>
            </div>
          </Fade>
        </div>
      </section>

      {/* ===== V2 - THE VISION ===== */}
      <section className="section">
        <div className="container">
          <Fade>
            <span className="label">{v2.label}</span>
            <h2>{v2.title}</h2>
            <p className="intro">{v2.intro}</p>
          </Fade>

          {/* Architecture Diagram */}
          <Fade delay={0.1}>
            <div className="image-block featured">
              <ProjectImage
                src={v2.images.architecture.src}
                placeholder={v2.images.architecture.placeholder}
                alt="V2 Architecture"
                className="full-img"
              />
            </div>
          </Fade>

          {/* Services Grid */}
          <Fade delay={0.15}>
            <div className="services-grid">
              {v2.services.map((s) => {
                const Icon = getIcon(s.icon);
                return (
                  <div key={s.name} className="service-card">
                    <div
                      className="service-icon"
                      style={{ background: `${s.color}18` }}
                    >
                      <Icon style={{ color: s.color }} />
                    </div>
                    <div>
                      <strong>{s.name}</strong>
                      <code>:{s.port}</code>
                      <p>{s.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Fade>

          {/* Current State Note */}
          <Fade delay={0.2}>
            <div className="note-box">
              <strong>{v2.note.title}:</strong> {v2.note.text}
            </div>
          </Fade>

          {/* Principles */}
          <Fade delay={0.25}>
            <div className="principles">
              {v2.principles.map((p) => (
                <span key={p} className="principle">
                  {p}
                </span>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      {/* ===== WHAT I'VE BUILT SO FAR ===== */}
      <section className="section alt">
        <div className="container">
          <Fade>
            <span className="label">{built.label}</span>
            <h2>{built.title}</h2>
            <p className="intro">{built.intro}</p>
          </Fade>

          {built.sections.map((section) => (
            <div key={section.id} className="built-section">
              <Fade delay={0.1}>
                <h3>{section.title}</h3>
                <p>{section.desc}</p>
              </Fade>

              {/* Carousel or Regular Images */}
              <Fade delay={0.15}>
                {section.useCarousel && section.carouselImages ? (
                  <ImageCarousel images={section.carouselImages} />
                ) : section.images ? (
                  <div className="built-images">
                    {Object.entries(section.images).map(([key, img]) => (
                      <div key={key} className="image-block">
                        <ProjectImage
                          src={img.src}
                          placeholder={img.placeholder}
                          alt={key}
                        />
                      </div>
                    ))}
                  </div>
                ) : null}
              </Fade>

              {/* Endpoints Table (only for backend) */}
              {section.endpoints && (
                <Fade delay={0.2}>
                  <EndpointsTable endpoints={section.endpoints} />
                </Fade>
              )}

              <Fade delay={0.25}>
                <div className="highlights">
                  {section.highlights.map((h) => (
                    <span key={h} className="highlight">
                      {h}
                    </span>
                  ))}
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WHAT'S NEXT ===== */}
      <section className="section">
        <div className="container">
          <Fade>
            <span className="label">{next.label}</span>
            <h2>{next.title}</h2>
            <p className="intro">{next.intro}</p>
          </Fade>

          <Fade delay={0.1}>
            <div className="next-grid">
              {next.items.map((item) => {
                const Icon = getIcon(item.icon);
                return (
                  <div key={item.title} className="next-card">
                    <div className="next-icon">
                      <Icon />
                    </div>
                    <div>
                      <strong>{item.title}</strong>
                      <span className={`status ${item.status}`}>
                        {item.status}
                      </span>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Fade>
        </div>
      </section>

      {/* ===== DEMO ===== */}
      <section className="section alt">
        <div className="container">
          <Fade>
            <h2 className="center">{demo.title}</h2>
            {demo.liveUrl && (
              <p className="center" style={{ marginBottom: "1.5rem" }}>
                <a
                  href={demo.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="demo-link"
                >
                  <FaPlay /> Try the live demo →
                </a>
              </p>
            )}
          </Fade>

          <div className="video-wrapper">
            <iframe
              src={`https://www.youtube.com/embed/unAZOL4p2Lk`}
              title="Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/*           <Fade delay={0.15}>
            <div className="image-block">
              <ProjectImage
                src={demo.images.terminal.src}
                placeholder={demo.images.terminal.placeholder}
                alt="Terminal"
                className="medium-img"
              />
              <span className="caption">TCP Terminal Simulator</span>
            </div>
          </Fade>*/}
        </div>
      </section>

      {/* ===== COMPARISON TABLE ===== */}
      <section className="section">
        <div className="container">
          <Fade>
            <h2 className="center">V1 → V2 Comparison</h2>
          </Fade>

          <Fade delay={0.1}>
            <div className="comparison-table">
              <div className="table-head">
                <span>Aspect</span>
                <span>V1</span>
                <span>V2</span>
              </div>
              {comparison.map((row, i) => (
                <div key={i} className="table-row">
                  <span className="aspect">{row.aspect}</span>
                  <span className="v1">{row.v1}</span>
                  <span className="v2">{row.v2}</span>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section cta-section">
        <div className="container">
          <Fade>
            <h2>Explore the Project</h2>
            <div className="cta-btns">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="cta-btn primary"
              >
                <FaGithub />
                <span>V2 Repository</span>
                <small>Microservices version</small>
              </a>
              <a
                href={project.githubV1}
                target="_blank"
                rel="noreferrer"
                className="cta-btn"
              >
                <FaGithub />
                <span>V1 Repository</span>
                <small>Original project</small>
              </a>
            </div>
          </Fade>
        </div>
      </section>

      <Footer />

      {/* ===== STYLES ===== */}
      <style>{`
        /* Base */
        .page { min-height: 100vh; background: #050816; color: white; }
        .bg-glow { position: fixed; inset: 0; pointer-events: none; background: radial-gradient(ellipse at 70% 10%, rgba(145,94,255,0.07) 0%, transparent 50%); }
        .container { max-width: 950px; margin: 0 auto; padding: 0 1.5rem; }
        .section { padding: 4.5rem 0; }
        .section.alt { background: rgba(21,16,48,0.35); }
        .center { text-align: center; }

        /* Header */
        .header { position: fixed; top: 0; left: 0; right: 0; z-index: 50; padding: 1rem 2rem; background: rgba(5,8,22,0.92); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255,255,255,0.04); }
        .header a { display: inline-flex; align-items: center; gap: 0.5rem; color: #aaa6c3; font-size: 0.875rem; transition: color 0.2s; }
        .header a:hover { color: white; }

        /* Hero */
        .hero-section { min-height: 65vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: 7rem 1.5rem 4rem; }
        .badge { display: inline-block; padding: 0.4rem 1rem; background: linear-gradient(90deg, #00cea8, #bf61ff); border-radius: 9999px; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 1.25rem; }
        .hero-section h1 { font-size: clamp(2.5rem, 10vw, 4rem); font-weight: 900; color: #915eff; margin-bottom: 1rem; }
        .hook { color: white; font-size: 1.15rem; max-width: 550px; margin: 0 auto 0.5rem; line-height: 1.6; }
        .subtitle { color: #aaa6c3; font-size: 0.95rem; margin-bottom: 1.75rem; }
        .hero-btns { display: flex; gap: 0.6rem; justify-content: center; flex-wrap: wrap; }
        .btn { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.65rem 1.1rem; border-radius: 0.5rem; font-weight: 600; font-size: 0.8rem; transition: all 0.2s; }
        .btn.primary { background: #915eff; }
        .btn.primary:hover { box-shadow: 0 0 20px rgba(145,94,255,0.4); }
        .btn.secondary { background: #151030; border: 1px solid rgba(255,255,255,0.08); }
        .btn:hover { transform: translateY(-1px); }

        /* Labels & Titles */
        .label { display: block; color: #915eff; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 0.4rem; }
        h2 { font-size: 1.65rem; font-weight: 800; margin-bottom: 0.5rem; }
        .intro { color: #aaa6c3; font-size: 0.95rem; margin-bottom: 1.5rem; }

        /* Story Text */
        .story-text { color: #aaa6c3; font-size: 0.95rem; line-height: 1.75; margin-bottom: 0.75rem; }
        .story-text.reflection { color: #ccc; font-style: italic; margin-bottom: 1.5rem; }

        /* Images */
        .image-block { margin: 1.25rem 0; }
        .img-wrapper { border-radius: 0.6rem; overflow: hidden; background: #0d0a1a; border: 1px solid rgba(255,255,255,0.04); }
        .img-wrapper img { width: 100%; display: block; transition: opacity 0.3s; }
        .img-placeholder { background: #0d0a1a; border: 2px dashed rgba(145,94,255,0.25); border-radius: 0.6rem; padding: 2.5rem 1.5rem; text-align: center; min-height: 200px; display: flex; align-items: center; justify-content: center; }
        .img-placeholder p { color: #aaa6c3; font-size: 0.8rem; line-height: 1.5; }
        .caption { display: block; text-align: center; color: #777; font-size: 0.75rem; margin-top: 0.4rem; }
        .main-img, .full-img { width: 100%; }
        .medium-img { max-width: 650px; margin: 0 auto; }
        .image-block.featured { background: linear-gradient(135deg, rgba(145,94,255,0.08), rgba(0,206,168,0.04)); padding: 0.75rem; border-radius: 0.75rem; }

        /* Grid */
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin: 1.5rem 0; }
        @media (max-width: 700px) { .grid-2 { grid-template-columns: 1fr; } }

        /* Limitations */
        .limitations-box { background: #0d0a1a; border-radius: 0.6rem; padding: 1.25rem; border: 1px solid rgba(239,68,68,0.15); }
        .limitations-box h4 { color: #f87171; font-size: 0.85rem; margin-bottom: 0.875rem; }
        .limitation-item { display: flex; gap: 0.65rem; margin-bottom: 0.65rem; }
        .limitation-item svg { color: #f87171; font-size: 0.85rem; margin-top: 0.15rem; flex-shrink: 0; }
        .limitation-item strong { display: block; color: white; font-size: 0.8rem; }
        .limitation-item span { color: #aaa6c3; font-size: 0.75rem; }

        /* Tech Row */
        .tech-row { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; padding-top: 1.25rem; border-top: 1px solid rgba(255,255,255,0.04); }
        .tech-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .tag { background: rgba(145,94,255,0.1); border: 1px solid rgba(145,94,255,0.15); padding: 0.2rem 0.6rem; border-radius: 9999px; font-size: 0.7rem; color: #a78bfa; }

        /* Pivot */
        .pivot-section { background: linear-gradient(180deg, rgba(145,94,255,0.03), transparent); border-top: 1px solid rgba(145,94,255,0.08); }
        .pivot-content { max-width: 700px; }
        .pivot-content p { color: #aaa6c3; font-size: 0.95rem; line-height: 1.75; margin-bottom: 1rem; }
        .problem-box { background: rgba(239,68,68,0.06); border-left: 3px solid #f87171; padding: 1rem 1.25rem; margin: 1.25rem 0; border-radius: 0 0.5rem 0.5rem 0; }
        .problem-box h4 { color: #f87171; font-size: 0.8rem; margin-bottom: 0.4rem; text-transform: uppercase; letter-spacing: 0.05em; }
        .problem-box p { color: #ccc; margin: 0; }
        .question-box { background: linear-gradient(135deg, rgba(145,94,255,0.1), rgba(0,206,168,0.05)); border: 1px solid rgba(145,94,255,0.2); border-radius: 0.6rem; padding: 1.25rem; text-align: center; margin: 1.5rem 0; }
        .question-box span { color: #915eff; font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; }
        .question-box h3 { color: white; font-size: 1.2rem; margin-top: 0.5rem; line-height: 1.5; }
        .decision { color: white !important; font-weight: 500; }
        .kept { color: #00cea8 !important; font-size: 0.9rem; }

        /* Services */
        .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(270px, 1fr)); gap: 0.75rem; margin: 1.25rem 0; }
        .service-card { display: flex; gap: 0.7rem; padding: 0.875rem; background: #0d0a1a; border-radius: 0.5rem; border: 1px solid rgba(255,255,255,0.04); transition: border-color 0.2s; }
        .service-card:hover { border-color: rgba(145,94,255,0.2); }
        .service-icon { width: 36px; height: 36px; border-radius: 0.35rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .service-card strong { font-size: 0.85rem; }
        .service-card code { font-size: 0.65rem; color: #915eff; margin-left: 0.4rem; }
        .service-card p { color: #aaa6c3; font-size: 0.75rem; margin-top: 0.15rem; }

        /* Note Box */
        .note-box { background: rgba(245,158,11,0.08); border: 1px solid rgba(245,158,11,0.2); border-radius: 0.5rem; padding: 0.875rem 1rem; margin: 1.25rem 0; font-size: 0.85rem; color: #fbbf24; }
        .note-box strong { color: #fcd34d; }

        /* Principles */
        .principles { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .principle { background: rgba(0,206,168,0.08); border: 1px solid rgba(0,206,168,0.15); padding: 0.3rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; color: #00cea8; }

        /* Built Sections */
        .built-section { margin-top: 2.5rem; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.04); }
        .built-section:first-of-type { border-top: none; margin-top: 1.5rem; padding-top: 0; }
        .built-section h3 { font-size: 1.15rem; margin-bottom: 0.35rem; }
        .built-section > p { color: #aaa6c3; font-size: 0.9rem; margin-bottom: 1rem; }
        .built-images { display: grid; grid-1; gap: 0.875rem; }
        .highlights { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 1rem; }
        .highlight { background: rgba(145,94,255,0.08); padding: 0.25rem 0.65rem; border-radius: 0.3rem; font-size: 0.75rem; color: #a78bfa; }

        /* Carousel */
        .carousel { margin: 1rem 0; }
        .carousel-container { position: relative; overflow: hidden; border-radius: 0.6rem; background: #0d0a1a; border: 1px solid rgba(255,255,255,0.04); }
        .carousel-track { display: flex; }
        .carousel-slide { flex-shrink: 0; width: 100%; }
        .carousel-slide .img-wrapper, .carousel-slide .img-placeholder { border-radius: 0; border: none; }
        .carousel-btn { position: absolute; top: 50%; transform: translateY(-50%); width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.9); color: #050816; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; border: none; z-index: 10; }
        .carousel-btn:hover { background: white; transform: translateY(-50%) scale(1.1); }
        .carousel-btn.disabled { opacity: 0.3; cursor: not-allowed; }
        .carousel-btn.disabled:hover { transform: translateY(-50%); }
        .carousel-btn.prev { left: 0.75rem; }
        .carousel-btn.next { right: 0.75rem; }
        .carousel-title { position: absolute; bottom: 0; left: 0; right: 0; padding: 0.75rem 1rem; background: linear-gradient(transparent, rgba(0,0,0,0.8)); font-size: 0.85rem; font-weight: 500; }
        .carousel-dots { display: flex; justify-content: center; gap: 0.4rem; margin-top: 0.75rem; }
        .carousel-dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.3); border: none; cursor: pointer; transition: all 0.2s; }
        .carousel-dot.active { width: 24px; border-radius: 4px; background: #915eff; }

        /* Endpoints Table */
        .endpoints-section { margin: 1.25rem 0; background: #0d0a1a; border-radius: 0.6rem; border: 1px solid rgba(255,255,255,0.04); overflow: hidden; }
        .endpoints-header { padding: 0.75rem 1rem; background: rgba(145,94,255,0.08); display: flex; justify-content: space-between; align-items: center; }
        .endpoints-count { font-size: 0.75rem; color: #915eff; font-weight: 600; }
        .endpoints-table { padding: 0.5rem; }
        .endpoint-row { display: grid; grid-template-columns: 60px 1fr 1.5fr; gap: 0.75rem; padding: 0.5rem 0.75rem; border-radius: 0.3rem; align-items: center; }
        .endpoint-row:hover { background: rgba(255,255,255,0.02); }
        .endpoint-method { font-size: 0.65rem; font-weight: 700; padding: 0.2rem 0.5rem; border-radius: 0.25rem; text-align: center; }
        .endpoint-path { font-size: 0.8rem; color: #aaa6c3; }
        .endpoint-desc { font-size: 0.75rem; color: #666; }
        .endpoints-toggle { width: 100%; padding: 0.75rem; background: transparent; border: none; border-top: 1px solid rgba(255,255,255,0.04); color: #915eff; font-size: 0.8rem; cursor: pointer; transition: background 0.2s; }
        .endpoints-toggle:hover { background: rgba(145,94,255,0.05); }

        @media (max-width: 600px) {
          .endpoint-row { grid-template-columns: 50px 1fr; }
          .endpoint-desc { display: none; }
        }

        /* What's Next */
        .next-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; }
        .next-card { display: flex; gap: 0.875rem; padding: 1.1rem; background: #0d0a1a; border-radius: 0.6rem; border: 1px solid rgba(255,255,255,0.04); }
        .next-icon { width: 40px; height: 40px; background: rgba(145,94,255,0.1); border-radius: 0.4rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .next-icon svg { color: #915eff; }
        .next-card strong { font-size: 0.9rem; }
        .next-card .status { display: inline-block; margin-left: 0.5rem; font-size: 0.65rem; padding: 0.15rem 0.5rem; border-radius: 9999px; text-transform: uppercase; font-weight: 600; }
        .status.planned { background: rgba(59,130,246,0.15); color: #60a5fa; }
        .status.learning { background: rgba(168,85,247,0.15); color: #c084fc; }
        .next-card p { color: #aaa6c3; font-size: 0.8rem; margin-top: 0.25rem; }

        /* Demo */
        .demo-link { color: #915eff; font-size: 0.9rem; display: inline-flex; align-items: center; gap: 0.4rem; transition: color 0.2s; }
        .demo-link:hover { color: #a78bfa; }

        /* Comparison */
        .comparison-table { background: #0d0a1a; border-radius: 0.6rem; overflow: hidden; border: 1px solid rgba(255,255,255,0.04); max-width: 550px; margin: 1.5rem auto 0; }
        .table-head, .table-row { display: grid; grid-template-columns: 1.3fr 1fr 1fr; padding: 0.7rem 1rem; }
        .table-head { background: rgba(145,94,255,0.08); font-weight: 600; font-size: 0.75rem; color: #915eff; }
        .table-row { border-top: 1px solid rgba(255,255,255,0.03); font-size: 0.8rem; }
        .aspect { color: white; }
        .v1 { color: #777; }
        .v2 { color: #00cea8; }

        /* CTA */
        .cta-section { text-align: center; padding: 4rem 1.5rem; }
        .cta-section h2 { margin-bottom: 1.5rem; }
        .cta-btns { display: flex; flex-wrap: wrap; gap: 0.65rem; justify-content: center; }
        .cta-btn { display: flex; flex-direction: column; align-items: center; padding: 1rem 1.35rem; background: #0d0a1a; border: 1px solid rgba(255,255,255,0.06); border-radius: 0.5rem; min-width: 140px; transition: all 0.2s; }
        .cta-btn.primary { background: #915eff; border-color: #915eff; }
        .cta-btn:hover { transform: translateY(-2px); border-color: rgba(145,94,255,0.4); }
        .cta-btn svg { font-size: 1.15rem; margin-bottom: 0.3rem; }
        .cta-btn span { font-weight: 600; font-size: 0.8rem; }
        .cta-btn small { font-size: 0.65rem; color: rgba(255,255,255,0.5); margin-top: 0.1rem; }
      `}</style>
    </div>
  );
};

export default ParkFlowProject;
