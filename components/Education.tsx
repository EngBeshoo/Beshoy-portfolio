export default function Education() {
  return (
    <section id="education" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <p className="mb-2 text-primary">My Journey</p>

          <h2 className="text-4xl font-bold">
            Education & <span className="text-primary">Certificates</span>
          </h2>
        </div>

        <div className="mx-auto max-w-4xl space-y-6">

          <div className="rounded-2xl border border-border bg-card p-6">
            <span className="text-sm text-primary">
              Education
            </span>

            <h3 className="mt-2 text-2xl font-bold">
              Faculty of Computers and Information
            </h3>

            <p className="mt-2 text-muted">
              Tanta University
            </p>

            <p className="mt-4 leading-7 text-muted">
              Information Technology Department with a focus on software
              development and modern web technologies.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <span className="text-sm text-primary">
              Training
            </span>

            <h3 className="mt-2 text-2xl font-bold">
              Front-End Development
            </h3>

            <p className="mt-2 text-muted">
              Route Academy
            </p>

            <p className="mt-4 leading-7 text-muted">
              Training covering HTML, CSS, JavaScript, DOM, CRUD, ES6,
              React, TypeScript and Next.js.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <span className="text-sm text-primary">
              Training
            </span>

            <h3 className="mt-2 text-2xl font-bold">
              Front-End using Vue.js
            </h3>

            <p className="mt-2 text-muted">
              ITI
            </p>

            <p className="mt-4 leading-7 text-muted">
              Front-End development training focused on Vue.js and modern
              frontend development practices.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}