
import ResumeContainer from './components/containers/ResumeContainer';
import RepoContainer from './components/containers/RepoContainer';
import ProjectContainer from './components/containers/ProjectContainer';
import HeaderContainer from './components/containers/HeaderContainer';
import Hero from './assets/HeroDark.jpg';
import HeroLight from './assets/HeroLight.jpg';
import HeroImg from './components/media/HeroImg.jsx';
import Footer from './components/containers/FooterContainer.jsx';
import Home from './components/pages/HomePage.jsx';
import Portfolio from './components/pages/PortfolioPage.jsx'
import About from './components/pages/AboutPage.jsx';
import Contact from './components/pages/ContactPage.jsx';
import {Routes, Route} from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <HeroImg filepath={Hero} alttext="Hero Image" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}


