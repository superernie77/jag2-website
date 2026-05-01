import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "JAG — Java Development, Architecture & QA Consulting",
  description: "JAG delivers senior-level Java development, software architecture, quality assurance and IT training for mid-size companies. Reliable. Expert. End-to-end.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="jag-page">
          <Nav />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
