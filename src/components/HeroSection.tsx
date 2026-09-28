import { ArrowRight, Braces, HeartPulse, Sparkles, Workflow } from "lucide-react";

const strengths = [
  { icon: HeartPulse, title: "医療・福祉の現場経験", text: "制度と実務を踏まえて課題を整理" },
  { icon: Workflow, title: "一貫した開発", text: "要件整理から運用改善まで担当" },
  { icon: Braces, title: "AI駆動開発", text: "人が判断し、AIで品質と速度を高める" },
];

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-44">
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-2 text-xs font-bold tracking-[0.16em] text-emerald-300"><Sparkles className="h-3.5 w-3.5" /> HUMANIX FAUNA / WORKS</div>
          <h1 className="mb-6 text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-6xl lg:text-7xl">福祉・医療 <span className="text-emerald-400">×</span> AI <span className="text-cyan-400">×</span><br /><span className="text-gradient">Web Development</span></h1>
          <p className="mx-auto mb-10 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">看護・福祉の現場経験を活かし、現場へのヒアリング、要件整理、設計、開発、テスト、運用改善まで一貫して行っています。使う人に無理をさせない、現場で続くシステムをつくります。</p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#projects" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-7 py-4 font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400 sm:w-auto">開発実績を見る <ArrowRight className="h-5 w-5" /></a>
            <a href="#about" className="inline-flex w-full items-center justify-center rounded-xl border border-slate-700 bg-slate-900/80 px-7 py-4 font-semibold text-slate-200 transition hover:border-emerald-500/40 hover:bg-slate-800 sm:w-auto">経歴と強み</a>
          </div>
        </div>
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {strengths.map(({ icon: Icon, title, text }) => <div key={title} className="glass-card flex items-center gap-4 rounded-2xl p-5"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400"><Icon className="h-5 w-5" /></div><div><h2 className="font-bold text-white">{title}</h2><p className="mt-1 text-sm text-slate-400">{text}</p></div></div>)}
        </div>
      </div>
    </section>
  );
}
