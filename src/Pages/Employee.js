import { Link } from "react-router-dom"

const Employee = () => {

    
    return (
        <div>
            <h1>Employees</h1>
            <link to={`employee/`}>Usuario</link>
            <Link to="/">Home</Link>
        </div>
    )
}


export default Employee