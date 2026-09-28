"use client";

import Image from "next/image";
import { ChevronDown, Expand, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const screens = [
  { src: "/images/portfolio/shuro-dashboard.png", title: "経営ダッシュボード", alt: "就労支援経営ダッシュボードの経営サマリー・KPI画面（デモ用ダミーデータ）", width: 3024, height: 2980, position: "object-top" },
  { src: "/images/portfolio/shuro-profit.png", title: "損益・経営改善", alt: "就労支援経営ダッシュボードの損益・経営改善画面（デモ用ダミーデータ）", width: 2786, height: 1496, position: "object-center" },
  { src: "/images/portfolio/shuro-ai-consult.png", title: "AI経営相談", alt: "就労支援経営ダッシュボードのAI経営相談画面（デモ用ダミーデータ）", width: 3024, height: 1830, position: "object-top" },
];

const featureGroups = [
  { title: "経営管理", summary: "収支・工賃・利用状況を同じ画面で把握", items: [["経営ダッシュボード", "月間収支、収入・支出、工賃総額を一覧化。利用者数、通所率、開所日数、平均工賃、生産活動売上などのKPIもまとめて確認できます。"], ["現在地・KPI", "施設情報や基本報酬区分と実績値を照合し、事業所の現在地を把握。期間ごとの変化を経営判断につなげます。"], ["損益管理", "収入・経費・生産活動収支を整理し、黒字化に必要な条件や改善の入口を確認できます。"], ["年間予定・支払管理", "年度内の重要予定や支払スケジュールを管理し、経営上の対応漏れを防ぎます。"]] },
  { title: "制度・運営", summary: "制度要件と事業所運営上のリスクを可視化", items: [["制度・運営管理", "基本報酬、人員配置、加算・減算など、就労継続支援B型の運営に必要な確認事項を整理します。"], ["減算リスク確認", "未確認項目や制度上のリスクをダッシュボードに表示し、確認すべき事項へ移動できる構成です。"], ["工賃管理連携", "工賃管理システムの確定データを参照し、平均工賃、生産活動売上、利用実績などを経営指標として活用します。"], ["利用者・マスタ管理", "利用者情報と月次マスタなど、集計に必要な基礎情報を管理します。"]] },
  { title: "改善・AI", summary: "数値を改善行動と安全なAI相談へ接続", items: [["経営改善", "KPIや収支の集計結果から、改善テーマと目標アクションを検討できる導線を用意しています。"], ["損益シミュレーション", "利用者見込み、出勤率、開所予定日数などを用いて、黒字化に必要な条件を確認できます。"], ["AI経営相談", "赤字・収支改善、加算取得、減算リスク、人員配置、工賃・生産活動改善、来年度経営などの相談テーマから、外部AIに渡すプロンプトを作成します。"], ["個人情報を渡さない設計", "プロンプトには事業所全体の匿名集計値だけを使用。外部AIへの自動送信や自動連携は行わず、作成した文章を利用者が確認して使用します。"]] },
  { title: "日常業務・セキュリティ", summary: "日常管理とアクセス統制を同じ基盤で運用", items: [["日常業務", "小口現金・お弁当代、設定、利用者管理など、経営数値につながる日常業務を管理します。"], ["アクセス管理", "許可された利用者だけがアクセスできる認証・権限管理を前提とした構成です。"], ["データ保護", "画面表示とAI相談の双方で、必要以上の個人情報を扱わない運用を重視しています。"]] },
];

export default function ShuroDashboardShowcase() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [openGroups, setOpenGroups] = useState<Set<number>>(() => new Set([0]));
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const activeScreen = activeIndex === null ? null : screens[activeIndex];

  useEffect(() => {
    if (window.matchMedia("(min-width: 640px)").matches) {
      setOpenGroups(new Set([0, 1]));
    }
  }, []);

  useEffect(() => {
    if (!activeScreen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setActiveIndex(null); };
    window.addEventListener("keydown", closeOnEscape);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("keydown", closeOnEscape); openerRef.current?.focus(); };
  }, [activeScreen]);

  return (
    <div className="border-t border-slate-800 bg-slate-950/50">
      <div className="p-5 sm:p-8">
        <div className="grid gap-5 sm:grid-cols-3">
          {screens.map((screen, index) => (
            <figure key={screen.src} className="overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900 shadow-xl shadow-black/20">
              <button type="button" onClick={(event) => { openerRef.current = event.currentTarget; setActiveIndex(index); }} aria-label={`${screen.title}を拡大表示`} className="group block w-full text-left focus-visible:outline-emerald-400">
                <span className="relative block h-72 overflow-hidden sm:h-64 lg:h-80"><Image src={screen.src} alt={screen.alt} fill sizes="(max-width: 639px) calc(100vw - 5.5rem), (max-width: 1279px) 30vw, 370px" className={`object-cover ${screen.position} transition duration-300 group-hover:scale-[1.02]`} /><span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full border border-white/15 bg-slate-950/85 px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur"><Expand className="h-3.5 w-3.5" /> 拡大</span></span>
                <figcaption className="border-t border-slate-800 px-4 py-3 text-sm font-bold text-white">{screen.title}</figcaption>
              </button>
            </figure>
          ))}
        </div>
        <p className="mt-4 text-xs leading-5 text-slate-500">※画面はデモ用ダミーデータです。実利用者情報・顧客情報は含まれていません。</p>
      </div>

      <section className="border-t border-slate-800 p-5 sm:p-8" aria-labelledby="shuro-features-title">
        <div className="mb-6"><p className="detail-label">Product Scope</p><h4 id="shuro-features-title" className="text-xl font-bold text-white">主な実装機能</h4><p className="mt-2 text-sm leading-6 text-slate-400">経営判断から日常運用までを4つの領域に整理しています。</p></div>
        <div className="grid gap-4 lg:grid-cols-2">{featureGroups.map((group, index) => <details key={group.title} className="group rounded-2xl border border-slate-700/80 bg-slate-900/70" open={openGroups.has(index)} onToggle={(event) => { const isOpen = event.currentTarget.open; setOpenGroups((current) => { const next = new Set(current); if (isOpen) next.add(index); else next.delete(index); return next; }); }}><summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 marker:content-none"><span><span className="block font-bold text-white">{group.title}</span><span className="mt-1 block text-xs leading-5 text-slate-400">{group.summary}</span></span><ChevronDown className="h-5 w-5 shrink-0 text-emerald-400 transition group-open:rotate-180" /></summary><div className="space-y-4 border-t border-slate-800 px-5 py-5">{group.items.map(([title, description]) => <div key={title}><h5 className="text-sm font-bold text-emerald-300">{title}</h5><p className="mt-1 text-sm leading-6 text-slate-300">{description}</p></div>)}</div></details>)}</div>
      </section>

      {activeScreen && <div role="dialog" aria-modal="true" aria-labelledby="shuro-modal-title" className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-3 backdrop-blur-sm sm:p-6" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveIndex(null); }}><div className="flex h-[94dvh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl"><div className="flex shrink-0 items-center justify-between gap-4 border-b border-slate-700 px-4 py-3 sm:px-5"><div><p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">HumaniX Management / Demo screen</p><h3 id="shuro-modal-title" className="mt-1 font-bold text-white">{activeScreen.title}</h3></div><button ref={closeButtonRef} type="button" onClick={() => setActiveIndex(null)} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-white transition hover:border-emerald-500 hover:text-emerald-400" aria-label="拡大表示を閉じる"><X className="h-5 w-5" /></button></div><div className="min-h-0 flex-1 overflow-y-auto bg-slate-100 p-2 sm:p-4"><Image src={activeScreen.src} alt={activeScreen.alt} width={activeScreen.width} height={activeScreen.height} sizes="(max-width: 1152px) 100vw, 1152px" className="mx-auto h-auto w-full" priority /></div></div></div>}
    </div>
  );
}
