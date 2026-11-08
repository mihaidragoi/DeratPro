import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets:["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "DeratPro | Deratizare, dezinsecție, dezinfecție",
  description: "DeratPro oferă servicii profesionale de deratizare, dezinsecție și dezinfecție pentru locuința sau afacerea ta. Cere o ofertă gratuită.",
};

const themeScript =`
  try {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (saved === "dark" || (!saved && prefersDark)) {
      document.documentElement.classList.add("dark");
    }
  } catch (e) {}
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ro" suppressHydrationWarning className={`${jakarta.variable} antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
<body>
  <div className="fixed right-4 top-4 z-50 flex gap-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>
      {children}
    </body>
  </html>
  );
}