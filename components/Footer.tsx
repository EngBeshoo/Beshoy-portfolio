export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto max-w-7xl px-6 text-center">

        <p className="text-lg font-semibold">
          Beshoy Eissa Azer
        </p>

        <p className="mt-2 text-sm text-muted">
          Frontend Developer
        </p>

        <p className="mt-5 text-sm text-muted">
          © {new Date().getFullYear()} Beshoy Eissa Azer. All rights reserved.
        </p>

      </div>
    </footer>
  );
}