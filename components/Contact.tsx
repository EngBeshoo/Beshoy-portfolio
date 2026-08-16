"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-section py-24">
      <div className="mx-auto max-w-4xl px-6">

        {/* Section Title */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-primary">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold">
            Contact <span className="text-primary">Me</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Have a project in mind or want to discuss an opportunity?
            Feel free to get in touch with me.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="space-y-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
        >

          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-xl border border-border bg-card px-5 py-4 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-xl border border-border bg-card px-5 py-4 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
          />

          {/* Message */}
          <textarea
            rows={6}
            placeholder="Your Message"
            className="w-full resize-none rounded-xl border border-border bg-card px-5 py-4 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
          />

          {/* Submit */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 font-semibold text-white transition hover:bg-secondary"
          >
            <Send size={19} />
            Send Message
          </motion.button>

        </motion.form>

        {/* Email */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a
            href="mailto:bghazr@gmail.com"
            className="flex items-center gap-2 text-muted transition hover:text-primary"
          >
            <Mail size={18} />
            bghazr@gmail.com
          </a>
        </motion.div>

      </div>
    </section>
  );
}