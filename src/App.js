import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom"
import Login from "./pages/login/Login";
import Home from "./pages/home";
//import Host from "./pages/host/Host";

function App() {
  return (
   <Router>
    <nav>
      <NavLink to="/">Koogle</NavLink>
      <NavLink to="/login">Sign In</NavLink>
      <NavLink to ="/host">Host</NavLink>
    </nav>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login/>} />
   {/*   <Route path="/host" element={<Host/>}/>
*/}    </Routes>
   </Router>
  );
}

export default App;
