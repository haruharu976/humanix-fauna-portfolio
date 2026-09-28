import { Check } from "lucide-react";
import MaisonShowcase from "./MaisonShowcase";
import ShuroDashboardShowcase from "./ShuroDashboardShowcase";
import SmartCareShowcase from "./SmartCareShowcase";

type PreviewKind = "sales" | "wage" | "dashboard";
type Project = { number: string; title: string; category: string; summary: string; challenge: string; solution: string; features: string[]; scope: string; preview: PreviewKind };

const projects: Project[] = [
  { number: "01", title: "訪問看護事業者向け 営業支援システム（スマートケアオフィス）", category: "Healthcare / Sales Operations", summary: "訪問看護事業所の営業活動を効率化するために開発したWebシステムです。医療・福祉事業所の管理、訪問記録、営業マップ、反応・実績の可視化、フォロー管理を一元化し、営業状況を把握しやすくしています。", challenge: "営業先情報、訪問記録、次回対応が分散し、チーム全体の活動状況と優先順位を把握しにくい。", solution: "営業先・地図・記録・分析・フォローを一つの導線に統合。現場ヒアリングから運用改善まで一貫して設計・開発。", features: ["営業活動・反応の可視化", "営業先・訪問履歴管理", "地図・訪問ルート作成", "依頼・フォロー・通知管理"], scope: "現場ヒアリング / 要件整理 / 設計 / 実装 / テスト / 運用改善", preview: "sales" },
  { number: "02", title: "就労継続支援B型向け 工賃管理システム", category: "Welfare / Wage Management", summary: "就労継続支援B型事業所の通所予定、スタッフ勤務、工賃集計、経営指標を一元管理。現場運用と制度要件を踏まえ、日常業務から経営把握までつながる構成にしています。", challenge: "複数の表計算や手作業にまたがる集計は、確認負荷と転記ミスが生じやすい。", solution: "日々の記録から月次集計までをつなぎ、実際の福祉現場で無理なく運用できることを重視。", features: ["利用者・通所実績管理", "工賃計算・月次集計", "スタッフ勤務管理", "確認・確定フロー"], scope: "現場ヒアリング / 要件整理 / 設計 / 実装 / テスト / 継続改善", preview: "wage" },
  { number: "03", title: "就労支援経営ダッシュボード", category: "Welfare / Management Analytics", summary: "就労継続支援B型事業所の収支、工賃、利用状況、制度・運営上の確認事項を一元化。経営の現在地を可視化し、改善行動と安全なAI相談までつなげる管理者向けダッシュボードです。", challenge: "制度・運営情報と日々の実績が分散し、経営状況や改善すべき点を短時間で把握しにくい。", solution: "重要なKPI、損益、制度リスクを同じ導線で可視化し、匿名集計値による改善検討とAI相談を可能に。", features: ["経営KPI・損益の可視化", "制度・運営リスクの確認", "改善シミュレーション", "匿名集計値によるAI相談"], scope: "課題整理 / 指標設計 / UI設計 / 実装 / テスト / 改善", preview: "dashboard" },
];

const orderedProjects = [projects[1], projects[2], projects[0]].map((project, index) => ({
  ...project,
  number: `0${index + 1}`,
}));

function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className="p-7 sm:p-10">
      <div className="mb-5 flex items-center gap-3"><span className="text-sm font-black text-emerald-400">{project.number}</span><span className="h-px w-8 bg-emerald-500/50" /><span className="text-xs font-bold uppercase tracking-wider text-slate-500">{project.category}</span></div>
      <h3 className="mb-4 text-2xl font-bold leading-snug text-white">{project.title}</h3><p className="mb-7 leading-7 text-slate-300">{project.summary}</p>
      <div className="mb-6 grid gap-4 sm:grid-cols-2"><div><p className="detail-label">課題</p><p className="detail-copy">{project.challenge}</p></div><div><p className="detail-label">解決方法</p><p className="detail-copy">{project.solution}</p></div></div>
      <div className="mb-6"><p className="detail-label">主な機能</p><ul className="grid gap-2 sm:grid-cols-2">{project.features.map((feature) => <li key={feature} className="flex items-center gap-2 text-sm text-slate-300"><Check className="h-4 w-4 shrink-0 text-emerald-400" />{feature}</li>)}</ul></div>
      <div className="grid gap-4 border-t border-slate-800 pt-5 sm:grid-cols-2"><div><p className="detail-label">使用技術</p><p className="text-sm font-semibold text-white">Next.js / Supabase / Vercel</p></div><div><p className="detail-label">担当範囲</p><p className="text-sm leading-6 text-slate-300">{project.scope}</p></div></div>
    </div>
  );
}

export default function PortfolioGrid() {
  return (
    <section id="projects" className="border-y border-slate-800/80 bg-slate-900/35 py-24"><div className="mx-auto max-w-7xl px-6"><div className="mb-14 max-w-3xl"><p className="section-label">Professional Work</p><h2 className="section-title">実務・業務システム</h2><p className="section-lead">現場の課題を聞き、業務を整理し、運用できる形まで一貫して開発したシステムです。画面イメージは機密情報を含まないダミーデータで構成しています。</p></div><div className="space-y-12">{orderedProjects.map((project) => <article key={project.preview} className="glass-card overflow-hidden rounded-3xl"><ProjectDetails project={project} />{project.preview === "wage" ? <MaisonShowcase /> : project.preview === "dashboard" ? <ShuroDashboardShowcase /> : <SmartCareShowcase />}</article>)}</div></div></section>
  );
}
