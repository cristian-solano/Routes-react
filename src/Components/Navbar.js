import { NavLink } from "react-router-dom"
import '../Styles/navbar.css'
const Navbar = () => {
    return (
        <>
            <ul>
                <li>
                    <NavLink className={({isActive}) => (isActive ? "active" : "")}  to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => (isActive ? "active" : "")} to="/employee">Perfiles</NavLink>
                </li>
                
            </ul>
        </>
    )
}

export default Navbar