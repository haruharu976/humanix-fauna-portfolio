"use client";

import Image from "next/image";
import { ChevronDown, Expand, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const screens = [
  { src: "/images/portfolio/smartcare-dashboard.png", title: "営業ダッシュボード", description: "営業活動の実績を集計・可視化。訪問件数、ユニーク訪問先数、好反応率、稼働日数、接触・反応・施設種別の内訳を確認できます。", alt: "スマートケアオフィスの営業ダッシュボード画面（デモ用ダミーデータ）", width: 2942, height: 1656, position: "object-center" },
  { src: "/images/portfolio/smartcare-sales-map.png", title: "営業マップ", description: "医療・福祉事業所を地図上に可視化。施設検索や絞り込みを行い、訪問状況の確認と営業ルートの検討に活用できます。", alt: "スマートケアオフィスの営業マップ画面（デモ用ダミーデータ）", width: 2902, height: 1640, position: "object-center" },
  { src: "/images/portfolio/smartcare-office-register.png", title: "営業先・事業所管理", description: "Googleマップ検索から営業先候補を探し、施設名、種別、電話番号、住所、営業優先度、メモなどを登録・管理できます。", alt: "スマートケアオフィスの営業先・事業所登録画面（デモ用ダミーデータ）", width: 2796, height: 1658, position: "object-top" },
];

const featureGroups = [
  { title: "営業活動・分析", summary: "日々の接触記録を営業状況の把握へ接続", items: [["営業ダッシュボード", "訪問件数、ユニーク訪問先数、好反応率、稼働日数、接触方法、反応状況、施設種別ごとの訪問状況を集計・可視化します。"], ["記録入力", "訪問・電話・FAX等の接触方法、営業内容、結果、次回アクションを記録します。"], ["履歴", "過去の営業活動を一覧表示し、事業所・担当者・期間で絞り込んで確認できます。"]] },
  { title: "営業先・地図管理", summary: "営業先情報と地図、訪問ルートを一元管理", items: [["事業所管理", "居宅介護支援、相談支援、病院等の営業対象事業所を登録・編集・検索し、営業優先度やメモを管理します。"], ["Googleマップ検索", "Googleマップから施設候補を検索し、施設情報を確認して登録フォームへ反映できます。"], ["営業マップ", "登録事業所を地図上に表示し、施設種別や訪問済み・未訪問で絞り込めます。"], ["ルート作成", "地図から訪問先を選択・並べ替え、現在地を出発点とするGoogleマップ経路を開けます。ルート名を付けた保存・再編集にも対応します。"]] },
  { title: "フォロー・依頼管理", summary: "継続対応と訪問看護依頼の見落としを防止", items: [["依頼一覧", "連携先から受けた訪問看護の新規依頼を登録し、依頼元、希望内容、担当情報等を一覧で確認します。"], ["フォロー", "事業所ごとに次回日、次回アクション、優先度、申し送りを登録。期日順の一覧と完了状態を管理します。"], ["通知", "新規依頼、フォロー期日前日、ステータスが契約見込みになったタイミングで、設定に応じた通知を行います。"]] },
  { title: "運用・アクセス管理", summary: "承認制アクセスと管理者向け運用機能", items: [["ユーザー承認", "新規ユーザーを管理者が承認し、スタッフ／管理者のロールを設定します。未承認ユーザーは承認待ち画面へ誘導されます。"], ["通知設定", "Slack、メール通知先と、新規依頼・フォロー期日・契約見込みの通知種別を管理者が設定します。"], ["削除データ管理", "削除済みの事業所と営業記録を確認し、完全削除までの30日以内であれば復元できます。"], ["使い方ガイド", "各機能の説明をスタッフ向け・管理者向けに整理し、対象画面へ直接移動できます。"]] },
];

export default function SmartCareShowcase() {
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
        <div className="grid gap-5 sm:grid-cols-3">{screens.map((screen, index) => <figure key={screen.src} className="overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900 shadow-xl shadow-black/20"><button type="button" onClick={(event) => { openerRef.current = event.currentTarget; setActiveIndex(index); }} aria-label={`${screen.title}を拡大表示`} className="group block w-full text-left focus-visible:outline-emerald-400"><span className="relative block h-72 overflow-hidden sm:h-64 lg:h-80"><Image src={screen.src} alt={screen.alt} fill sizes="(max-width: 639px) calc(100vw - 5.5rem), (max-width: 1279px) 30vw, 370px" className={`object-cover ${screen.position} transition duration-300 group-hover:scale-[1.02]`} /><span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full border border-white/15 bg-slate-950/85 px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur"><Expand className="h-3.5 w-3.5" /> 拡大</span></span><figcaption className="border-t border-slate-800 px-4 py-4"><span className="block text-sm font-bold text-white">{screen.title}</span><span className="mt-1.5 block text-xs leading-5 text-slate-400">{screen.description}</span></figcaption></button></figure>)}</div>
        <p className="mt-4 text-xs leading-5 text-slate-500">※画面はデモ用ダミーデータです。実在する営業先の非公開情報・個人情報は含まれていません。</p>
      </div>

      <section className="border-t border-slate-800 p-5 sm:p-8" aria-labelledby="smartcare-features-title">
        <div className="mb-6"><p className="detail-label">Product Scope</p><h4 id="smartcare-features-title" className="text-xl font-bold text-white">主な実装機能</h4><p className="mt-2 text-sm leading-6 text-slate-400">実装コードで確認できた機能を4つの領域に整理しています。</p></div>
        <div className="grid gap-4 lg:grid-cols-2">{featureGroups.map((group, index) => <details key={group.title} className="group rounded-2xl border border-slate-700/80 bg-slate-900/70" open={openGroups.has(index)} onToggle={(event) => { const isOpen = event.currentTarget.open; setOpenGroups((current) => { const next = new Set(current); if (isOpen) next.add(index); else next.delete(index); return next; }); }}><summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 marker:content-none"><span><span className="block font-bold text-white">{group.title}</span><span className="mt-1 block text-xs leading-5 text-slate-400">{group.summary}</span></span><ChevronDown className="h-5 w-5 shrink-0 text-emerald-400 transition group-open:rotate-180" /></summary><div className="space-y-4 border-t border-slate-800 px-5 py-5">{group.items.map(([title, description]) => <div key={title}><h5 className="text-sm font-bold text-emerald-300">{title}</h5><p className="mt-1 text-sm leading-6 text-slate-300">{description}</p></div>)}</div></details>)}</div>
      </section>

      {activeScreen && <div role="dialog" aria-modal="true" aria-labelledby="smartcare-modal-title" className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-3 backdrop-blur-sm sm:p-6" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveIndex(null); }}><div className="flex h-[94dvh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl"><div className="flex shrink-0 items-center justify-between gap-4 border-b border-slate-700 px-4 py-3 sm:px-5"><div><p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Smart Care Office / Demo screen</p><h3 id="smartcare-modal-title" className="mt-1 font-bold text-white">{activeScreen.title}</h3></div><button ref={closeButtonRef} type="button" onClick={() => setActiveIndex(null)} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-white transition hover:border-emerald-500 hover:text-emerald-400" aria-label="拡大表示を閉じる"><X className="h-5 w-5" /></button></div><div className="min-h-0 flex-1 overflow-y-auto bg-slate-100 p-2 sm:p-4"><Image src={activeScreen.src} alt={activeScreen.alt} width={activeScreen.width} height={activeScreen.height} sizes="(max-width: 1152px) 100vw, 1152px" className="mx-auto h-auto w-full" priority /></div></div></div>}
    </div>
  );
}
