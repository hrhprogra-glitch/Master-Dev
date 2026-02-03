import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Expertise } from './sections/Expertise';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos el tiempo de carga de los assets (3.5s para que luzca el loader)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-brand-black min-h-screen">
      <AnimatePresence mode="wait">
        {loading ? (
          // El Loader se muestra solo mientras loading es true
          <Loader key="loader" />
        ) : (
          // El contenido principal aparece cuando loading es false
          <div key="content">
            <Navbar />
            <main>
              <Hero />
              <Expertise />
              {/* Aquí irán las siguientes secciones */}
            </main>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;