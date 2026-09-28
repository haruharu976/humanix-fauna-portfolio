import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HumaniX Fauna | 福祉・医療 × AI × Web Development",
  description: "医療・福祉の現場経験を活かし、要件整理から開発・運用改善まで一貫して行うHumaniX Faunaの実績ポートフォリオ。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
