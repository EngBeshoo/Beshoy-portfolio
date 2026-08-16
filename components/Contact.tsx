"use client";

import { Mail, Send } from "lucide-react";
import { motion } from "framer-motion";

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
          action="https://api.web3forms.com/submit"
          method="POST"
          className="space-y-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >

          {/* Web3Forms Access Key */}
          <input
            type="hidden"
            name="access_key"
            value="f5509795-9177-4e47-8f77-14a91f31e69b"
          />

          {/* Subject */}
          <input
            type="hidden"
            name="subject"
            value="New Message From Beshoy Portfolio"
          />

          {/* From Name */}
          <input
            type="hidden"
            name="from_name"
            value="Beshoy Portfolio"
          />

          {/* Name */}
          <div>
            <label className="mb-2 block font-medium">
              Your Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full rounded-xl border border-border bg-card px-5 py-4 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block font-medium">
              Your Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full rounded-xl border border-border bg-card px-5 py-4 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Message */}
          <div>
            <label className="mb-2 block font-medium">
              Your Message
            </label>

            <textarea
              name="message"
              rows={6}
              placeholder="Write your message..."
              required
              className="w-full resize-none rounded-xl border border-border bg-card px-5 py-4 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 font-semibold text-white transition hover:bg-secondary"
          >
            <Send size={20} />
            Send Message
          </button>

        </motion.form>

        {/* Email */}
        <div className="mt-8 flex items-center justify-center gap-2 text-muted">
          <Mail size={18} className="text-primary" />

          <a
            href="mailto:bghazr@gmail.com"
            className="transition hover:text-primary"
          >
            bghazr@gmail.com
          </a>
        </div>

      </div>
    </section>
  );
}