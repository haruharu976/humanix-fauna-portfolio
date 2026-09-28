import { Bot, CheckCircle2, Code2, MessageSquareText, ShieldCheck } from "lucide-react";

const tools = [
  { name: "ChatGPT", role: "考える・整理する", icon: MessageSquareText, color: "text-emerald-400", items: ["要件整理", "仕様検討", "設計", "課題整理"] },
  { name: "Claude Code", role: "つくる・整える", icon: Code2, color: "text-cyan-400", items: ["実装", "既存コード解析", "機能追加", "リファクタリング", "テスト"] },
  { name: "Codex", role: "確かめる・改善する", icon: ShieldCheck, color: "text-amber-400", items: ["コードレビュー", "セキュリティ確認", "監査", "テスト", "改善点の洗い出し"] },
];

export default function AIDevelopment() {
  return (
    <section id="ai-development" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end"><div><p className="section-label">AI Driven Development</p><h2 className="section-title">AIの強みを分け、<br className="hidden sm:block" />人が品質に責任を持つ</h2></div><p className="section-lead !mt-0">生成AIごとの特性に合わせて役割を分担。AIにすべてを任せるのではなく、現場要件・制度・安全性を人間が確認しながら開発しています。</p></div>
        <div className="grid gap-6 lg:grid-cols-3">{tools.map(({ name, role, icon: Icon, color, items }, i) => <div key={name} className="glass-card rounded-3xl p-7"><div className="mb-7 flex items-center justify-between"><span className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700 bg-slate-950 ${color}`}><Icon className="h-6 w-6" /></span><span className="font-mono text-xs text-slate-600">0{i + 1}</span></div><p className="mb-1 text-xs font-bold tracking-wider text-slate-500">{role}</p><h3 className="mb-6 text-2xl font-bold text-white">{name}</h3><ul className="flex flex-wrap gap-2">{items.map(item => <li key={item} className="rounded-lg border border-slate-700/80 bg-slate-950/60 px-3 py-2 text-xs text-slate-300">{item}</li>)}</ul></div>)}</div>
        <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.06] p-6 sm:flex-row sm:items-center"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-slate-950"><Bot className="h-6 w-6" /></span><div><h3 className="font-bold text-white">AIは判断者ではなく、開発を加速するパートナー</h3><p className="mt-1 text-sm leading-6 text-slate-300">機密情報を入力しない運用を徹底し、出力は必ず人間が確認。業務要件との整合性、セキュリティ、テスト結果を見ながら採用を判断します。</p></div><CheckCircle2 className="hidden h-7 w-7 shrink-0 text-emerald-400 sm:block" /></div>
      </div>
    </section>
  );
}
