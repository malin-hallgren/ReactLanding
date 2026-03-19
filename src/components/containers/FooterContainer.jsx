import Nav from "../navs/HeaderNav.jsx";
import './FooterContainer.css';

export default function FooterContainer() {

    return (
        <>
            <footer className="footer">
                <p>&copy; Malin Hallgren 2026</p>
                <Nav variant="footer" />
            </footer>
        </>
    );
}