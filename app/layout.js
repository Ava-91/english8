import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "English 8 — Learn, Explore, Practise",
  description: "A colorful interactive English 8 learning website with seven lessons, vocabulary, speaking patterns, and practice.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <footer className="site-footer">
          <span>English 8 · Seven lessons · Learn by doing</span>
          <span>Interactive learning project</span>
        </footer>
      </body>
    </html>
  );
}
