import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"
import Login from "./pages/login/Login";
import Home from "./pages/home";
import AddPlace from "./pages/addPlace";
import PlacesDetails from "./pages/placesGrid";
import Nav from "./components/Nav";
import HostorStay from "./pages/host";
import { AuthContextProvider } from "./context/authContext"



function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
          <Nav />
          {/*<div style={{borderRadius:"180px", backgroundColor:"darkblue", display:"inline-flex", padding:"10px"}}>A</div>*/}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/addPlace" element={<AddPlace />} />
            <Route path="/placeDetails" element={<PlacesDetails />} />
            <Route path="/host" element={<HostorStay />} />
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>

  );
}

export default App;