import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
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
        <div className="btn-group">
          <Navbar/>
        </div>        
        <hr/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/employee" element={<Employee/>}/>
            <Route path="/employee/:id" element={<Register/>} /> 
            <Route path="*" element={<NotFound/>}/>
          </Routes>
          
        
      </div>
    </Router>
  );
}

export default App;
