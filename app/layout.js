import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "English 8 — My Nationality",
  description: "An interactive English 8 learning website for Lesson 1: My Nationality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <footer className="site-footer">
          <span>English 8 · Lesson 1 · My Nationality</span>
          <span>Interactive learning project</span>
        </footer>
      </body>
    </html>
  );
}
