import ContactCard from "./ProductCard";
import Fetchdata from "./Fetchdata";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-5 py-6">
        <header className="mb-16 flex items-center justify-between rounded-xl border border-white/10 bg-slate-800/80 px-5 py-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 font-bold text-slate-900">
            Y
          </div>

          <nav className="flex gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </header>

        <section className="grid items-center gap-10 py-8 md:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              Frontend Developer
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Hello, I&apos;m Yashas
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-slate-300">
              I build simple, clean, and modern websites for people who want a strong
              online presence.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#work"
                className="rounded-full bg-gradient-to-r from-blue-400 to-purple-500 px-5 py-3 font-semibold text-slate-900"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-600 px-5 py-3 font-semibold text-white"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-800 p-5 shadow-xl">
            <div className="mb-4 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="flex h-40 items-end gap-3 rounded-xl bg-slate-900 p-4">
              <span className="w-full rounded-t-lg bg-gradient-to-t from-blue-500 to-purple-500" style={{ height: "40%" }} />
              <span className="w-full rounded-t-lg bg-gradient-to-t from-blue-500 to-purple-500" style={{ height: "60%" }} />
              <span className="w-full rounded-t-lg bg-gradient-to-t from-blue-500 to-purple-500" style={{ height: "50%" }} />
              <span className="w-full rounded-t-lg bg-gradient-to-t from-blue-500 to-purple-500" style={{ height: "90%" }} />
              <span className="w-full rounded-t-lg bg-gradient-to-t from-blue-500 to-purple-500" style={{ height: "70%" }} />
            </div>
          </div>
        </section>

        <section id="about" className="py-16">
          <h2 className="mb-3 text-3xl font-bold">About Me</h2>
          <p className="max-w-2xl text-slate-300 leading-8">
            I am a beginner-friendly web developer who enjoys creating responsive,
            easy-to-use websites with clean design and clear layout.
          </p>
        </section>

        <section id="work" className="py-8">
          <h2 className="mb-6 text-3xl font-bold">My Work</h2>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-800 p-5">
              <h3 className="mb-2 text-xl font-semibold">Portfolio Website</h3>
              <p className="text-slate-300">Created a clean personal portfolio to showcase work and skills.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-800 p-5">
              <h3 className="mb-2 text-xl font-semibold">Business Site</h3>
              <p className="text-slate-300">Designed a simple landing page for a growing company.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-800 p-5">
              <h3 className="mb-2 text-xl font-semibold">UI Design</h3>
              <p className="text-slate-300">Built modern layouts using simple components and colors.</p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <Fetchdata />
        </section>

        <section id="contact" className="py-16">
          <h2 className="mb-4 text-3xl font-bold">Contact</h2>
          <ContactCard />
        </section>
      </div>
    </main>
  );
}