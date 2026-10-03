import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import profileImage from "../../assets/profile/Uppili_professional_img-50kb.jpeg";

const technologies = [
  "React.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "OpenSearch",
  "ELK",
];

const TypingIntro = () => {
  const messages = [
    "Hi, Hello!",
    "I'm Uppili.",
    "I'm a Software Engineer.",
  ];

  const [messageIndex, setMessageIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMessage = messages[messageIndex];

    const typingSpeed = isDeleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(
          currentMessage.slice(0, displayText.length + 1)
        );

        if (displayText.length === currentMessage.length) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1200);
        }
      } else {
        setDisplayText(
          currentMessage.slice(0, displayText.length - 1)
        );

        if (displayText.length === 0) {
          setIsDeleting(false);

          setMessageIndex(
            (prev) => (prev + 1) % messages.length
          );
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, messageIndex]);

  return (
    <div className="mb-6 min-h-[50px]">
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-blue-500" />

        <span className="text-2xl font-medium text-white sm:text-3xl">
          {displayText}
          <span className="ml-1 animate-pulse text-blue-500">
            |
          </span>
        </span>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <section
      id="home"
      className="hero-grid relative min-h-screen overflow-hidden bg-[#050505] pt-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-10 right-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-16 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">

        {/* ===================================== */}
        {/* LEFT CONTENT */}
        {/* ===================================== */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Typing Introduction */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <TypingIntro />
          </motion.div>

          {/* Main Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Building

            <span className="block text-slate-500">
              modern
            </span>

            <span className="block">
              digital experiences
              <span className="text-blue-500">.</span>
            </span>
          </motion.h1>

          {/* Introduction */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
          >
            I'm a Software Engineer focused on building scalable
            web applications using React.js, TypeScript, Node.js
            and PostgreSQL, with professional experience in ELK
            and OpenSearch.
          </motion.p>

          {/* Technology Badges */}

          <div className="mt-8 flex max-w-2xl flex-wrap gap-2">
            {technologies.map((technology, index) => (
              <motion.span
                key={technology}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.8 + index * 0.08,
                }}
                whileHover={{
                  y: -3,
                }}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-slate-300 backdrop-blur transition hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-white"
              >
                {technology}
              </motion.span>
            ))}
          </div>

          {/* Buttons */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
            className="mt-10 flex flex-wrap gap-4"
          >
            {/* Explore Button */}

            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
            >
              Explore My Work

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </motion.a>

            {/* Resume Button */}

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:border-white/30 hover:bg-white/[0.06]"
            >
              <Download size={17} />

              Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.2,
            }}
            className="mt-10 flex items-center gap-7 text-sm"
          >
            <a
              href="https://github.com/Uppili12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/uppilirajagopalan123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="mailto:uppiliraja2003@gmail.com"
              className="text-slate-500 transition hover:text-white"
            >
              Email
            </a>
          </motion.div>
        </motion.div>

        {/* ===================================== */}
        {/* RIGHT PROFILE IMAGE */}
        {/* ===================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Rotating Outer Border */}

          <div className="rotate-border absolute h-[330px] w-[330px] rounded-full border border-dashed border-blue-500/20 sm:h-[410px] sm:w-[410px] lg:h-[470px] lg:w-[470px]" />

          {/* Image Glow */}

          <div className="absolute h-72 w-72 rounded-full bg-blue-600/20 blur-[100px] sm:h-80 sm:w-80" />

          {/* Profile Image */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="blue-glow relative h-72 w-72 overflow-hidden rounded-full border border-white/10 bg-slate-900 sm:h-80 sm:w-80 lg:h-[390px] lg:w-[390px]"
          >
            <img
              src={profileImage}
              alt="Uppili - Software Engineer"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>

          {/* Primary Stack Card */}

          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-2 top-16 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 shadow-2xl backdrop-blur-xl sm:left-0"
          >
            <p className="text-xs text-slate-500">
              Primary Stack
            </p>

            <p className="mt-1 text-sm font-semibold text-white">
              React + TypeScript
            </p>
          </motion.div>

          {/* Experience Card */}

          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-2 right-0 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 shadow-2xl backdrop-blur-xl"
          >
            <p className="text-xs text-slate-500">
              Experience
            </p>

            <p className="mt-1 text-sm font-semibold text-white">
              ELK / OpenSearch
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}

      <motion.a
        href="#about"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-600 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
};

export default Home;