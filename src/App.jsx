
import { useEffect, useState } from 'react';
import HeaderContainer from './components/containers/HeaderContainer';
import HeroContainer from './components/containers/HeroContainer';
import Footer from './components/containers/FooterContainer.jsx';
import Home from './components/pages/HomePage.jsx';
import Portfolio from './components/pages/PortfolioPage.jsx';
import About from './components/pages/AboutPage.jsx';
import Contact from './components/pages/ContactPage.jsx';
import { Routes, Route } from 'react-router-dom';

export default function App() {

  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('light', theme === 'light');
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);


  return (
    <div className="App">
      <HeaderContainer theme={theme} />
      <HeroContainer theme={theme} setTheme={setTheme} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}


