import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"
import Login from "./pages/login/Login";
import Home from "./pages/home";
import AddPlace from "./pages/addPlace";
import PlacesDetails from "./pages/placesGrid";
import Nav from "./components/Nav";
import HostorStay from "./pages/host";
import { AuthContextProvider } from "./context/authContext";
import Picture from "./pages/upload/picture";
import AnotherNav from "./components/anotherNav";




function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        {/* <AnotherNav></AnotherNav> */}
        <Router>
          <Nav />
          
          {/*<div style={{borderRadius:"180px", backgroundColor:"darkblue", display:"inline-flex", padding:"10px"}}>A</div>*/}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/addPlace" element={<AddPlace />} />
            <Route path="/placeDetails" element={<PlacesDetails />} />
            <Route path="/host" element={<HostorStay/>} />
            <Route path="/picture" element={<Picture/>}></Route>
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>

  );
}

export default App;