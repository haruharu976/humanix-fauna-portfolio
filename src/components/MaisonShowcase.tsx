"use client";

import Image from "next/image";
import { ChevronDown, Expand, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const screens = [
  {
    src: "/images/portfolio/screencapture-kouchin-syub-maisai-vercel-app-2026-09-28-15_42_14.png",
    title: "工賃・経営ダッシュボード",
    alt: "工賃管理システムの工賃・経営ダッシュボード画面（デモ用ダミーデータ）",
    width: 3024,
    height: 8194,
    position: "object-top",
  },
  {
    src: "/images/portfolio/screencapture-kouchin-syub-maisai-vercel-app-2026-09-28-15_42_31.png",
    title: "通所予定管理",
    alt: "工賃管理システムの通所予定管理画面（デモ用ダミーデータ）",
    width: 3024,
    height: 2626,
    position: "object-top",
  },
  {
    src: "/images/portfolio/screencapture-kouchin-syub-maisai-vercel-app-2026-09-28-15_42_53.png",
    title: "スタッフ勤務・配置管理",
    alt: "工賃管理システムのスタッフ勤務・配置管理画面（デモ用ダミーデータ）",
    width: 3024,
    height: 4226,
    position: "object-[center_88%]",
  },
];

const featureGroups = [
  {
    title: "業務管理",
    summary: "日々の通所・勤務・食事・連携業務を一元化",
    items: [
      ["ホーム", "基本報酬や事業所運営に必要な設定・管理。"],
      ["操作ガイド", "単なる手順書ではなく、「行いたい作業」から必要な機能を探し、その画面へ直接移動できるナビゲーション機能。"],
      ["通所予定", "利用者ごとの通所・在宅・施設外就労等の予定を月単位で管理。食事予定の管理にも対応。"],
      ["スタッフ勤務", "スタッフの出勤予定管理、常勤換算の算定、見学・体験者の管理、日割り利用者人数等を管理。"],
      ["食事管理", "食事提供の管理に加え、加算に必要な身体測定・BMI管理、食事請求書の自動作成・印刷に対応。"],
      ["医療連携", "医療連携に必要な情報管理、順番表、実績表等を管理。"],
      ["生産活動", "利用者ごとの生産活動売上を管理。作業内容は23項目以上に対応可能。"],
      ["交通費", "自治体等の交通費助成を利用する対象者の交通費を管理。"],
    ],
  },
  {
    title: "工賃・請求",
    summary: "集計・監査から明細印刷、支給準備までを接続",
    items: [
      ["工賃集計", "受給量の管理、利用者ごとの工賃管理。実績表Excelから時間数・通所日数・在宅日数など必要な情報のみ取得し、不要な個人データは取り込まない設計。食事・医療連携等の実績との不一致を確認する監査機能により、加算の取りこぼしや不要な算定の可能性も確認できます。"],
      ["工賃明細", "利用者へ渡す工賃明細書を作成。生産活動売上や工賃等を含み、日々の入力が正しければ毎月データを作り直さず、そのまま印刷可能。"],
      ["ダッシュボード", "平均工賃、平均生産活動売上、開所日数等を年度単位で管理。行政への年度報告時に必要な数値を確認しやすい構成。"],
      ["両替", "工賃支給時に必要となる紙幣・硬貨の金種別必要枚数を自動集計。"],
    ],
  },
  {
    title: "支援・法定管理",
    summary: "基礎情報、支援計画、委員会・研修・BCPを管理",
    items: [
      ["マスタ管理", "利用者・スタッフ等、各機能で使用する基礎情報を一元管理。"],
      ["支援計画進捗", "支援計画等、必要書類の作成・更新状況を管理。"],
      ["委員会・研修・BCP", "福祉事業所で必要となる委員会、研修、BCP関連の実施状況を管理。"],
    ],
  },
  {
    title: "セキュリティ",
    summary: "Google認証、3段階権限、ログイン履歴を管理",
    items: [
      ["アクセス管理", "Google認証を使用し、許可したアカウントのみアクセス可能。閲覧者・編集者・管理者の権限を設定し、ログイン履歴・ログイン時刻等も管理。"],
    ],
  },
];

export default function MaisonShowcase() {
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
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      openerRef.current?.focus();
    };
  }, [activeScreen]);

  const openScreen = (index: number, button: HTMLButtonElement) => {
    openerRef.current = button;
    setActiveIndex(index);
  };

  return (
    <div className="border-t border-slate-800 bg-slate-950/50">
      <div className="p-5 sm:p-8">
        <div className="grid gap-5 sm:grid-cols-3">
          {screens.map((screen, index) => (
            <figure key={screen.src} className="overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900 shadow-xl shadow-black/20">
              <button type="button" onClick={(event) => openScreen(index, event.currentTarget)} aria-label={`${screen.title}を拡大表示`} className="group block w-full text-left focus-visible:outline-emerald-400">
                <span className="relative block h-72 overflow-hidden sm:h-64 lg:h-80">
                  <Image src={screen.src} alt={screen.alt} fill sizes="(max-width: 639px) calc(100vw - 5.5rem), (max-width: 1279px) 30vw, 370px" className={`object-cover ${screen.position} transition duration-300 group-hover:scale-[1.02]`} />
                  {screen.position === "object-top" && <span aria-hidden="true" className="pointer-events-none absolute left-0 top-0 w-[18%] bg-[#1d70b7] [aspect-ratio:3/1]" />}
                  <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full border border-white/15 bg-slate-950/85 px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur"><Expand className="h-3.5 w-3.5" /> 拡大</span>
                </span>
                <figcaption className="border-t border-slate-800 px-4 py-3 text-sm font-bold text-white">{screen.title}</figcaption>
              </button>
            </figure>
          ))}
        </div>
        <p className="mt-4 text-xs leading-5 text-slate-500">※画面はデモ用ダミーデータです。実利用者情報は含まれていません。</p>
      </div>

      <section className="border-t border-slate-800 p-5 sm:p-8" aria-labelledby="maison-features-title">
        <div className="mb-6"><p className="detail-label">Product Scope</p><h4 id="maison-features-title" className="text-xl font-bold text-white">主な実装機能</h4><p className="mt-2 text-sm leading-6 text-slate-400">4つの業務領域に整理しています。各項目を開くと詳細を確認できます。</p></div>
        <div className="grid gap-4 lg:grid-cols-2">
          {featureGroups.map((group, index) => (
            <details
              key={group.title}
              className="group rounded-2xl border border-slate-700/80 bg-slate-900/70"
              open={openGroups.has(index)}
              onToggle={(event) => {
                const isOpen = event.currentTarget.open;
                setOpenGroups((current) => {
                  const next = new Set(current);
                  if (isOpen) next.add(index);
                  else next.delete(index);
                  return next;
                });
              }}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 marker:content-none"><span><span className="block font-bold text-white">{group.title}</span><span className="mt-1 block text-xs leading-5 text-slate-400">{group.summary}</span></span><ChevronDown className="h-5 w-5 shrink-0 text-emerald-400 transition group-open:rotate-180" /></summary>
              <div className="space-y-4 border-t border-slate-800 px-5 py-5">{group.items.map(([title, description]) => <div key={title}><h5 className="text-sm font-bold text-emerald-300">{title}</h5><p className="mt-1 text-sm leading-6 text-slate-300">{description}</p></div>)}</div>
            </details>
          ))}
        </div>
      </section>

      {activeScreen && (
        <div role="dialog" aria-modal="true" aria-labelledby="maison-modal-title" className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-3 backdrop-blur-sm sm:p-6" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveIndex(null); }}>
          <div className="flex h-[94dvh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">
            <div className="flex shrink-0 items-center justify-between gap-4 border-b border-slate-700 px-4 py-3 sm:px-5"><div><p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">工賃管理システム / Demo screen</p><h3 id="maison-modal-title" className="mt-1 font-bold text-white">{activeScreen.title}</h3></div><button ref={closeButtonRef} type="button" onClick={() => setActiveIndex(null)} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-white transition hover:border-emerald-500 hover:text-emerald-400" aria-label="拡大表示を閉じる"><X className="h-5 w-5" /></button></div>
            <div className="min-h-0 flex-1 overflow-y-auto bg-slate-100 p-2 sm:p-4"><div className="relative mx-auto w-full"><Image src={activeScreen.src} alt={activeScreen.alt} width={activeScreen.width} height={activeScreen.height} sizes="(max-width: 1152px) 100vw, 1152px" className="h-auto w-full" priority /><span aria-hidden="true" className="pointer-events-none absolute left-0 top-0 w-[18%] bg-[#1d70b7] [aspect-ratio:3/1]" /></div></div>
          </div>
        </div>
      )}
    </div>
  );
}
