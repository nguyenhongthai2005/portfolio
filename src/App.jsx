import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import DeepDive from './sections/DeepDive';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    // Simple Intersection Observer for reveal animations
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="font-body-md text-on-surface">
      <Navbar />
      <main>
        <Hero />
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop space-y-32 py-20">
          <Skills />
          <Projects />
          <DeepDive />
          <Experience />
          <Contact />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
