import './HeaderNav.css';

export default function HeaderNav({ variant = 'header' }) {
    return (
        <nav className={`header-nav ${variant === 'footer' ? 'header-nav--footer' : ''}`}>
            <ul className="nav-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
            </ul>
        </nav>
    );
}