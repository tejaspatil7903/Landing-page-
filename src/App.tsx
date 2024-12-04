import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Vision from './components/Vision';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Force a re-render after initial mount to ensure proper layout
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Vision />
      </main>
      <Footer />
    </div>
  );
}

export default App;