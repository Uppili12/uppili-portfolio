import { motion } from "framer-motion";

interface Project {
  number: string;
  type: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
}

const projects: Project[] = [
  {
    number: "01",
    type: "Professional Project",
    title: "CRM / Detection Management Platform",
    description:
      "A full-stack security management application developed for managing sites, security information, audit activities and monitoring workflows. The frontend was developed using React.js and TypeScript, with Node.js APIs and PostgreSQL used for backend data management.",
    features: [
      "Developed responsive user interfaces using React.js and TypeScript",
      "Implemented site management and CRUD operations",
      "Created audit log functionality for tracking user activities",
      "Implemented form validation using Joi",
      "Integrated frontend with REST APIs",
      "Worked with PostgreSQL for structured application data",
      "Implemented authentication and role-based application workflows",
      "Performed manual UI testing and API testing using Postman",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "REST API",
      "Joi",
      "Postman",
    ],
  },

  {
    number: "02",
    type: "Professional Experience",
    title: "ELK / OpenSearch Monitoring & Parser System",
    description:
      "Professional experience involving log analysis, parser development, production parser deployment and monitoring of OpenSearch-based log data. Worked with log-processing technologies to transform incoming security and application logs into structured data.",
    features: [
      "Analyzed application and security log data",
      "Developed and modified log parsers based on requirements",
      "Deployed parsers into production environments",
      "Created and maintained index templates",
      "Configured log data flow into OpenSearch",
      "Monitored OpenSearch log ingestion and processing",
      "Troubleshot parser and log-processing issues",
      "Worked with Linux environments and command-line tools",
      "Worked with Kafka and Vector-based log pipelines",
    ],
    technologies: [
      "OpenSearch",
      "ELK",
      "Kafka",
      "Vector",
      "Linux",
      "Log Analysis",
      "Parser Development",
      "Index Templates",
    ],
  },

  {
    number: "03",
    type: "Full Stack Project",
    title: "Real Estate Management Platform",
    description:
      "A full-stack property management application designed to manage real-estate listings through a modern web interface. The application includes authentication, property management, validation and PostgreSQL database integration.",
    features: [
      "Built property listing and management interfaces",
      "Implemented property creation, editing and deletion",
      "Added JWT-based authentication",
      "Implemented ownership-based property operations",
      "Created REST APIs using Node.js and Express",
      "Used PostgreSQL for persistent application data",
      "Implemented request validation",
      "Designed responsive interfaces using modern frontend technologies",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "JWT",
      "REST API",
      "Joi",
    ],
  },
];


const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black px-6 py-28 text-white md:px-10 lg:px-16"
    >
      {/* =========================================================
          BACKGROUND EFFECTS
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top glow */}

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[15%]
            top-20
            h-72
            w-72
            rounded-full
            bg-blue-600/[0.07]
            blur-[120px]
          "
        />

        {/* Bottom glow */}

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-10
            right-[10%]
            h-80
            w-80
            rounded-full
            bg-indigo-600/[0.06]
            blur-[130px]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div className="relative mx-auto max-w-7xl">

        {/* =======================================================
            SECTION HEADER
        ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.8,
          }}
          className="mb-20 max-w-3xl"
        >
          {/* Small label */}

          <div className="mb-5 flex items-center gap-3">
            <motion.span
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 45,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="h-px bg-blue-500"
            />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-blue-400">
              Selected Work
            </span>
          </div>

          {/* Heading */}

          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Projects &
            <span className="block text-slate-500">
              Technical Experience
            </span>
          </h2>

          {/* Description */}

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400">
            A collection of professional experience and
            full-stack development work covering modern
            frontend applications, backend APIs,
            PostgreSQL databases and OpenSearch-based
            monitoring systems.
          </p>
        </motion.div>

        {/* =======================================================
            PROJECT CARDS
        ======================================================= */}

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: "-100px",
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/[0.08]
                bg-white/[0.025]
                backdrop-blur-xl
              "
            >
              {/* =================================================
                  CARD GLOW
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-40
                  -top-40
                  h-[400px]
                  w-[400px]
                  rounded-full
                  bg-blue-500/0
                  blur-[100px]
                  transition-all
                  duration-1000
                  group-hover:bg-blue-500/[0.09]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-40
                  -left-40
                  h-[350px]
                  w-[350px]
                  rounded-full
                  bg-indigo-500/0
                  blur-[100px]
                  transition-all
                  duration-1000
                  group-hover:bg-indigo-500/[0.06]
                "
              />

              {/* =================================================
                  CARD GRID
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-[0.025]
                  [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)]
                  [background-size:45px_45px]
                "
              />

              {/* =================================================
                  ANIMATED TOP LINE
              ================================================= */}

              <motion.div
                initial={{
                  scaleX: 0,
                }}
                whileInView={{
                  scaleX: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.15 + 0.3,
                }}
                className="
                  absolute
                  left-0
                  right-0
                  top-0
                  h-px
                  origin-left
                  bg-gradient-to-r
                  from-transparent
                  via-blue-500/50
                  to-transparent
                "
              />

              {/* =================================================
                  CARD CONTENT
              ================================================= */}

              <div className="relative p-7 sm:p-9 lg:p-11">

                {/* Top information */}

                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                  {/* Number */}

                  <div className="relative">
                    <motion.span
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.15 + 0.2,
                      }}
                      className="
                        block
                        text-6xl
                        font-light
                        tracking-tighter
                        text-white/[0.08]
                        transition-colors
                        duration-500
                        group-hover:text-blue-400/[0.15]
                        sm:text-7xl
                      "
                    >
                      {project.number}
                    </motion.span>
                  </div>

                  {/* Project type */}

                  <motion.span
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15 + 0.3,
                    }}
                    className="
                      w-fit
                      rounded-full
                      border
                      border-blue-400/20
                      bg-blue-500/[0.06]
                      px-4
                      py-2
                      text-xs
                      font-medium
                      tracking-wide
                      text-blue-400
                    "
                  >
                    {project.type}
                  </motion.span>
                </div>

                {/* =================================================
                    TITLE
                ================================================= */}

                <motion.h3
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15 + 0.35,
                  }}
                  className="
                    mt-5
                    max-w-4xl
                    text-2xl
                    font-semibold
                    tracking-tight
                    text-white
                    transition-all
                    duration-500
                    group-hover:translate-x-1
                    group-hover:text-blue-400
                    sm:text-3xl
                    lg:text-4xl
                  "
                >
                  {project.title}
                </motion.h3>

                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15 + 0.45,
                  }}
                  className="
                    mt-6
                    max-w-4xl
                    text-sm
                    leading-7
                    text-slate-400
                    sm:text-base
                    sm:leading-8
                  "
                >
                  {project.description}
                </motion.p>

                {/* =================================================
                    FEATURES
                ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15 + 0.55,
                  }}
                  className="mt-9"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                      Key Contributions
                    </span>

                    <span className="h-px w-12 bg-white/10" />
                  </div>

                  <div className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
                    {project.features.map(
                      (feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{
                            opacity: 0,
                            x: -15,
                          }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 0.4,
                            delay:
                              index * 0.15 +
                              0.55 +
                              featureIndex * 0.04,
                          }}
                          className="
                            flex
                            items-start
                            gap-3
                            text-sm
                            leading-6
                            text-slate-400
                          "
                        >
                          <span
                            className="
                              mt-2
                              h-1.5
                              w-1.5
                              flex-shrink-0
                              rounded-full
                              bg-blue-500
                              shadow-[0_0_8px_rgba(59,130,246,0.6)]
                            "
                          />

                          <span>
                            {feature}
                          </span>
                        </motion.div>
                      )
                    )}
                  </div>
                </motion.div>

                {/* =================================================
                    TECHNOLOGIES
                ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15 + 0.7,
                  }}
                  className="mt-10"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                      Technologies
                    </span>

                    <span className="h-px w-12 bg-white/10" />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(
                      (technology, technologyIndex) => (
                        <motion.span
                          key={technology}
                          initial={{
                            opacity: 0,
                            scale: 0.9,
                          }}
                          whileInView={{
                            opacity: 1,
                            scale: 1,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 0.35,
                            delay:
                              index * 0.15 +
                              0.7 +
                              technologyIndex * 0.04,
                          }}
                          whileHover={{
                            y: -3,
                            scale: 1.04,
                          }}
                          className="
                            cursor-default
                            rounded-lg
                            border
                            border-white/[0.08]
                            bg-black/40
                            px-3
                            py-2
                            text-xs
                            text-slate-400
                            transition-colors
                            duration-300
                            hover:border-blue-400/30
                            hover:bg-blue-500/[0.06]
                            hover:text-blue-300
                          "
                        >
                          {technology}
                        </motion.span>
                      )
                    )}
                  </div>
                </motion.div>

                {/* =================================================
                    BOTTOM LINE
                ================================================= */}

                <div className="mt-10 flex items-center gap-3">
                  <motion.span
                    initial={{
                      width: 30,
                    }}
                    whileHover={{
                      width: 70,
                    }}
                    className="
                      h-px
                      bg-blue-500/60
                      transition-all
                      duration-500
                    "
                  />

                  <span className="text-[10px] uppercase tracking-[0.3em] text-slate-600">
                    Technical Work
                  </span>
                </div>
              </div>

              {/* =================================================
                  HOVER BORDER EFFECT
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-[28px]
                  border
                  border-blue-400/0
                  transition-all
                  duration-700
                  group-hover:border-blue-400/[0.12]
                "
              />
            </motion.article>
          ))}
        </div>

        {/* =======================================================
            BOTTOM STATEMENT
        ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="
            mt-10
            overflow-hidden
            rounded-3xl
            border
            border-white/[0.06]
            bg-white/[0.02]
            px-6
            py-8
            text-center
          "
        >
          <motion.div
            animate={{
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mx-auto mb-4 h-1 w-1 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
          />

          <p className="text-sm leading-6 text-slate-500">
            Building practical solutions with modern
            frontend technologies, backend systems,
            databases and monitoring platforms.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;