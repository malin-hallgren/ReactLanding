import './HeroImg.css';


export default function HeroImg({filepath, alttext}) {
    return (
        <img className="hero-image" src={filepath} alt={alttext} />
    );
}