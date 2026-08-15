export default function Contact() {
  return (
    <section id="contact" className="bg-section py-24">
      <div className="mx-auto max-w-4xl px-6">

        <div className="mb-12 text-center">
          <p className="mb-2 text-primary">Get In Touch</p>

          <h2 className="text-4xl font-bold">
            Contact <span className="text-primary">Me</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Have a project in mind or want to discuss an opportunity?
            Feel free to get in touch with me.
          </p>
        </div>

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-xl border border-border bg-card px-5 py-4 outline-none transition focus:border-primary"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-xl border border-border bg-card px-5 py-4 outline-none transition focus:border-primary"
          />

          <textarea
            rows={6}
            placeholder="Your Message"
            className="w-full resize-none rounded-xl border border-border bg-card px-5 py-4 outline-none transition focus:border-primary"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-primary py-4 font-semibold text-white transition hover:bg-secondary"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}