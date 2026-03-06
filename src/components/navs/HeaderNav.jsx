import './HeaderNav.css';
import { NavLink } from 'react-router-dom';

export default function HeaderNav({ variant = 'header' }) {
    return (
        <nav className={`header-nav ${variant === 'footer' ? 'header-nav--footer' : ''}`}>
            <ul className="nav-list">
                <li>
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/portfolio"
                        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                    >
                        Portfolio
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}