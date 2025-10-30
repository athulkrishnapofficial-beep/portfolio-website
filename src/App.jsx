// --- In src/App.jsx ---

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'; // 1. IMPORT IT

function App() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Wrap all sections in a 'flex-grow' div to push footer to bottom */}
      <div className="flex-grow">
        <section id="home">
          <Hero />
        </section>

        <main className="container mx-auto px-4 py-16">
          
          <section id="about" className="mb-24">
            <About />
          </section>
          
          <section id="skills" className="mb-24">
            <Skills />
          </section>
          
          <section id="certificates" className="mb-24">
            <Certificates />
          </section>
          
          <section id="projects" className="mb-24">
            <Projects />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
          
        </main>
      </div>

      <Footer /> {/* 2. ADD IT AT THE END, OUTSIDE 'flex-grow' */}
    </div>
  );
}

export default App;