// src/app/page.tsx
import Introduction from "@/components/Introduction";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Introduction />
      <Skills />
      <Experience />
      <Footer />
    </main>
  );
}