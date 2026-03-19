import './HeaderNav.css';
import { NavLink } from 'react-router-dom';

// Not using header as the same is also used for footer
export default function HeaderNav({ variant = 'header' }) {
    return (
        <nav className={`header-nav ${variant === 'footer' ? 'header-nav--footer' : ''}`}>
            <ul className="nav-list">
                <li>
                    <NavLink
                        to="/"
                        end
                        className="nav-link"
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/portfolio"
                        className="nav-link"
                    >
                        Portfolio
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className="nav-link"
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className="nav-link"
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}