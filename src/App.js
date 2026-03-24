import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const experiences = [
  {
    logo: "/amgen.png",
    org: "Amgen",
    role: "Boston University College of Engineering Senior Design",
    date: "Sept 2025 – Present",
    bullets: [
      "Collaborated as part of computational team to understand miRNA-siRNA crosstalk to optimize siRNA therapeutics.",
      "Created regulatory graph network to aid in understanding miRNA-siRNA crosstalk to guide future siRNA design and mitigate off-target effects.",
    ],
  },
  {
    logo: "/harvard.png",
    org: "Harvard Medical School Department of Biomedical Informatics",
    role: "Summer Research Intern",
    date: "Jun 2025 – Aug 2025",
    researchIndex: 1,
    bullets: [
      "Utilized unsupervised machine learning methods (anomaly detection) to identify and diagnose undiagnosed pediatric patients from over 1 million Inovalon medical claims data.",
      "Created pipeline in R to filter patients and create frequency matrix of patients and ICD9/10 codes; applied dimensionality reduction by converting ICD codes to phecodes.",
      "Discovered over 9 clusters of anomalous patients; created visualization media to understand cluster-driven phenotypes of anomalous patients.",
      "Presented findings to faculty and researchers from HMS DBMI in 15-minute presentation.",
    ],
  },
  {
    logo: "/bu.png",
    org: "Neurovascular Imaging Laboratory at Boston University",
    role: "Research Assistant",
    date: "Aug 2024 – Oct 2024",
    bullets: [
      "Constructed mouse visual cortex machine learning simulation using Allen Institute V1 model.",
      "Fine-tuned foundational modeling of cortical column through debugging algorithm and generated raster plots of neurons through command line prompts.",
      "Created various visual media on MATLAB Psychtoolbox to increase robustness and generalization of simulation.",
    ],
  },
  {
    logo: "/jax.png",
    org: "The Jackson Laboratory",
    role: "Summer Research Fellow",
    date: "Jun 2023 – Aug 2023",
    researchIndex: 0,
    bullets: [
      "Created pipeline on identifying transcriptomic signatures to mediate effect of genotype on phenotype in Alzheimer's disease using multivariate causal inferencing method on cognitively aging population (ROSMAP).",
      "Analyzed multi-omics data (genotype, transcriptome, phenotype) in R with high-dimensional mediation analysis to obtain scores of up and down-regulated genes of causal importance in Alzheimer's disease.",
      "Performed downstream analyses on ranked gene list such as gene enrichment analysis, gene ontology analysis, and drug repositioning to understand biological pathways and perturbagens relevant in Alzheimer's disease.",
      "Compiled research and functional enrichment analysis to understand biological themes represented in Alzheimer's disease and their causal influences from gene interactions.",
      "Presented findings to principal investigators and researchers at The Jackson Laboratory's 2023 Summer Student Program Symposium.",
    ],
  },
  {
    logo: "/bu.png",
    org: "McCall Lab at Boston University Department of Biology",
    role: "Undergraduate Researcher",
    date: "Oct 2022 – Jul 2024",
    researchIndex: 2,
    bullets: [
      "Studied cell clearance and death in Drosophila melanogaster oogenesis; organized all lab fruit fly lines and monitored sick strains weekly.",
      "Operated confocal microscopy, used immunohistochemistry and genotyping to analyze staining patterns.",
      "Investigated role of microtubules on V-ATPases membrane-trafficking in stretch follicle cells.",
    ],
  },
];

const researchProjects = [
  {
    title: "Identifying transcriptomic signatures that mediate the causal effect of genotype on Alzheimer's disease",
    description: "The combined effects of thousands of genetic polymorphisms account for Alzheimer's disease (AD) genetic risk. Most AD polymorphisms affect gene expression. Thus, the transcriptome, the set of all gene expression levels for every gene in the genome, is a major mediator between the genotype to phenotype. This study uses genotypes, transcriptomes, and clinical phenotypes to identify the transcriptomic signature that mediates the causal effect of genotype on AD. By utilizing a causal inference method known as high dimensional mediation analysis (HDMA) on the Religious Orders Study/Memory and Aging Project (ROSMAP) longitudinal cohort, the genotype, transcriptome, and phenotype data were reduced to single scores encoding genotype, transcriptome, and phenotype correlations, and produce a ranked gene list based on putative causal importance of each gene for AD. Analysis of the up- and down-regulated genes prevalent in AD through Gene Ontology (GO) and KEGG databases reveals findings such as up-regulated functions which include angiogenesis and immune responses while down-regulated functions of genes include synaptic activity. Furthermore, utilizing Clue.io to identify candidate drugs to suppress AD-pathology reveals a plausible list of therapeutic candidates, including targeted genes and compounds such as SMAD3, TM7SF2, and ABCB1, which counteract the transcriptomic signature identified and may block the devastating effects of AD related to inflammatory responses, Aβ-induced toxicity, and neuronal death.",
    skills: [
      "high-performance computing",
      "R programming",
      "high-dimensional mediation analysis",
      "multi-omics data analysis",
      "gene enrichment analysis",
      "drug repositioning",
    ],
    poster: "/JAX_NCRC_FinalPoster.png",
    posterCaption: "Presented at National Collegiate Research Conference 2026",
    publication: true,
  },
  {
    title: "Pilot study to identify undiagnosed patients utilizing anomaly detection methods on medical claims data",
    description: "[Add research description here]",
    skills: [
      "unsupervised machine learning",
      "anomaly detection",
      "R programming",
      "clustering",
      "dimensionality reduction",
      "EHR data analysis",
    ],
    poster: "/SIBMI_HMSposter.png",
    posterCaption: "Presented at the Boston University Society of Asian Scientists and Engineers Innovation Symposium 2026",
    publication: null,
  },
  {
    title: "Characterization of the interaction between microtubules and V-ATPases in nurse cell clearance during Drosophila melanogaster oogenesis",
    description: "[Add research description here]",
    skills: [
      "confocal microscopy",
      "immunohistochemistry",
      "fly husbandry and genotyping",
      "Drosophila melanogaster biology",
      "cell biology",
    ],
    poster: null,
    experiment: "/mccalllabexperiment.png",
    publication: null,
  },
];

function ResearchTab({ darkMode, openCards, setOpenCards }) {
  const [posterOpen, setPosterOpen] = useState(null);
  const isOpen = (i) => openCards.includes(i);
  const toggleCard = (i) =>
    setOpenCards((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );

  const cardBg = darkMode ? "#0f172a" : "#ffffff";
  const cardBorder = darkMode ? "#1e3a8a55" : "#1e3a8a22";
  const terminalBg = darkMode ? "#020617" : "#0f172a";
  const bodyColor = darkMode ? "#cbd5e1" : "#334155";

  const PublicationBlock = () => (
    <div
      className="rounded-xl p-4 border w-full"
      style={{ borderColor: cardBorder, background: darkMode ? "#0a1628" : "#eef2ff" }}
    >
      <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-center" style={{ color: "#1e3a8a" }}>
        📄 Publication
      </p>
      <p className="leading-relaxed text-center" style={{ color: bodyColor }}>
        <strong>Kaur S</strong>; Tyler, A. L.; Durante, G. L.; Cary, G. A.; Carter, G. W.;
        Mahoney, J. M. Identifying transcriptomic signatures that mediate the causal effect
        of genotype on Alzheimer's disease. <em>Frontiers in Neuroscience</em> 2026, 20.{" "}
        <a
          href="https://doi.org/10.3389/fnins.2026.1716828"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:opacity-80 transition break-all"
          style={{ color: "#1e3a8a" }}
        >
          https://doi.org/10.3389/fnins.2026.1716828
        </a>
      </p>
    </div>
  );

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-px" style={{ background: darkMode ? "linear-gradient(to right, transparent, #3b5fc0)" : "linear-gradient(to right, transparent, #1e3a8a)" }} />
        <h2 className="text-2xl font-semibold text-[#1e3a8a] whitespace-nowrap">Research</h2>
        <div className="flex-1 h-px" style={{ background: darkMode ? "linear-gradient(to left, transparent, #3b5fc0)" : "linear-gradient(to left, transparent, #1e3a8a)" }} />
      </div>

      {/* Poster lightbox */}
      {posterOpen !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ background: "rgba(0,0,0,0.88)" }}
          onClick={() => setPosterOpen(null)}
        >
          <img
            src={process.env.PUBLIC_URL + (
              typeof posterOpen === "string" && posterOpen.startsWith("exp-")
                ? researchProjects[parseInt(posterOpen.split("-")[1])].experiment
                : researchProjects[posterOpen].poster
            )}
            alt="Research image"
            className="max-w-full max-h-full rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-5 right-7 text-white text-4xl font-bold opacity-70 hover:opacity-100 transition"
            onClick={() => setPosterOpen(null)}
          >
            ×
          </button>
        </motion.div>
      )}

      <div className="space-y-6">
        {researchProjects.map((proj, i) => (
          <motion.div
            key={i}
            id={`research-card-${i}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.4 }}
            className="rounded-2xl border overflow-hidden shadow-sm"
            style={{ borderColor: cardBorder, background: cardBg }}
          >
            {/* Clickable header */}
            <div
              className="flex items-start gap-4 px-6 py-5 cursor-pointer select-none"
              onClick={() => toggleCard(i)}
            >
              <span
                className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-white mt-0.5"
                style={{ background: "#1e3a8a" }}
              >
                {i + 1}
              </span>
              <p className="flex-1 font-semibold text-base leading-snug text-[#1e3a8a]">
                {proj.title}
              </p>
              <span className="shrink-0 text-sm font-bold mt-0.5" style={{ color: "#92400e" }}>
                {isOpen(i) ? "▲" : "▼"}
              </span>
            </div>

            {/* Expandable body */}
            <motion.div
              initial={false}
              animate={isOpen(i) ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <div
                className="px-6 pb-6 flex flex-col items-center space-y-5 border-t text-sm leading-relaxed"
                style={{ borderColor: cardBorder, color: bodyColor }}
              >
                {/* Description — centered */}
                <p className="pt-4 text-left max-w-2xl">{proj.description}</p>

                {/* Publication FIRST for project 0 (JAX) */}
                {i === 0 && proj.publication && <PublicationBlock />}

                {/* Poster — centered */}
                {proj.poster && (
                  <div className="flex flex-col items-center">
                    <p className="text-xs font-semibold uppercase tracking-widest mb-2 text-center" style={{ color: "#1e3a8a" }}>
                      Research Poster
                    </p>
                    <img
                      src={process.env.PUBLIC_URL + proj.poster}
                      alt="Research poster"
                      className="w-full max-w-sm rounded-lg border cursor-zoom-in hover:opacity-90 transition shadow-sm"
                      style={{ borderColor: cardBorder }}
                      onClick={() => setPosterOpen(i)}
                    />
                    <p className="text-xs opacity-40 mt-1">Click to enlarge</p>
                    {proj.posterCaption && (
                      <p className="text-xs text-center mt-1 italic max-w-xs" style={{ color: darkMode ? "#93c5fd" : "#1e3a8a", opacity: 0.8 }}>
                        {proj.posterCaption}
                      </p>
                    )}
                  </div>
                )}

                {/* Experiment image */}
                {proj.experiment && (
                  <div className="flex flex-col items-center">
                    <p className="text-xs font-semibold uppercase tracking-widest mb-2 text-center" style={{ color: "#1e3a8a" }}>
                      Featured Experiments
                    </p>
                    <img
                      src={process.env.PUBLIC_URL + proj.experiment}
                      alt="Experiment"
                      className="w-full max-w-sm rounded-lg border cursor-zoom-in hover:opacity-90 transition shadow-sm"
                      style={{ borderColor: cardBorder }}
                      onClick={() => setPosterOpen(`exp-${i}`)}
                    />
                    <p className="text-xs opacity-40 mt-1">Click to enlarge</p>
                  </div>
                )}

                {/* Terminal skills block — inside expandable */}
                <div className="w-full">
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2 text-center" style={{ color: "#1e3a8a" }}>
                    Skills Used
                  </p>
                  <div
                    className="rounded-xl px-4 py-3 font-mono text-sm space-y-1"
                    style={{ background: terminalBg }}
                  >
                    {proj.skills.map((skill, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <span className="font-bold select-none" style={{ color: "#92400e" }}>{">"}</span>
                        <span style={{ color: "#93c5fd" }}>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function HobbiesTab({ darkMode }) {
  const images = [
    { src: "/circadiandrift.png",    name: "Circadian Drift (Spring 2026 Issue)" },
    { src: "/fourgetthepicture.png", name: "four, get the picture" },
    { src: "/mothertongue.png",      name: "Mother Tongue" },
    { src: "/sagaofstars.png",       name: "Saga of Stars (Fall 2025 Issue)" },
  ];

  const n = images.length; // 4

  // Triple the array → indices 0-11.
  // rawIdx lives on a continuous number line; after each spring settles we
  // silently teleport back to the middle set [n .. 2n-1] so every image
  // always has a visible neighbor on both sides.
  const track = [...images, ...images, ...images];

  const [rawIdx,    setRawIdx]    = useState(n);     // start at middle-set position 0
  const [isInstant, setIsInstant] = useState(false); // skip spring for the teleport frame
  const [lightbox,  setLightbox]  = useState(false);

  // Ref so onAnimationComplete never reads a stale rawIdx
  const rawIdxRef = React.useRef(n);
  const setIdx = React.useCallback((v) => {
    setRawIdx((prev) => {
      const next = typeof v === "function" ? v(prev) : v;
      rawIdxRef.current = next;
      return next;
    });
  }, []);

  const displayIdx = rawIdx % n; // which of the 4 logical images is active

  // Layout constants (px)
  const CARD_W = 300;
  const CARD_H = 360;
  const PEEK   = 86;
  const GAP    = 10;
  const WRAP_W = CARD_W + PEEK * 2; // 472

  // Centers card[rawIdx] inside WRAP_W
  const trackX = PEEK - rawIdx * (CARD_W + GAP);

  const goNext = React.useCallback(() => { setIsInstant(false); setIdx((r) => r + 1); }, [setIdx]);
  const goPrev = React.useCallback(() => { setIsInstant(false); setIdx((r) => r - 1); }, [setIdx]);
  const goTo   = React.useCallback((di) => { setIsInstant(false); setIdx(n + di); }, [setIdx, n]);

  // Auto-rotate every 7 s — pauses while lightbox is open
  React.useEffect(() => {
    if (lightbox) return;
    const t = setInterval(goNext, 7000);
    return () => clearInterval(t);
  }, [lightbox, goNext]);

  // After spring settles: silently warp back to middle set if we drifted out
  const handleAnimComplete = React.useCallback(() => {
    const r = rawIdxRef.current;
    if (r < n) {
      setIsInstant(true);
      setIdx(r + n);
    } else if (r >= 2 * n) {
      setIsInstant(true);
      setIdx(r - n);
    }
  }, [n, setIdx]);

  // Re-enable spring on the very next frame after the instant jump renders
  React.useEffect(() => {
    if (!isInstant) return;
    const id = requestAnimationFrame(() => setIsInstant(false));
    return () => cancelAnimationFrame(id);
  }, [isInstant]);

  const bg         = darkMode ? "#0f172a" : "#f5f5f4";
  const cardBg     = darkMode ? "#0a1628" : "#eef2ff";
  const cardBorder = darkMode ? "#1e3a8a55" : "#1e3a8a22";
  const bodyColor  = darkMode ? "#cbd5e1"   : "#334155";

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-px" style={{ background: darkMode ? "linear-gradient(to right, transparent, #3b5fc0)" : "linear-gradient(to right, transparent, #1e3a8a)" }} />
        <h2 className="text-2xl font-semibold text-[#1e3a8a] whitespace-nowrap">Hobbies</h2>
        <div className="flex-1 h-px" style={{ background: darkMode ? "linear-gradient(to left, transparent, #3b5fc0)" : "linear-gradient(to left, transparent, #1e3a8a)" }} />
      </div>

      {/* Text area — fill in later */}
      <p className="mb-8 leading-relaxed w-full" style={{ color: bodyColor }}>
        I enjoy writing, especially poetry, where I get to experiment with rhyme schemes, alliteration, and different narrative styles. 
        I love playing with language to create rhythm, emotion, and imagery, and I’m always exploring new ways to shape ideas into meaningful stories on the page.
        Currently, I serve as the Vice-President and Associate Editor of The Beacon at Boston University, the oldest creative works literary magazine on campus.
        During my time at The Beacon as an editor, I have had two of my pieces published, "four, get the picture" and "Saga of Stars" (see below!).
        Outside of writing, I enjoy rollerblading, science fiction movies, and reading medical anthropological books.
      </p>

      {/* Carousel */}
      <div className="flex flex-col items-center">
        <div className="relative" style={{ width: `${WRAP_W}px`, maxWidth: "100%" }}>

          {/* Clipping window */}
          <div style={{ overflow: "hidden", borderRadius: "20px", position: "relative", height: `${CARD_H}px` }}>

            {/* Sliding track — all 12 cloned cards */}
            <motion.div
              style={{ display: "flex", gap: `${GAP}px`, position: "absolute", top: 0, left: 0 }}
              animate={{ x: trackX }}
              transition={isInstant ? { duration: 0 } : { type: "spring", stiffness: 310, damping: 36 }}
              onAnimationComplete={handleAnimComplete}
            >
              {track.map((img, i) => (
                <motion.div
                  key={i}
                  animate={{
                    opacity: i === rawIdx ? 1 : 0.42,
                    scale:   i === rawIdx ? 1 : 0.91,
                  }}
                  transition={{ duration: 0.32 }}
                  style={{
                    width: CARD_W, height: CARD_H, flexShrink: 0,
                    borderRadius: "16px", overflow: "hidden",
                    border: `2px solid ${i === rawIdx ? "#1e3a8a" : cardBorder}`,
                    background: cardBg,
                    cursor: i === rawIdx ? "zoom-in" : "pointer",
                  }}
                  onClick={() => {
                    if      (i === rawIdx)     setLightbox(true);
                    else if (i === rawIdx - 1) goPrev();
                    else if (i === rawIdx + 1) goNext();
                  }}
                >
                  <img
                    src={process.env.PUBLIC_URL + img.src}
                    alt={img.name}
                    style={{ width: "100%", height: "100%", objectFit: "contain", padding: "12px", pointerEvents: "none" }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Edge fade masks */}
            <div style={{
              position: "absolute", inset: 0, pointerEvents: "none",
              background: `linear-gradient(to right, ${bg} 0%, transparent ${PEEK - 12}px, transparent calc(100% - ${PEEK - 12}px), ${bg} 100%)`,
            }} />

            {/* Click-to-enlarge badge */}
            <div style={{
              position: "absolute", bottom: 10, right: 10,
              background: "#1e3a8a", color: "white",
              fontSize: "11px", fontWeight: 600,
              padding: "3px 8px", borderRadius: "8px",
              opacity: 0.65, pointerEvents: "none",
            }}>click to enlarge</div>
          </div>

          {/* Prev arrow */}
          <button onClick={goPrev} style={{
            position: "absolute", left: "-20px", top: "50%", transform: "translateY(-50%)",
            width: "38px", height: "38px", borderRadius: "50%",
            background: "#1e3a8a", color: "white", fontSize: "22px", fontWeight: "bold",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.22)", zIndex: 10, transition: "transform 0.15s",
          }}
            onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-50%) scale(1.12)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "translateY(-50%) scale(1)")}
          >‹</button>

          {/* Next arrow */}
          <button onClick={goNext} style={{
            position: "absolute", right: "-20px", top: "50%", transform: "translateY(-50%)",
            width: "38px", height: "38px", borderRadius: "50%",
            background: "#1e3a8a", color: "white", fontSize: "22px", fontWeight: "bold",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.22)", zIndex: 10, transition: "transform 0.15s",
          }}
            onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-50%) scale(1.12)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "translateY(-50%) scale(1)")}
          >›</button>
        </div>

        {/* Image name */}
        <p className="mt-4 text-sm font-semibold tracking-wide" style={{ color: "#92400e" }}>
          {images[displayIdx].name}
        </p>

        {/* Dot indicators */}
        <div className="flex gap-3 mt-3">
          {images.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} className="rounded-full transition-all duration-300"
              style={{
                width:  i === displayIdx ? "24px" : "10px",
                height: "10px",
                background: i === displayIdx ? "#92400e" : (darkMode ? "#1e3a8a55" : "#1e3a8a33"),
              }}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ background: "rgba(0,0,0,0.92)" }}
            onClick={() => setLightbox(false)}
          >
            <div className="relative flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={rawIdx}
                  initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.28 }}
                  src={process.env.PUBLIC_URL + images[displayIdx].src}
                  alt={images[displayIdx].name}
                  className="rounded-xl shadow-2xl object-contain"
                  style={{ maxWidth: "90vw", maxHeight: "82vh" }}
                />
              </AnimatePresence>
              <button onClick={goPrev} className="absolute -left-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-white text-3xl font-bold transition hover:scale-110" style={{ background: "rgba(30,58,138,0.85)" }}>‹</button>
              <button onClick={goNext} className="absolute -right-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-white text-3xl font-bold transition hover:scale-110" style={{ background: "rgba(30,58,138,0.85)" }}>›</button>
            </div>
            <p className="absolute bottom-8 text-sm font-semibold tracking-widest" style={{ color: "#f5f5f4", opacity: 0.75 }}>
              {images[displayIdx].name}
            </p>
            <button className="absolute top-5 right-7 text-white text-4xl font-bold opacity-60 hover:opacity-100 transition" onClick={() => setLightbox(false)}>×</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function NetworkMap({ darkMode, highlightedNodes = [] }) {
  const [hoveredNode, setHoveredNode] = React.useState(null);

  const W = 860, H = 500;
  const cx = 430, cy = 250;
  const NODE_R = 50;

  const nodeData = [
    { angle: 0,   label: ["Biomedical", "Engineering"],  tooltip: ["Designing solutions at the", "intersection of biology", "and engineering"] },
    { angle: 60,  label: ["Machine", "Learning"],         tooltip: ["Applying methods to", "biomedical and clinical", "data problems"] },
    { angle: 120, label: ["Genomics &", "Multi-omics"],   tooltip: ["Analyzing transcriptomic and", "multi-omics data for", "disease insights"] },
    { angle: 180, label: ["Clinical", "Informatics"],     tooltip: ["Mining medical data", "to improve ", "healthcare delivery"] },
    { angle: 240, label: ["Systems", "Biology"],   tooltip: ["Complex biological circuits", "and interactions", "for design and dicovery"] },
    { angle: 300, label: ["Computational", "Biology"],    tooltip: ["Building pipelines for", "high-dimensional", "biological data"] },
  ].map((n, i) => {
    const rad = (n.angle * Math.PI) / 180;
    const x = cx + 245 * Math.sin(rad);
    const y = cy - 190 * Math.cos(rad);
    // Curved line control point: offset midpoint perpendicularly
    const mx = (cx + x) / 2, my = (cy + y) / 2;
    const dx = x - cx, dy = y - cy;
    const len = Math.sqrt(dx * dx + dy * dy);
    const offset = 35 * (i % 2 === 0 ? 1 : -1);
    return { ...n, i, x, y, cpx: mx + (-dy / len) * offset, cpy: my + (dx / len) * offset };
  });

  const tooltip = hoveredNode !== null ? nodeData[hoveredNode] : null;
  const TW = 180, TH_LINE = 20, T_PAD = 12;

  return (
    <div className="w-full flex justify-center mt-4 mb-4" style={{ userSelect: "none" }}>
      <svg
        width="100%"
        viewBox={`-10 0 ${W + 20} ${H}`}
        style={{ maxWidth: "980px", overflow: "visible" }}
      >
        <defs>
          <clipPath id="headshot-clip">
            <circle cx={cx} cy={cy} r="62" />
          </clipPath>
        </defs>

        {/* Curved dashed connection lines */}
        {nodeData.map((n) => (
          <motion.path
            key={`l${n.i}`}
            d={`M ${cx} ${cy} Q ${n.cpx} ${n.cpy} ${n.x} ${n.y}`}
            stroke={highlightedNodes.includes(n.i) ? (darkMode ? "#3b5fc0bb" : "#1e3a8a88") : (darkMode ? "#3b5fc066" : "#1e3a8a33")}
            strokeWidth={highlightedNodes.includes(n.i) ? "2.5" : "1.5"}
            strokeDasharray="5 5"
            fill="none"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ delay: 0.7 + n.i * 0.15, duration: 0.6, ease: "easeOut" }}
          />
        ))}

        {/* Satellite nodes */}
        {nodeData.map((n) => (
          <motion.g
            key={`sg${n.i}`}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0 + n.i * 0.18, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
            onMouseEnter={() => setHoveredNode(n.i)}
            onMouseLeave={() => setHoveredNode(null)}
          >
            {/* Floating animation */}
            <motion.g
              animate={{
                x: [0, n.i % 2 === 0 ? 4 : -4, 0, n.i % 2 === 0 ? -4 : 4, 0],
                y: [0, -(4 + (n.i % 3)), 0, 4 + (n.i % 2), 0],
              }}
              transition={{ duration: 4 + n.i * 0.7, repeat: Infinity, ease: "easeInOut", delay: n.i * 0.4 }}
            >
              <motion.circle
                cx={n.x} cy={n.y}
                animate={{ r: (hoveredNode === n.i || highlightedNodes.includes(n.i)) ? NODE_R * 1.18 : NODE_R }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                fill="#92400e" opacity="0.92"
                style={{
                  cursor: "pointer",
                  filter: (hoveredNode === n.i || highlightedNodes.includes(n.i))
                    ? "drop-shadow(0 0 10px rgba(146,64,14,0.75))"
                    : "none",
                }}
              />
              {n.label.map((line, j) => (
                <text
                  key={j}
                  x={n.x}
                  y={n.y + (j - (n.label.length - 1) / 2) * 14}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="white"
                  fontSize="11"
                  fontWeight="600"
                  fontFamily="Georgia, serif"
                  style={{ pointerEvents: "none" }}
                >
                  {line}
                </text>
              ))}
            </motion.g>
          </motion.g>
        ))}

        {/* Center node — appears first, no bounce */}
        <motion.g
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        >
          <motion.circle
            cx={cx} cy={cy} r="68"
            fill="none"
            stroke="#1e3a8a"
            strokeWidth="1.5"
            animate={{ r: [68, 76, 68], opacity: [0.3, 0.08, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <circle cx={cx} cy={cy} r="62" fill="#1e3a8a" />
          <image
            href={process.env.PUBLIC_URL + "/headshot.png"}
            x={cx - 62} y={cy - 62}
            width="124" height="124"
            clipPath="url(#headshot-clip)"
            preserveAspectRatio="xMidYMid slice"
          />
          <circle cx={cx} cy={cy} r="62" fill="none" stroke="#1e3a8a" strokeWidth="2.5" />
        </motion.g>

        {/* Speech bubble tooltip — pushed radially outward */}
        {tooltip && (() => {
          const n = tooltip;
          const lines = n.tooltip;
          const th = 3 * TH_LINE + T_PAD * 2;
          const CLEARANCE = 14;

          const onRight = n.x >= cx;
          const rx = onRight ? n.x + NODE_R + CLEARANCE : n.x - NODE_R - CLEARANCE - TW;
          const ry = Math.max(4, Math.min(H - th - 4, n.y - th / 2));

          const arrowTipX  = onRight ? n.x + NODE_R + 3 : n.x - NODE_R - 3;
          const arrowBaseX = onRight ? rx               : rx + TW;
          const arrowY = Math.max(ry + 6, Math.min(ry + th - 6, n.y));

          const fill     = darkMode ? "rgba(15,23,42,0.90)" : "rgba(255,255,255,0.94)";
          const stroke   = darkMode ? "#3b5fc0"             : "#1e3a8a";
          const textFill = darkMode ? "#e2e8f0"             : "#1e293b";

          return (
            <g
              onMouseEnter={() => setHoveredNode(n.i)}
              onMouseLeave={() => setHoveredNode(null)}
              style={{ cursor: "default" }}
            >
              <polygon
                points={`${arrowTipX},${arrowY} ${arrowBaseX},${arrowY - 6} ${arrowBaseX},${arrowY + 6}`}
                fill={fill} stroke={stroke} strokeWidth="1" strokeLinejoin="round"
              />
              <rect x={rx} y={ry} width={TW} height={th} rx={6} fill={fill} stroke={stroke} strokeWidth="1" />
              {lines.map((line, j) => (
                <text
                  key={j}
                  x={rx + TW / 2}
                  y={ry + T_PAD + j * TH_LINE + 7}
                  textAnchor="middle"
                  fill={textFill}
                  fontSize="13"
                  fontFamily="Georgia, serif"
                >
                  {line}
                </text>
              ))}
            </g>
          );
        })()}
      </svg>
    </div>
  );
}

function ExperienceTimeline({ darkMode, setTab }) {
  const [open, setOpen] = useState(null);

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-px" style={{ background: darkMode ? "linear-gradient(to right, transparent, #3b5fc0)" : "linear-gradient(to right, transparent, #1e3a8a)" }} />
        <h2 className="text-2xl font-semibold text-[#1e3a8a] whitespace-nowrap">Experience</h2>
        <div className="flex-1 h-px" style={{ background: darkMode ? "linear-gradient(to left, transparent, #3b5fc0)" : "linear-gradient(to left, transparent, #1e3a8a)" }} />
      </div>
      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-8 top-0 bottom-0 w-0.5"
          style={{ background: darkMode ? "#1e3a8a55" : "#1e3a8a33" }}
        />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="relative flex items-start gap-6 pl-20"
            >
              {/* Logo bubble on the line */}
              <div
                className="absolute left-0 w-16 h-16 rounded-full flex items-center justify-center shadow-md border-2 cursor-pointer"
                style={{
                  background: darkMode ? "#0f172a" : "#ffffff",
                  borderColor: "#1e3a8a",
                  zIndex: 10,
                }}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <img
                  src={process.env.PUBLIC_URL + exp.logo}
                  alt={exp.org}
                  className="w-10 h-10 object-contain rounded-full"
                />
              </div>

              {/* Card */}
              <div
                className="flex-1 rounded-2xl overflow-hidden shadow-sm border cursor-pointer select-none"
                style={{
                  borderColor: darkMode ? "#1e3a8a55" : "#1e3a8a22",
                  background: darkMode ? "#0f172a" : "#ffffff",
                }}
                onClick={() => setOpen(open === i ? null : i)}
              >
                {/* Header row */}
                <div className="flex items-center justify-between px-5 py-4 gap-4">
                  <div>
                    <p className="font-semibold text-base text-[#1e3a8a]">{exp.org}</p>
                    <p className="text-sm font-medium" style={{ color: "#92400e" }}>{exp.role}</p>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <span
                      className="text-xs font-medium px-3 py-1 rounded-full"
                      style={{
                        background: darkMode ? "#1e3a8a22" : "#1e3a8a11",
                        color: darkMode ? "#93c5fd" : "#1e3a8a",
                      }}
                    >
                      {exp.date}
                    </span>
                    <span className="text-base font-bold" style={{ color: "#92400e" }}>
                      {open === i ? "▲" : "▼"}
                    </span>
                  </div>
                </div>

                {/* Expandable description */}
                <motion.div
                  initial={false}
                  animate={
                    open === i
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <div
                    className="px-5 pb-5 text-sm leading-relaxed border-t"
                    style={{
                      borderColor: darkMode ? "#1e3a8a44" : "#1e3a8a22",
                      color: darkMode ? "#cbd5e1" : "#334155",
                    }}
                  >
                    <ul className="pt-3 space-y-2 list-disc ml-4">
                      {exp.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                    {exp.researchIndex !== undefined && (
                      <div className="mt-3 pt-3 border-t" style={{ borderColor: darkMode ? "#1e3a8a44" : "#1e3a8a22" }}>
                        <button
                          className="text-xs font-semibold px-3 py-1.5 rounded-lg border transition hover:opacity-75"
                          style={{ color: "#1e3a8a", borderColor: "#1e3a8a", background: darkMode ? "#1e3a8a22" : "#eef2ff" }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setTab("research");
                            const idx = exp.researchIndex;
                            setTimeout(() => {
                              const el = document.getElementById(`research-card-${idx}`);
                              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                            }, 150);
                          }}
                        >
                          🔬 RESEARCH →
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [tab, setTab] = useState("about");
  const [researchOpen, setResearchOpen] = useState([0, 1, 2]);
  const [highlightedNodes, setHighlightedNodes] = useState([]);

  const tabs = {
    about: (
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px" style={{ background: darkMode ? "linear-gradient(to right, transparent, #3b5fc0)" : "linear-gradient(to right, transparent, #1e3a8a)" }} />
          <h2 className="text-2xl font-semibold text-[#1e3a8a] whitespace-nowrap">About Me</h2>
          <div className="flex-1 h-px" style={{ background: darkMode ? "linear-gradient(to left, transparent, #3b5fc0)" : "linear-gradient(to left, transparent, #1e3a8a)" }} />
        </div>
        <div className="flex gap-0 items-center justify-center">
          {/* Left: bio text */}
          <div className="w-[300px] shrink-0" style={{ color: darkMode ? "#cbd5e1" : "#334155" }}>
            <p className="leading-relaxed">
              Hi! I'm Simran Kaur, a Biomedical Engineering student at Boston University concentrating in
              Machine Learning. I'm passionate about applying{" "}
              <span
                onMouseEnter={() => setHighlightedNodes([5, 4, 2])}
                onMouseLeave={() => setHighlightedNodes([])}
                style={{ color: darkMode ? "#93c5fd" : "#1e3a8a", borderBottom: `1px dotted ${darkMode ? "#93c5fd" : "#1e3a8a"}`, paddingBottom: "1px", cursor: "default" }}
              >computational methods to biological systems</span>, particularly
              in areas where data-driven insights can lead to{" "}
              <span
                onMouseEnter={() => setHighlightedNodes([3])}
                onMouseLeave={() => setHighlightedNodes([])}
                style={{ color: darkMode ? "#93c5fd" : "#1e3a8a", borderBottom: `1px dotted ${darkMode ? "#93c5fd" : "#1e3a8a"}`, paddingBottom: "1px", cursor: "default" }}
              >translational impact</span>. My interests include{" "}
              <span
                onMouseEnter={() => setHighlightedNodes([1])}
                onMouseLeave={() => setHighlightedNodes([])}
                style={{ color: darkMode ? "#93c5fd" : "#1e3a8a", borderBottom: `1px dotted ${darkMode ? "#93c5fd" : "#1e3a8a"}`, paddingBottom: "1px", cursor: "default" }}
              >developing predictive models</span>,{" "}
              <span
                onMouseEnter={() => setHighlightedNodes([4, 2])}
                onMouseLeave={() => setHighlightedNodes([])}
                style={{ color: darkMode ? "#93c5fd" : "#1e3a8a", borderBottom: `1px dotted ${darkMode ? "#93c5fd" : "#1e3a8a"}`, paddingBottom: "1px", cursor: "default" }}
              >exploring disease-causing variants</span>{" "}
              , and{" "}
              <span
                onMouseEnter={() => setHighlightedNodes([5, 1, 3, 2])}
                onMouseLeave={() => setHighlightedNodes([])}
                style={{ color: darkMode ? "#93c5fd" : "#1e3a8a", borderBottom: `1px dotted ${darkMode ? "#93c5fd" : "#1e3a8a"}`, paddingBottom: "1px", cursor: "default" }}
              >leveraging machine learning to better understand complex physiological processes</span>.
              I'm excited by interdisciplinary projects that{" "}
              <span
                onMouseEnter={() => setHighlightedNodes([0, 1, 2, 3, 4, 5])}
                onMouseLeave={() => setHighlightedNodes([])}
                style={{ color: darkMode ? "#93c5fd" : "#1e3a8a", borderBottom: `1px dotted ${darkMode ? "#93c5fd" : "#1e3a8a"}`, paddingBottom: "1px", cursor: "default" }}
              >blend engineering principles, biological mechanisms, and computational biology methodologies</span>{" "}
              to solve meaningful real-world problems.
            </p>
          </div>
          {/* Right: network map */}
          <div className="w-[620px] shrink-0">
            <NetworkMap darkMode={darkMode} highlightedNodes={highlightedNodes} />
          </div>
        </div>
      </div>
    ),

    cv: ( 
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px" style={{ background: darkMode ? "linear-gradient(to right, transparent, #3b5fc0)" : "linear-gradient(to right, transparent, #1e3a8a)" }} />
          <h2 className="text-2xl font-semibold text-[#1e3a8a] whitespace-nowrap">CV</h2>
          <div className="flex-1 h-px" style={{ background: darkMode ? "linear-gradient(to left, transparent, #3b5fc0)" : "linear-gradient(to left, transparent, #1e3a8a)" }} />
        </div>
        <div className="w-full rounded-xl overflow-hidden shadow-lg" style={{ height: "80vh" }}>
          <iframe
            src={process.env.PUBLIC_URL + "/Kaur_Simran_Resume.pdf"}
            title="Simran Kaur CV"
            width="100%"
            height="100%"
            style={{ border: "none", display: "block" }}
          />
        </div>
      </div>
    ),

    experience: <ExperienceTimeline darkMode={darkMode} setTab={setTab} />,

    research: <ResearchTab darkMode={darkMode} openCards={researchOpen} setOpenCards={setResearchOpen} />,

    projects: (
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px" style={{ background: darkMode ? "linear-gradient(to right, transparent, #3b5fc0)" : "linear-gradient(to right, transparent, #1e3a8a)" }} />
          <h2 className="text-2xl font-semibold text-[#1e3a8a] whitespace-nowrap">Projects</h2>
          <div className="flex-1 h-px" style={{ background: darkMode ? "linear-gradient(to left, transparent, #3b5fc0)" : "linear-gradient(to left, transparent, #1e3a8a)" }} />
        </div>
        <ul className="list-disc ml-5">
          <li>Bayesian Network Drug Repositioning</li>
          <li>miRNA-siRNA Modeling</li>
        </ul>
      </div>
    ),

    hobbies: <HobbiesTab darkMode={darkMode} />,
  };

  // Equidistant vertical positions, alternating horizontal offsets (zigzag pattern)
  const topPositions = ["3%", "13%", "23%", "33%", "43%", "53%", "63%", "73%", "83%"];
  const leftPositions  = [40, 130, 40, 130, 40, 130, 40, 130, 40];
  const rightPositions = [40, 130, 40, 130, 40, 130, 40, 130, 40];

  // Staggered delays for fade-in appearance
  const delays = [0, 0.4, 0.8, 1.2, 1.6, 0.2, 0.6, 1.0, 1.4];

return (
  <div
    className={`min-h-screen transition-all duration-500 font-serif overflow-hidden ${
      darkMode ? "bg-[#0f172a] text-[#e5e7eb]" : "bg-[#f5f5f4] text-[#1e293b]"
    }`}
  >
    <div className="p-6 max-w-5xl mx-auto relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 relative min-h-[80px]">
        {/* Left Side (Empty or placeholder for other content) */}
        <div className="flex-1"></div>

        {/* Centered Name and Email */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
          <h1 className="text-5xl font-bold text-[#1e3a8a]">
            Simran Kaur
          </h1>
          <p className="text-sm opacity-70">simk@bu.edu</p>

            {/* Centered Icons */}
      <div className="flex gap-4 justify-center mt-2">
        <a href="mailto:simk@bu.edu">
          <Mail className="hover:scale-110 transition" />
        </a>
        <a href="https://www.linkedin.com/in/-kaur-simran" target="_blank" rel="noopener noreferrer">
          <Linkedin className="hover:scale-110 transition" />
        </a>
        <a href="https://github.com/skaur47" target="_blank" rel="noopener noreferrer">
          <Github className="hover:scale-110 transition" />
        </a>
      </div>
    </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-3 rounded-xl bg-[#1e3a8a] text-white hover:scale-105 transition-transform flex items-center justify-center text-xl shadow-md"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? "☀️" : "🌙"}
        </button>
    </div>

       {/* Tabs */}
<div className="flex justify-center gap-6 mb-8 text-lg border-b border-gray-200 dark:border-gray-700 pb-2">
  {Object.keys(tabs).map((t) => (
    <button
      key={t}
      onClick={() => setTab(t)}
      className={`transition-all duration-300 relative px-2 ${
        tab === t
          ? "text-[#92400e] font-semibold"
          : "opacity-60 hover:opacity-100"
      }`}
    >
      {t.toUpperCase()}
      {/* Optional: Animated underline for a cleaner look than standard underline */}
      {tab === t && (
        <div className="absolute bottom-[-9px] left-0 right-0 h-0.5 bg-[#92400e]" />
      )}
    </button>
  ))}
</div>

        {/* Lightbulb Sprinkles when Research */}
        {tab === "research" && (
          <>
            {/* LEFT SIDE SPRINKLES - fade in at fixed positions */}
            {leftPositions.map((position, i) => (
              <motion.img
                key={`lb-left-${i}`}
                src={process.env.PUBLIC_URL + "/lightbulb.gif"}
                className="fixed z-0 pointer-events-none"
                style={{
                  width: "50px",
                  height: "70px",
                  left: `${position}px`,
                  top: topPositions[i],
                  filter: darkMode
                    ? "brightness(0) invert(1)"
                    : "grayscale(1) brightness(1.5) drop-shadow(0 0 3px rgba(0,0,0,0.15))",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: darkMode ? 0.50 : 0.35 }}
                transition={{
                  duration: 2.5,
                  delay: delays[i],
                  ease: "easeIn",
                }}
              />
            ))}

            {/* RIGHT SIDE SPRINKLES - fade in at fixed positions */}
            {rightPositions.map((position, i) => (
              <motion.img
                key={`lb-right-${i}`}
                src={process.env.PUBLIC_URL + "/lightbulb.gif"}
                className="fixed z-0 pointer-events-none"
                style={{
                  width: "50px",
                  height: "70px",
                  right: `${position}px`,
                  top: topPositions[i],
                  filter: darkMode
                    ? "brightness(0) invert(1)"
                    : "grayscale(1) brightness(1.5) drop-shadow(0 0 3px rgba(0,0,0,0.15))",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: darkMode ? 0.50 : 0.35 }}
                transition={{
                  duration: 2.5,
                  delay: delays[i],
                  ease: "easeIn",
                }}
              />
            ))}
          </>
        )}

        {/* DNA Sprinkles when Experience */}
        {tab === "experience" && (
          <>
            {/* LEFT SIDE SPRINKLES - fade in at fixed positions */}
            {leftPositions.map((position, i) => (
              <motion.img
                key={`left-${i}`}
                src={process.env.PUBLIC_URL + "/dna.gif"}
                className="fixed z-0 pointer-events-none"
                style={{
                  width: "50px",
                  height: "70px",
                  left: `${position}px`,
                  top: topPositions[i],
                  filter: darkMode
                    ? "invert(1) brightness(1.2) drop-shadow(0 0 10px rgba(255,255,255,0.8))"
                    : "brightness(1) drop-shadow(0 0 4px rgba(0,0,0,0.2))",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{
                  duration: 2.5,
                  delay: delays[i],
                  ease: "easeIn",
                }}
              />
            ))}

            {/* RIGHT SIDE SPRINKLES - fade in at fixed positions */}
            {rightPositions.map((position, i) => (
              <motion.img
                key={`right-${i}`}
                src={process.env.PUBLIC_URL + "/dna.gif"}
                className="fixed z-0 pointer-events-none"
                style={{
                  width: "50px",
                  height: "70px",
                  right: `${position}px`,
                  top: topPositions[i],
                  filter: darkMode
                    ? "invert(1) brightness(1.2) drop-shadow(0 0 10px rgba(255,255,255,0.8))"
                    : "brightness(1) drop-shadow(0 0 4px rgba(0,0,0,0.2))",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{
                  duration: 2.5,
                  delay: delays[i],
                  ease: "easeIn",
                }}
              />
            ))}
          </>
        )}

        {/* Content */}
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 relative z-10"
        >
          {tabs[tab]}
        </motion.div>
      </div>
    </div>
  );
}