import { NavLink } from 'react-router-dom';
import './NavItem.css';

function NavItem( { to, name }) {
    return (
        <li className="navbar-link">
            <NavLink className={({isActive}) => isActive ? "active-link" : "default-link"} to={to}>{name}</NavLink>
        </li>
    );
}

export default NavItem;