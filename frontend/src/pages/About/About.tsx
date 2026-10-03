import { motion } from "framer-motion";

const highlights = [
  "React.js and TypeScript application development",
  "Node.js REST API development and integration",
  "PostgreSQL database integration",
  "ELK and OpenSearch log monitoring",
  "Log parser development and production deployment",
  "Index template creation and log ingestion",
  "Linux command-line and troubleshooting",
  "API testing using Postman",
];

const focusAreas = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive and maintainable web interfaces using React.js, TypeScript and modern UI practices.",
    technologies: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Developing REST APIs and backend services using Node.js and Express.js for full-stack applications.",
    technologies: [
      "Node.js",
      "Express.js",
      "REST API",
    ],
  },
  {
    number: "03",
    title: "Database",
    description:
      "Working with relational databases and building database-driven applications using PostgreSQL.",
    technologies: [
      "PostgreSQL",
      "SQL",
    ],
  },
  {
    number: "04",
    title: "Monitoring & Logging",
    description:
      "Professional experience with log analysis, parser development, production deployment and OpenSearch monitoring.",
    technologies: [
      "ELK",
      "OpenSearch",
      "Kafka",
      "Vector",
      "Linux",
    ],
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-black
        px-6
        py-28
        text-white
        md:px-10
        lg:px-16
      "
    >
      {/* =====================================================
          BACKGROUND ANIMATION
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-40
            top-20
            h-96
            w-96
            rounded-full
            bg-blue-600/[0.06]
            blur-[130px]
          "
        />

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-40
            bottom-20
            h-96
            w-96
            rounded-full
            bg-indigo-600/[0.05]
            blur-[130px]
          "
        />

        {/* Moving light */}

        <motion.div
          animate={{
            x: ["-20%", "120%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            left-0
            top-1/3
            h-px
            w-64
            bg-gradient-to-r
            from-transparent
            via-blue-500/20
            to-transparent
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

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ====================================================== */}

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
          className="mb-16"
        >
          {/* Label */}

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
              }}
              className="h-px bg-blue-500"
            />

            <span className="text-xs uppercase tracking-[0.3em] text-blue-400">
              About Me
            </span>
          </div>

          {/* Heading */}

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Engineering ideas into
            <span className="block text-slate-500">
              practical solutions.
            </span>
          </h2>
        </motion.div>

        {/* =====================================================
            INTRODUCTION
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
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
          className="
            relative
            mx-auto
            max-w-5xl
            overflow-hidden
            rounded-[32px]
            border
            border-white/[0.07]
            bg-white/[0.025]
            p-7
            backdrop-blur-xl
            sm:p-10
            lg:p-14
          "
        >
          {/* Card glow */}

          <motion.div
            animate={{
              opacity: [0.15, 0.3, 0.15],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              -right-32
              -top-32
              h-72
              w-72
              rounded-full
              bg-blue-500/10
              blur-[100px]
            "
          />

          <div className="relative">
            {/* Small heading */}

            <motion.p
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
              }}
              className="
                mb-6
                text-xs
                uppercase
                tracking-[0.25em]
                text-blue-400
              "
            >
              Software Engineer
            </motion.p>

            {/* Main introduction */}

            <motion.h3
              initial={{
                opacity: 0,
                y: 25,
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
                delay: 0.1,
              }}
              className="
                max-w-4xl
                text-xl
                font-medium
                leading-9
                text-white
                sm:text-2xl
                sm:leading-10
              "
            >
              I'm Uppili, a Software Engineer focused on
              building scalable web applications using
              React.js, TypeScript, Node.js and PostgreSQL,
              with professional experience in ELK and
              OpenSearch.
            </motion.h3>

            {/* Description */}

            <motion.p
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
                duration: 0.7,
                delay: 0.2,
              }}
              className="
                mt-7
                max-w-4xl
                text-sm
                leading-8
                text-slate-400
                sm:text-base
              "
            >
              I work across frontend development, backend API
              integration, database-driven applications and
              log monitoring systems. My experience includes
              developing React and TypeScript interfaces,
              building and integrating REST APIs, working with
              PostgreSQL, developing log parsers, deploying
              parsers in production and monitoring OpenSearch
              environments.
            </motion.p>

            {/* Divider */}

            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: "100%",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: 0.3,
              }}
              className="
                mt-10
                h-px
                bg-gradient-to-r
                from-blue-500/40
                via-white/[0.08]
                to-transparent
              "
            />

            {/* =================================================
                HIGHLIGHTS
            ================================================== */}

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
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
                    duration: 0.4,
                    delay: 0.35 + index * 0.05,
                  }}
                  whileHover={{
                    x: 5,
                  }}
                  className="
                    group
                    flex
                    items-start
                    gap-3
                    rounded-xl
                    border
                    border-white/[0.05]
                    bg-black/20
                    p-3
                    transition-all
                    duration-300
                    hover:border-blue-500/20
                    hover:bg-blue-500/[0.03]
                  "
                >
                  <motion.span
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.15,
                    }}
                    className="
                      mt-2
                      h-1.5
                      w-1.5
                      flex-shrink-0
                      rounded-full
                      bg-blue-500
                      shadow-[0_0_10px_rgba(59,130,246,0.7)]
                    "
                  />

                  <span className="
                    text-xs
                    leading-6
                    text-slate-400
                    transition-colors
                    duration-300
                    group-hover:text-slate-300
                  ">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            TECHNICAL FOCUS
        ====================================================== */}

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
            margin: "-100px",
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-28"
        >
          {/* Heading */}

          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Technical Focus
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              Areas I work across
            </h3>
          </div>

          {/* Cards */}

          <div className="grid gap-5 md:grid-cols-2">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.number}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/[0.07]
                  bg-white/[0.025]
                  p-7
                  transition-all
                  duration-500
                  hover:border-blue-500/25
                  hover:bg-white/[0.04]
                  hover:shadow-[0_20px_70px_rgba(0,0,0,0.35)]
                "
              >
                {/* Hover glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-40
                    w-40
                    rounded-full
                    bg-blue-500/0
                    blur-3xl
                    transition-all
                    duration-700
                    group-hover:bg-blue-500/10
                  "
                />

                {/* Grid */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-[0.02]
                    [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
                    [background-size:35px_35px]
                  "
                />

                <div className="relative">
                  {/* Number */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.12 + 0.2,
                    }}
                    className="
                      text-5xl
                      font-light
                      tracking-tighter
                      text-white/[0.07]
                      transition-colors
                      duration-500
                      group-hover:text-blue-400/[0.15]
                    "
                  >
                    {area.number}
                  </motion.div>

                  {/* Title */}

                  <h4
                    className="
                      mt-5
                      text-xl
                      font-semibold
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-blue-400
                    "
                  >
                    {area.title}
                  </h4>

                  {/* Description */}

                  <p className="
                    mt-4
                    text-sm
                    leading-7
                    text-slate-400
                  ">
                    {area.description}
                  </p>

                  {/* Technologies */}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {area.technologies.map((technology, techIndex) => (
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
                          duration: 0.3,
                          delay:
                            index * 0.12 +
                            techIndex * 0.05,
                        }}
                        whileHover={{
                          y: -3,
                          scale: 1.04,
                        }}
                        className="
                          rounded-lg
                          border
                          border-white/[0.07]
                          bg-black/40
                          px-3
                          py-2
                          text-xs
                          text-slate-500
                          transition-colors
                          duration-300
                          hover:border-blue-400/20
                          hover:text-blue-300
                        "
                      >
                        {technology}
                      </motion.span>
                    ))}
                  </div>

                  {/* Bottom indicator */}

                  <div className="mt-7 flex items-center gap-3">
                    <span
                      className="
                        h-px
                        w-8
                        bg-blue-500/50
                        transition-all
                        duration-500
                        group-hover:w-14
                      "
                    />

                    <span className="
                      text-[10px]
                      uppercase
                      tracking-[0.25em]
                      text-slate-600
                    ">
                      Expertise
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* =====================================================
            CLOSING
        ====================================================== */}

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
            duration: 0.8,
          }}
          className="
            mt-16
            border-t
            border-white/[0.06]
            pt-10
          "
        >
          <div className="flex items-center gap-4">
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                h-2
                w-2
                rounded-full
                bg-blue-500
                shadow-[0_0_15px_rgba(59,130,246,0.8)]
              "
            />

            <p className="
              max-w-3xl
              text-sm
              leading-7
              text-slate-500
            ">
              My focus is combining modern web development
              with my experience in monitoring and
              log-processing systems to build reliable,
              maintainable and practical software solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;