import { Github, GraduationCap, LockKeyhole, MonitorCheck, Stethoscope } from "lucide-react";

export default function AboutSection() {
  return (
    <>
      <section id="about" className="border-y border-slate-800/80 bg-slate-900/35 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div><p className="section-label">About</p><h2 className="section-title">現場の言葉を、<br />システムの形に。</h2><p className="section-lead">看護師として10年以上の医療現場経験と、就労継続支援B型での福祉現場経験があります。現場職員が抱える課題を業務の文脈ごと理解し、エンジニアリングへ橋渡しできることが強みです。</p></div>
          <div className="grid gap-5 sm:grid-cols-2"><div className="glass-card rounded-3xl p-7"><Stethoscope className="mb-5 h-7 w-7 text-emerald-400" /><p className="text-4xl font-black text-white">10<span className="text-xl text-emerald-400">年以上</span></p><h3 className="mt-3 font-bold text-white">看護師・医療現場</h3><p className="mt-2 text-sm leading-6 text-slate-400">安全性、情報共有、現場業務の優先順位を理解。</p></div><div className="glass-card rounded-3xl p-7"><GraduationCap className="mb-5 h-7 w-7 text-cyan-400" /><p className="text-2xl font-black text-white">就労継続支援B型</p><h3 className="mt-3 font-bold text-white">福祉現場での実務経験</h3><p className="mt-2 text-sm leading-6 text-slate-400">支援と運営、工賃業務の実態を踏まえて設計。</p></div><div className="glass-card rounded-3xl p-7 sm:col-span-2"><p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-emerald-400">Bridge the gap</p><p className="text-lg font-bold leading-8 text-white">「現場ではどう使うか」と「技術的にどう実現するか」を往復し、関係者と共通言語をつくりながら開発を進めます。</p></div></div>
        </div>
      </section>
      <section id="access" className="py-24">
        <div className="mx-auto max-w-7xl px-6"><div className="mb-12 max-w-3xl"><p className="section-label">Demo & GitHub</p><h2 className="section-title">安全に確認できる実績情報</h2><p className="section-lead">認証なしでも概要を把握できるよう、上部にダミーデータで再構成した画面イメージを掲載しています。</p></div><div className="grid gap-6 lg:grid-cols-2"><div className="glass-card rounded-3xl p-8"><span className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400"><MonitorCheck /></span><h3 className="mb-3 text-xl font-bold text-white">デモ環境の閲覧</h3><p className="leading-7 text-slate-300">セキュリティ上、デモ環境はGoogleアカウントによるアクセス制限を設けています。閲覧をご希望の場合は、Googleアカウントをご連絡ください。</p><div className="mt-6 flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-400"><LockKeyhole className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />デモURLは個別にご案内します。本番データ・個人情報・顧客情報は使用していません。</div></div><div className="glass-card rounded-3xl p-8"><span className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800 text-white"><Github /></span><h3 className="mb-3 text-xl font-bold text-white">GitHub</h3><p className="leading-7 text-slate-300">公開可能なリポジトリのみをご案内します。業務システムについては、業務システムのためリポジトリは非公開です。</p><p className="mt-6 border-t border-slate-800 pt-5 text-sm text-slate-500">公開リポジトリは、守秘義務・セキュリティを確認したうえで順次掲載します。</p></div></div></div>
      </section>
    </>
  );
}
