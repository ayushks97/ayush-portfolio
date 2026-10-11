import AmbientBackground from '@/components/AmbientBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import AboutBento from '@/sections/AboutBento';
import Certifications from '@/sections/Certifications';
import Experience from '@/sections/Experience';
import Projects from '@/sections/Projects';
import Skills from '@/sections/Skills';
import Contact from '@/sections/Contact';

function App() {
  return (
    <div className="relative min-h-screen">
      <AmbientBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <AboutBento />
        <Certifications />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
