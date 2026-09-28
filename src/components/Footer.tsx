import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-10 text-sm text-slate-500">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <a href="#top" className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/15 text-emerald-400"><Sparkles className="h-4 w-4" /></span><span className="font-bold text-white">HumaniX Fauna</span></a>
        <p className="text-center text-xs">© {new Date().getFullYear()} HumaniX Fauna. Portfolio information only.</p>
        <div className="flex gap-5 text-xs font-medium"><a href="#projects" className="hover:text-emerald-400">Projects</a><a href="#ai-development" className="hover:text-emerald-400">AI Development</a><a href="#about" className="hover:text-emerald-400">About</a></div>
      </div>
    </footer>
  );
}
