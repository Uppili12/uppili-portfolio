import { type FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { sendContactMessage } from "../../api/contactApi";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [serverError, setServerError] = useState("");

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must contain at least 2 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        "Message must contain at least 10 characters.";
    }

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: undefined,
    }));

    setServerError("");
    setSuccessMessage("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSuccessMessage("");
    setServerError("");

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setIsSubmitting(true);

      await sendContactMessage(formData);

      setSuccessMessage(
        "Your message has been sent successfully. I'll get back to you soon."
      );

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setErrors({});
    } catch (error) {
      console.error("Contact form error:", error);

      setServerError(
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
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
      {/* Background animation */}

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
            bg-blue-600/[0.05]
            blur-[130px]
          "
        />

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 60, 0],
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

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}

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
          <div className="mb-5 flex items-center gap-3">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 45 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="h-px bg-blue-500"
            />

            <span className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-blue-400
            ">
              Contact
            </span>
          </div>

          <h2 className="
            text-4xl
            font-bold
            tracking-tight
            sm:text-5xl
            lg:text-6xl
          ">
            Let's build something
            <span className="block text-slate-500">
              meaningful together.
            </span>
          </h2>

          <p className="
            mt-6
            max-w-2xl
            text-sm
            leading-7
            text-slate-500
            sm:text-base
          ">
            Have an opportunity, project idea, or simply
            want to connect? Send me a message and I'll get
            back to you.
          </p>
        </motion.div>

        {/* Main grid */}

        <div className="
          grid
          gap-8
          lg:grid-cols-[0.75fr_1.25fr]
        ">

          {/* Contact information */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
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
              overflow-hidden
              rounded-[32px]
              border
              border-white/[0.07]
              bg-white/[0.025]
              p-8
              sm:p-10
            "
          >
            <div className="relative">

              <p className="
                text-xs
                uppercase
                tracking-[0.25em]
                text-blue-400
              ">
                Get in touch
              </p>

              <h3 className="
                mt-5
                text-2xl
                font-semibold
                text-white
              ">
                Let's connect.
              </h3>

              <p className="
                mt-5
                text-sm
                leading-7
                text-slate-400
              ">
                I'm open to discussing software engineering
                opportunities, frontend development, backend
                development, ELK/OpenSearch work and other
                interesting technology projects.
              </p>

              {/* Email */}

              <div className="
                mt-10
                rounded-2xl
                border
                border-white/[0.06]
                bg-black/30
                p-5
              ">
                <p className="
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-slate-600
                ">
                  Email
                </p>

                <a
                  href="mailto:uppiliraja2003@gmail.com"
                  className="
                    mt-2
                    block
                    break-all
                    text-sm
                    text-slate-300
                    transition-colors
                    hover:text-blue-400
                  "
                >
                  uppiliraja2003@gmail.com
                </a>
              </div>

              {/* Location */}

              <div className="
                mt-4
                rounded-2xl
                border
                border-white/[0.06]
                bg-black/30
                p-5
              ">
                <p className="
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-slate-600
                ">
                  Location
                </p>

                <p className="
                  mt-2
                  text-sm
                  text-slate-300
                ">
                  Chennai, India
                </p>
              </div>

              {/* Status */}

              <div className="
                mt-8
                flex
                items-center
                gap-3
              ">
                <motion.span
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-blue-500
                    shadow-[0_0_15px_rgba(59,130,246,0.8)]
                  "
                />

                <span className="
                  text-xs
                  text-slate-500
                ">
                  Available for opportunities
                </span>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
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
              overflow-hidden
              rounded-[32px]
              border
              border-white/[0.07]
              bg-white/[0.025]
              p-8
              sm:p-10
            "
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="relative space-y-6"
            >

              {/* Name */}

              <div>
                <label
                  htmlFor="name"
                  className="
                    mb-2
                    block
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-slate-500
                  "
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`
                    w-full
                    rounded-xl
                    border
                    ${
                      errors.name
                        ? "border-red-500/50"
                        : "border-white/[0.08]"
                    }
                    bg-black/40
                    px-4
                    py-3.5
                    text-sm
                    text-white
                    outline-none
                    transition-all
                    placeholder:text-slate-700
                    focus:border-blue-500/50
                    focus:ring-1
                    focus:ring-blue-500/20
                  `}
                />

                {errors.name && (
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: -5,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="
                      mt-2
                      text-xs
                      text-red-400
                    "
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>

              {/* Email */}

              <div>
                <label
                  htmlFor="email"
                  className="
                    mb-2
                    block
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-slate-500
                  "
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={`
                    w-full
                    rounded-xl
                    border
                    ${
                      errors.email
                        ? "border-red-500/50"
                        : "border-white/[0.08]"
                    }
                    bg-black/40
                    px-4
                    py-3.5
                    text-sm
                    text-white
                    outline-none
                    transition-all
                    placeholder:text-slate-700
                    focus:border-blue-500/50
                    focus:ring-1
                    focus:ring-blue-500/20
                  `}
                />

                {errors.email && (
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: -5,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="
                      mt-2
                      text-xs
                      text-red-400
                    "
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>

              {/* Subject */}

              <div>
                <label
                  htmlFor="subject"
                  className="
                    mb-2
                    block
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-slate-500
                  "
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  className={`
                    w-full
                    rounded-xl
                    border
                    ${
                      errors.subject
                        ? "border-red-500/50"
                        : "border-white/[0.08]"
                    }
                    bg-black/40
                    px-4
                    py-3.5
                    text-sm
                    text-white
                    outline-none
                    transition-all
                    placeholder:text-slate-700
                    focus:border-blue-500/50
                    focus:ring-1
                    focus:ring-blue-500/20
                  `}
                />

                {errors.subject && (
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: -5,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="
                      mt-2
                      text-xs
                      text-red-400
                    "
                  >
                    {errors.subject}
                  </motion.p>
                )}
              </div>

              {/* Message */}

              <div>
                <label
                  htmlFor="message"
                  className="
                    mb-2
                    block
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-slate-500
                  "
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your opportunity or idea..."
                  rows={6}
                  className={`
                    w-full
                    resize-none
                    rounded-xl
                    border
                    ${
                      errors.message
                        ? "border-red-500/50"
                        : "border-white/[0.08]"
                    }
                    bg-black/40
                    px-4
                    py-3.5
                    text-sm
                    text-white
                    outline-none
                    transition-all
                    placeholder:text-slate-700
                    focus:border-blue-500/50
                    focus:ring-1
                    focus:ring-blue-500/20
                  `}
                />

                {errors.message && (
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: -5,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="
                      mt-2
                      text-xs
                      text-red-400
                    "
                  >
                    {errors.message}
                  </motion.p>
                )}
              </div>

              {/* Server error */}

              {serverError && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="
                    rounded-xl
                    border
                    border-red-500/20
                    bg-red-500/[0.05]
                    p-4
                    text-sm
                    leading-6
                    text-red-400
                  "
                >
                  {serverError}
                </motion.div>
              )}

              {/* Success */}

              {successMessage && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="
                    rounded-xl
                    border
                    border-blue-500/20
                    bg-blue-500/[0.05]
                    p-4
                    text-sm
                    leading-6
                    text-blue-400
                  "
                >
                  {successMessage}
                </motion.div>
              )}

              {/* Submit */}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{
                  scale: isSubmitting ? 1 : 1.02,
                }}
                whileTap={{
                  scale: isSubmitting ? 1 : 0.98,
                }}
                className="
                  w-full
                  rounded-xl
                  bg-blue-600
                  px-6
                  py-4
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:bg-blue-500
                  hover:shadow-[0_0_35px_rgba(37,99,235,0.25)]
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >
                {isSubmitting
                  ? "Sending message..."
                  : "Send message"}
              </motion.button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;