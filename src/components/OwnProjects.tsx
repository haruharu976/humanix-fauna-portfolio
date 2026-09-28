import { ArrowUpRight, Bot, Check, Gift, Heart, ShieldCheck, Sparkles } from "lucide-react";

const projects = [
  {
    id: "subsidy-nav",
    title: "福祉事業者向け\n補助金・助成金ナビ",
    status: "ほぼ完成",
    statusTone: "ready",
    eyebrow: "Welfare Information",
    icon: Gift,
    description: "障害福祉・介護・医療分野の事業者が、利用可能な補助金・助成金情報を探しやすくするために開発したWebアプリです。複雑になりやすい制度情報を整理し、必要な支援制度へアクセスしやすくすることを目的としています。現在は主要機能の実装がほぼ完了しており、公開環境の整理・移管を予定しています。",
    features: ["質問形式の診断ナビ", "キーワード・条件検索", "制度比較・詳細表示", "公式資料への導線", "申請準備チェック", "地域別制度の確認"],
    availability: "サイトを見る →",
    href: "https://welfare-subsidy-nav-red.vercel.app/",
  },
  {
    id: "ai-workshop",
    title: "AI社員講座\nWebプラットフォーム",
    status: "開発中",
    statusTone: "building",
    eyebrow: "AI Learning Platform",
    icon: Bot,
    description: "Claude・Codexなどの生成AIを、単なるチャットツールではなく『役割を持つAI社員』として業務に活用するための学習・実践Webプラットフォームです。AIの導入、安全な利用、AI社員設計、営業・提案、業務自動化、SNS活用などを段階的に学べる構成として開発しています。",
    features: ["Claude / Codexの導入", "安全な業務利用設定", "AI社員の役割設計", "営業・提案書作成", "業務自動化", "SNS・集客活用"],
    availability: "サイトを見る",
    href: "https://ai-workshop-guide-wheat.vercel.app/",
    note: "今後の学習テーマ：Obsidian、n8n・MCP連携",
  },
  {
    id: "wedding",
    title: "Wedding Web App",
    subtitle: "結婚式ゲスト向け Webアプリ",
    status: "開発中",
    statusTone: "building",
    eyebrow: "Consumer UI / UX",
    icon: Heart,
    description: "結婚式ゲスト向けに、Webしおり・タイムテーブル・席次・プロフィール・参加型イベント等をまとめるWebアプリです。紙だけに依存せず、スマートフォンから情報へアクセスできる導線や、画像・アニメーションを活用した演出を取り入れながら開発しています。",
    features: ["Webしおりの基本画面", "ウェルカム・メッセージ", "会場案内", "案内メニューUI", "スマートフォン対応", "スクロール演出"],
    availability: "開発中・非公開",
    note: "今後実装予定：プログラム、プロフィール、席次表、競馬イベント、写真・動画",
  },
];

export default function OwnProjects() {
  return (
    <section id="own-projects" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 grid gap-7 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div><p className="section-label">Own Projects</p><h2 className="section-title">自主開発プロジェクト</h2></div>
          <p className="section-lead !mt-0">現場で見つけた課題や自身の関心から企画し、要件整理・設計・実装を進めているプロダクトです。実務システムとは分け、現在の開発状況を明記しています。</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <article key={project.id} className={`glass-card rounded-3xl p-7 sm:p-8 ${index === 2 ? "lg:col-span-2 lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:gap-10" : ""}`}>
                <div>
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${index === 2 ? "border-rose-400/20 bg-rose-400/10 text-rose-300" : "border-emerald-500/25 bg-emerald-500/10 text-emerald-400"}`}><Icon className="h-6 w-6" /></span>
                    <span className={`rounded-full border px-3 py-1.5 text-xs font-bold ${project.statusTone === "ready" ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300" : "border-amber-400/30 bg-amber-400/10 text-amber-300"}`}>{project.status}</span>
                  </div>
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.17em] text-slate-500">{project.eyebrow}</p>
                  <h3 className="whitespace-pre-line text-2xl font-bold leading-snug text-white">{project.title}</h3>
                  {project.subtitle && <p className="mt-1 text-sm font-medium text-rose-200/80">{project.subtitle}</p>}
                  <p className="mt-5 text-sm leading-7 text-slate-300">{project.description}</p>
                </div>

                <div className={index === 2 ? "mt-7 lg:mt-0" : "mt-7"}>
                  <p className="detail-label">主な機能・特徴</p>
                  <ul className="grid gap-2 sm:grid-cols-2">{project.features.map((feature) => <li key={feature} className="flex items-center gap-2 text-sm text-slate-300"><Check className="h-4 w-4 shrink-0 text-emerald-400" />{feature}</li>)}</ul>
                  {project.note && <p className="mt-5 rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-xs leading-5 text-slate-400">{project.note}</p>}
                  <div className="mt-6 border-t border-slate-800 pt-5">
                    {project.href ? <a href={project.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-400">{project.availability}<ArrowUpRight className="h-4 w-4" /></a> : <span className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-semibold text-slate-300">{project.statusTone === "ready" ? <ShieldCheck className="h-4 w-4 text-emerald-400" /> : <Sparkles className="h-4 w-4 text-amber-300" />}{project.availability}</span>}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
