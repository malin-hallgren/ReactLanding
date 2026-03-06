import HeaderNav from "../navs/HeaderNav";
import './HeaderContainer.css';
import logo from '../../assets/LogoDark.png';

export default function HeaderContainer() {
    return (
        <div className="header-container">
            <img className="header-logo" src={logo} alt="Logo"/>
            <HeaderNav />
        </div>
    );
}