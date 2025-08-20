import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const inputStyle =
    "px-3 py-2 rounded-lg bg-black text-white border-2 border-[#F26100] focus:outline-none focus:border-[#E69E0A] transition";

  return (
    <div className="py-20 bg-[#0f0f0f] max-sm:pt-20 max-sm:pb-0">
      {/* Title */}
      <motion.div
        className="px-10 text-center lg:text-left"
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        ref={ref}
      >
        <h2 className="text-4xl font-bold underline underline-offset-8 text-white decoration-[#E69E0A] max-sm:tex">
          Contact Us
        </h2>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="w-full mt-10 bg-[#121212] px-6 lg:px-10 py-10 flex flex-col lg:flex-row justify-between gap-8 rounded-2xl shadow-lg"
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay: 0.2 }}
      >
        {/* Info Section */}
        <motion.div
          className="flex-1 text-white space-y-6"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
        >
          <div>
            <h4 className="text-2xl font-semibold mb-2">Visit Us</h4>
            <ul className="space-y-2">
              <li>
                <i>123 Burger Lane, Food City</i>
              </li>
              <li>
                Brewville, BC 10101 <br />
                Phone: (555) 123-4567 <br />
                Email:{" "}
                <a
                  href="mailto:hello@BurgerSmash.com"
                  className="text-[#E69E0A] underline hover:text-[#ffb73d]"
                >
                  hello@BurgerSmash.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-2">Hours</h4>
            <ul className="list-disc ml-5 space-y-1 text-gray-300">
              <li>Mon-Fri: 7:00 AM - 8:00 PM</li>
              <li>Sat: 8:00 AM - 9:00 PM</li>
              <li>Sun: 8:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          className="flex-1 flex items-center justify-center"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.4 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.967982226395!2d-73.98565648459491!3d40.74881707932786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18f0b2c3%3A0xf39f82b58e59c7a!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
            className="w-full h-70 lg:h-120 rounded-2xl border-0 shadow-md"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </motion.div>

        {/* Form */}
        <motion.div
          className="flex-1 bg-[#272727] p-8 rounded-xl shadow-md text-white"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>
          <form className="flex flex-col gap-4">
            <label htmlFor="name" className="font-medium">
              Name:
            </label>
            <input type="text" id="name" className={inputStyle} />

            <label htmlFor="email" className="font-medium">
              Email:
            </label>
            <input type="email" id="email" className={inputStyle} />

            <label htmlFor="message" className="font-medium">
              Message:
            </label>
            <textarea
              id="message"
              className={inputStyle}
              rows={4}
            ></textarea>

            <button
              type="submit"
              className="bg-[#E69E0A] border-2 border-[#E69E0A] text-black font-bold px-5 py-2 rounded-3xl tracking-wide mt-2 hover:bg-[#c07e08] hover:border-[#c07e08] transition shadow-lg"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Contact;
