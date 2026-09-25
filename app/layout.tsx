import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Header, Footer } from "@/components/site-shell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://northstar-energy-demo.vercel.app"),
  title: { default: "Northstar Energy Group | Independent Energy, Considered for Tomorrow", template: "%s | Northstar Energy Group" },
  description: "An independent corporate energy website concept exploring connected infrastructure, customer services and a more considered energy future.",
  openGraph: { type: "website", title: "Northstar Energy Group", description: "Independent energy, considered for tomorrow.", siteName: "Northstar Energy Group" },
  twitter: { card: "summary_large_image", title: "Northstar Energy Group", description: "Independent energy, considered for tomorrow." },
  robots: { index: true, follow: true },
  verification: { google: "pUBx2R-vedHE10NqbN-TkeAipsnXurQ08Icj4qQZAjY" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col"><a className="skip-link" href="#main-content">Skip to content</a><Header />{children}<Footer /></body>
    </html>
  );
}
