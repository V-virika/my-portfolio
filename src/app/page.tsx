import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Publications from '@/components/Publications';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#0f172a] flex flex-col justify-between selection:bg-[#0f172a] selection:text-white">
      <Navbar />
      <div className="flex-1 space-y-0">
        <Hero />
        <About />
        <Projects />
        <Publications />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
