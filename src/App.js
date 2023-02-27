import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom"
import Login from "./pages/login/Login";
import Home  from "./pages/home/Home";

function App() {
  return (
   <Router>
    <nav>
      <NavLink to="/">Koogle</NavLink>
      <NavLink to="/login">Sign In</NavLink>
    </nav>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login/>} />
    </Routes>
   </Router>
  );
}

export default App;
