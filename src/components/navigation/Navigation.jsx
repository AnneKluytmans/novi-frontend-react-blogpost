import NavItem from "../navLink/NavItem.jsx";
import Logo from '../../assets/logo-medium.png';
import './Navigation.css';


function Navigation() {
    return (
        <>
            <nav className="navbar outer-content-container">
                <div className="inner-content-container">
                    <img src={Logo} alt="Blogventure logo" className="navbar-logo"/>
                    <ul className="navbar-links">
                        <NavItem to="/" name="Home"/>
                        <NavItem to="/new-post" name="Nieuwe post"/>
                        <NavItem to="/blog-overview" name="Alle posts"/>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navigation;