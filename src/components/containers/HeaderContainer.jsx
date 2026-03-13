import HeaderNav from "../navs/HeaderNav";
import './HeaderContainer.css';
import LogoDark from '../../assets/LogoDark.svg';
import LogoLight from '../../assets/LogoLight.svg';

export default function HeaderContainer({ theme }) {
    const logo = theme === 'dark' ? LogoDark : LogoLight;
    
    return (
        <header className="header-container">
            <img className="header-logo" src={logo} alt="The website's logo, a handwritten 'MH'"/>
            <HeaderNav />
        </header>
    );
}