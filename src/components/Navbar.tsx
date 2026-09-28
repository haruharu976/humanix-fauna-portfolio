"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, Sparkles, X } from "lucide-react";

const links = [["Work", "#projects"], ["Own Projects", "#own-projects"], ["AI Development", "#ai-development"], ["About", "#about"], ["Demo / GitHub", "#access"]];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/70 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="group flex items-center gap-3" aria-label="HumaniX Fauna トップへ"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 shadow-lg shadow-emerald-500/20 transition group-hover:scale-105"><Sparkles className="h-5 w-5 fill-slate-950" /></span><span><span className="block text-lg font-bold tracking-tight text-white">HumaniX <b className="text-emerald-400">Fauna</b></span><span className="block text-[9px] font-semibold tracking-[0.18em] text-slate-500">PORTFOLIO & WORKS</span></span></a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-300 lg:flex" aria-label="メインナビゲーション">{links.map(([label, href]) => <a key={href} href={href} className="transition hover:text-emerald-400">{label}</a>)}</nav>
        <a href="#access" className="hidden items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-emerald-400 md:inline-flex">実績を確認 <ArrowUpRight className="h-4 w-4" /></a>
        <button type="button" aria-label="メニューを開閉" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-300 lg:hidden">{isOpen ? <X /> : <Menu />}</button>
      </div>
      {isOpen && <nav className="flex flex-col gap-1 border-t border-slate-800 bg-slate-900 px-6 py-4 lg:hidden" aria-label="モバイルナビゲーション">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setIsOpen(false)} className="rounded-lg px-3 py-3 font-medium text-slate-200 hover:bg-slate-800 hover:text-emerald-400">{label}</a>)}</nav>}
    </header>
  );
}
