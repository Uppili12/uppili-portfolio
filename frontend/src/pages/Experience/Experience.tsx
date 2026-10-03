import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Search,
} from "lucide-react";

const responsibilities = [
  {
    icon: Search,
    title: "ELK & OpenSearch",
    description:
      "Worked with log analysis, parser development, production deployments and monitoring of OpenSearch-based environments.",
  },
  {
    icon: Code2,
    title: "React & TypeScript",
    description:
      "Developed user interfaces for CRM applications using React.js and TypeScript with form validation and API integration.",
  },
  {
    icon: Database,
    title: "Data & APIs",
    description:
      "Worked with structured application data, REST APIs, PostgreSQL/SQLite and API testing using Postman.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#050505] px-6 py-24 lg:px-8"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}

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
              Experience
            </span>
          </div>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Professional
            <span className="text-slate-500"> experience.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500">
            My experience combines production monitoring and log
            processing with modern web application development.
          </p>
        </motion.div>

        {/* Experience Card */}

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
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative mt-16"
        >
          {/* Timeline */}

          <div className="absolute left-[19px] top-10 hidden h-[calc(100%-40px)] w-px bg-gradient-to-b from-blue-500/70 via-blue-500/20 to-transparent md:block" />

          <div className="grid gap-10 md:grid-cols-[40px_1fr]">
            {/* Timeline Dot */}

            <div className="relative hidden md:block">
              <div className="absolute left-1/2 top-2 h-10 w-10 -translate-x-1/2 rounded-full border border-blue-500/30 bg-blue-500/10 p-2">
                <div className="h-full w-full rounded-full bg-blue-500 shadow-lg shadow-blue-500/40" />
              </div>
            </div>

            {/* Main Content */}

            <div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 backdrop-blur-xl sm:p-10">
                {/* Header */}

                <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <BriefcaseBusiness
                        size={20}
                        className="text-blue-400"
                      />

                      <span className="text-sm font-medium text-blue-400">
                        Professional Experience
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white sm:text-3xl">
                      ELK Developer
                    </h3>

                    <p className="mt-2 text-base font-medium text-slate-400">
                      Secure IT Technologies
                    </p>
                  </div>

                  <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-400">
                    1.3 Years Experience
                  </div>
                </div>

                {/* Description */}

                <p className="mt-8 max-w-4xl text-base leading-8 text-slate-400">
                  Worked on log monitoring and processing solutions,
                  focusing on parser development, production deployment,
                  log analysis and OpenSearch monitoring. Alongside
                  monitoring responsibilities, contributed to web
                  application development using React.js and TypeScript.
                </p>

                {/* Responsibilities */}

                <div className="mt-10 grid gap-4 lg:grid-cols-3">
                  {responsibilities.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
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
                          delay: index * 0.1,
                        }}
                        className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-blue-500/30"
                      >
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                          <Icon size={19} />
                        </div>

                        <h4 className="font-semibold text-white">
                          {item.title}
                        </h4>

                        <p className="mt-3 text-sm leading-7 text-slate-500">
                          {item.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Key Contributions */}

                <div className="mt-10 border-t border-white/10 pt-8">
                  <h4 className="text-lg font-semibold text-white">
                    Key Contributions
                  </h4>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="flex gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-blue-500"
                      />

                      <p className="text-sm leading-7 text-slate-500">
                        Developed and maintained log parsers for
                        processing application and system logs.
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-blue-500"
                      />

                      <p className="text-sm leading-7 text-slate-500">
                        Deployed parser changes to production and
                        monitored the resulting data flow.
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-blue-500"
                      />

                      <p className="text-sm leading-7 text-slate-500">
                        Performed log analysis and monitored OpenSearch
                        data for production issues.
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-blue-500"
                      />

                      <p className="text-sm leading-7 text-slate-500">
                        Worked with index templates and data ingestion
                        into OpenSearch.
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-blue-500"
                      />

                      <p className="text-sm leading-7 text-slate-500">
                        Built React.js and TypeScript UI components for
                        CRM functionality.
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-blue-500"
                      />

                      <p className="text-sm leading-7 text-slate-500">
                        Performed API testing using Postman and manual
                        UI testing during development.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technology Tags */}

                <div className="mt-10 flex flex-wrap gap-2 border-t border-white/10 pt-8">
                  {[
                    "React.js",
                    "TypeScript",
                    "Node.js",
                    "ELK",
                    "OpenSearch",
                    "Logstash",
                    "Linux",
                    "Postman",
                  ].map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-medium text-slate-400 transition hover:border-blue-500/40 hover:text-blue-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;