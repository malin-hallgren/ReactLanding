import './HeroImg.css';
import HeroDark from '../../assets/HeroDark.jpg';
import HeroLight from '../../assets/HeroLight.jpg';

export default function HeroImg({ theme }) {
    const filepath = theme === 'dark' ? HeroDark : HeroLight;
    const alttext = theme === 'dark' ? 'Hero Image showing a desk with a computer displaying code software at night time' : 'Hero Image showing a desk with a computer displaying code software at day time';

    return (
        <img className="hero-image" src={filepath} alt={alttext} />
    );
}