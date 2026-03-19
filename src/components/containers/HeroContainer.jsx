import HeroImg from '../media/HeroImg';
import './HeroContainer.css';
import ThemeSwitch from '../eastereggs/ThemeSwitch.jsx';

export default function HeroContainer({ theme, setTheme }) {


    return (
        <section className="hero-container">
            <ThemeSwitch theme={theme} setTheme={setTheme} />
            <HeroImg theme={theme} />
        </section>
    );
}