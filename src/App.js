import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Employee from "./Pages/Employee";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Register from "./Pages/Register";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="navbar">
          <Navbar/>
        </div>        
        <hr/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/employee" element={<Employee/>}/>
            <Route path="/employee/register" element={<Register/>} /> 
            <Route path="*" element={<NotFound/>}/>
          </Routes>
          
        
      </div>
    </Router>
  );
}

export default App;
