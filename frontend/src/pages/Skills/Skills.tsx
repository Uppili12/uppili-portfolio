import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Joi Validation",
      "JWT",
    ],
  },
  {
    title: "Database",
    skills: [
      "PostgreSQL",
      "SQLite",
      "SQL",
    ],
  },
  {
    title: "ELK / OpenSearch",
    skills: [
      "Logstash",
      "OpenSearch",
      "Log Analysis",
      "Parser Development",
      "Index Templates",
      "SIEM Monitoring",
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Linux",
      "Git",
      "GitHub",
      "Docker",
      "Kubernetes",
      "Postman",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050505] px-6 py-24 lg:px-8"
    >
      <div className="pointer-events-none absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        {/* Header */}

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
          }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-blue-500" />

            <span className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
              Skills
            </span>
          </div>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Technologies I work
            <span className="text-slate-500"> with.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500">
            A combination of frontend, backend, database, monitoring and
            infrastructure technologies that I use to build and support
            modern applications.
          </p>
        </motion.div>

        {/* Skills */}

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
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
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:border-blue-500/30 hover:bg-white/[0.04]"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">
                  {group.title}
                </h3>

                <span className="text-xs text-slate-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-xs font-medium text-slate-400 transition hover:border-blue-500/40 hover:text-blue-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;