import { NavLink } from "react-router-dom"
import '../Styles/navbar.css'
const Navbar = () => {
    return (
        <>
            <ul>
                <li><NavLink  to="/">Home</NavLink></li>
                <li><NavLink to="/employee">Perfiles</NavLink></li>
                <li>
                    <NavLink href="#">Nosotros</NavLink>
                    <ul className="dropdown">
                        <li><NavLink to="#">Servicios</NavLink></li>
                        <li><NavLink to="#">Call Center</NavLink></li>
                        <li><NavLink to="#">Contacto</NavLink></li>
                    </ul>
                </li>
            </ul>
            
                
                
            
        </>
    )
}

export default Navbar