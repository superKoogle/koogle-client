import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom"
import Login from "./pages/login/Login";
import Home from "./pages/home";
import AddPlace from "./pages/addPlace";
import PlacesDetails from "./pages/placesDetails";
import Nav from "./components/Nav";
//import Host from "./pages/host/Host";

function App() {
  return (
   <Router>
    <Nav/>
    {/*<div style={{borderRadius:"180px", backgroundColor:"darkblue", display:"inline-flex", padding:"10px"}}>A</div>*/}
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/addPlace" element={<AddPlace/>}/>
      <Route path="/placeDetails" element={<PlacesDetails/>}/>
   {/*   <Route path="/host" element={<Host/>}/>
*/}    </Routes>
   </Router>
  );
}

export default App;