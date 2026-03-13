import './HeroImg.css';
import HeroDarkXXSmall from '../../assets/Picflow Images Mar 13/hero-dark@0.1x.avif';
import HeroDarkXSmall from '../../assets/Picflow Images Mar 13/hero-dark@0.2x.avif';
import HeroDarkSmall from '../../assets/Picflow Images Mar 13/hero-dark@0.25x.avif';
import HeroDarkMedium from '../../assets/Picflow Images Mar 13/hero-dark@0.5x.avif';
import HeroDark from '../../assets/Picflow Images Mar 13/HeroDark.avif';
import HeroLightXXSmall from '../../assets/Picflow Images Mar 13/hero-light@0.1x.avif';
import HeroLightXSmall from '../../assets/Picflow Images Mar 13/hero-light@0.2x.avif';
import HeroLightSmall from '../../assets/Picflow Images Mar 13/hero-light@0.25x.avif';
import HeroLightMedium from '../../assets/Picflow Images Mar 13/hero-light@0.5x.avif';
import HeroLight from '../../assets/Picflow Images Mar 13/HeroLight.avif';

// import HeroDarkXXSmall from '../../assets/hero-dark@0.1x.jpg';
// import HeroDarkXSmall from '../../assets/hero-dark@0.2x.jpg'
// import HeroDarkSmall from '../../assets/hero-dark@0.25x.jpg';
// import HeroDarkMedium from '../../assets/hero-dark@0.5x.jpg';
// import HeroDark from '../../assets/HeroDark.jpg';
// import HeroLightXXSmall from '../../assets/hero-light@0.1x.jpg';
// import HeroLightXSmall from '../../assets/hero-light@0.2x.jpg'
// import HeroLightSmall from '../../assets/hero-light@0.25x.jpg';
// import HeroLightMedium from '../../assets/hero-light@0.5x.jpg';
// import HeroLight from '../../assets/HeroLight.jpg';

export default function HeroImg({ theme }) {
    const isDark = theme === 'dark';

    const sources = isDark ?
        [
            { src: HeroDarkXXSmall, width: 400 },
            { src: HeroDarkXSmall, width: 800 },
            { src: HeroDarkSmall, width: 1000 },
            { src: HeroDarkMedium, width: 2000 },
            { src: HeroDark, width: 4000 }
        ] :
        [
            { src: HeroLightXXSmall, width: 400 },
            { src: HeroLightXSmall, width: 800 },
            { src: HeroLightSmall, width: 1000 },
            { src: HeroLightMedium, width: 2000 },
            { src: HeroLight, width: 4000 }
        ];
    
    const defaultSrc = sources[0].src;

    const srcSet = sources.map(source => `${source.src} ${source.width}w`).join(', ');

    const altText = isDark ?
        'Hero Image showing a desk with a computer displaying code software at night time' :
        'Hero Image showing a desk with a computer displaying code software at day time';

    return (
        <img className="hero-image"
         src={defaultSrc}
        srcSet={srcSet} 
        sizes="(max-width: 768px) 380px, 65vw"
        alt={altText} 
        fetchPriority="high"/>
    );
}