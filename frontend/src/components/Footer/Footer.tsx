import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/[0.06]
        bg-black
        px-6
        py-12
        text-white
        md:px-10
        lg:px-16
      "
    >
      <div className="relative mx-auto max-w-7xl">

        <div className="
          flex
          flex-col
          gap-8
          md:flex-row
          md:items-end
          md:justify-between
        ">

          {/* Identity */}

          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="
                text-left
                text-2xl
                font-bold
                tracking-tight
                transition-colors
                hover:text-blue-400
              "
            >
              Uppili<span className="text-blue-500">.</span>
            </button>

            <p className="
              mt-3
              max-w-md
              text-sm
              leading-7
              text-slate-600
            ">
              Software Engineer focused on building scalable
              web applications using React.js, TypeScript,
              Node.js and PostgreSQL, with professional
              experience in ELK and OpenSearch.
            </p>
          </div>

          {/* Back to top */}

          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{
              y: -4,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              w-fit
              rounded-xl
              border
              border-white/[0.07]
              bg-white/[0.025]
              px-5
              py-3
              text-xs
              uppercase
              tracking-[0.2em]
              text-slate-500
              transition-colors
              hover:border-blue-500/30
              hover:text-blue-400
            "
          >
            Back to top ↑
          </motion.button>
        </div>

        {/* Bottom */}

        <div className="
          mt-10
          flex
          flex-col
          gap-3
          border-t
          border-white/[0.06]
          pt-6
          text-xs
          text-slate-700
          sm:flex-row
          sm:items-center
          sm:justify-between
        ">
          <p>
            © {new Date().getFullYear()} Uppili. All rights
            reserved.
          </p>

          <p>
            Built with React.js · TypeScript · Node.js ·
            PostgreSQL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;