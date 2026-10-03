import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      let current = "home";

      sections.forEach((section) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= window.innerHeight * 0.35) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className={`
        fixed
        left-0
        right-0
        top-0
        z-50
        transition-all
        duration-500
        ${
          scrolled
            ? "px-4 pt-3"
            : "px-4 pt-5"
        }
      `}
    >
      <nav
        className={`
          mx-auto
          flex
          max-w-6xl
          items-center
          justify-between
          rounded-2xl
          border
          px-5
          py-3
          transition-all
          duration-500
          ${
            scrolled
              ? "border-white/[0.08] bg-black/70 shadow-2xl shadow-black/30 backdrop-blur-2xl"
              : "border-white/[0.04] bg-black/20 backdrop-blur-md"
          }
        `}
      >
        {/* Logo */}

        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="group flex items-center gap-3"
        >
          <div
            className="
              relative
              flex
              h-9
              w-9
              items-center
              justify-center
              overflow-hidden
              rounded-xl
              border
              border-blue-500/30
              bg-blue-500/[0.08]
            "
          >
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                inset-1
                rounded-lg
                border
                border-blue-400/20
              "
            />

            <span className="
              relative
              text-sm
              font-bold
              text-blue-400
            ">
              U
            </span>
          </div>

          <div className="hidden sm:block">
            <p className="
              text-sm
              font-semibold
              tracking-wide
              text-white
            ">
              Uppili
            </p>

            <p className="
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-slate-600
            ">
              Software Engineer
            </p>
          </div>
        </button>

        {/* Desktop navigation */}

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive =
              activeSection === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() =>
                  scrollToSection(item.id)
                }
                className="
                  relative
                  rounded-xl
                  px-3
                  py-2
                  text-xs
                  transition-colors
                  duration-300
                "
              >
                <span
                  className={
                    isActive
                      ? "text-blue-400"
                      : "text-slate-500 hover:text-white"
                  }
                >
                  {item.label}
                </span>

                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="
                      absolute
                      bottom-0.5
                      left-1/2
                      h-1
                      w-1
                      -translate-x-1/2
                      rounded-full
                      bg-blue-500
                      shadow-[0_0_10px_rgba(59,130,246,0.8)]
                    "
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile button */}

        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() =>
            setMobileOpen((previous) => !previous)
          }
          className="
            flex
            h-10
            w-10
            flex-col
            items-center
            justify-center
            gap-1.5
            rounded-xl
            border
            border-white/[0.07]
            bg-white/[0.03]
            md:hidden
          "
        >
          <motion.span
            animate={{
              rotate: mobileOpen ? 45 : 0,
              y: mobileOpen ? 4 : 0,
            }}
            className="
              block
              h-px
              w-4
              bg-slate-300
            "
          />

          <motion.span
            animate={{
              opacity: mobileOpen ? 0 : 1,
            }}
            className="
              block
              h-px
              w-4
              bg-slate-300
            "
          />

          <motion.span
            animate={{
              rotate: mobileOpen ? -45 : 0,
              y: mobileOpen ? -4 : 0,
            }}
            className="
              block
              h-px
              w-4
              bg-slate-300
            "
          />
        </button>
      </nav>

      {/* Mobile menu */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              mx-4
              mt-2
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.07]
              bg-black/90
              p-2
              shadow-2xl
              backdrop-blur-2xl
              md:hidden
            "
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                type="button"
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.04,
                }}
                onClick={() =>
                  scrollToSection(item.id)
                }
                className={`
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-xl
                  px-4
                  py-3
                  text-left
                  text-sm
                  transition-colors
                  ${
                    activeSection === item.id
                      ? "bg-blue-500/[0.08] text-blue-400"
                      : "text-slate-500 hover:bg-white/[0.03] hover:text-white"
                  }
                `}
              >
                <span>{item.label}</span>

                {activeSection === item.id && (
                  <span className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-blue-500
                  " />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;