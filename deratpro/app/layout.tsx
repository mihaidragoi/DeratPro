import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets:["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "DeratPro | Deratizare, dezinsecție, dezinfecție",
  description: "DeratPro oferă servicii profesionale de deratizare, dezinsecție și dezinfecție pentru locuința sau afacerea ta. Cere o ofertă gratuită.",
};

export default function RootLayout({children}: LayoutProps<"/">) {
  return (
    <html lang="ro" className={`${jakarta.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}