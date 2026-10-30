export default function ContactCard() {
    return (
        <div className="w-full max-w-sm rounded-lg border border-white/10 bg-slate-800 p-6 text-white">
            <h2 className="text-2xl font-bold">Yashas</h2>
            <p className="mt-1 text-slate-300">Frontend Developer</p>
            <p className="mt-4">
                Email: <a className="text-blue-400" href="mailto:yashas@portfolio.dev">yashas@portfolio.dev</a>
            </p>
            <p className="mt-2">Phone: (555) 123-4567</p>
        </div>
    );
}