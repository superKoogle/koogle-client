import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/login/Login";
import Home from "./pages/home";
import AddPlace from "./pages/addPlace";
import PlacesDetails from "./pages/placesGrid";
import Nav from "./components/Nav";
import HostorStay from "./pages/host";
import { AuthContextProvider } from "./context/authContext";
import Manager from "./pages/manager";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { indigo } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[700],
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <AuthContextProvider>
        {/* <AnotherNav></AnotherNav> */}
        <Router>
          {/* <Box sx={{minHeight:"100vh",display:"flex", flexGrow:1,flexFlow:"column"}}> */}
            <Nav />
            {/* <Box sx={{display:"flex", flexGrow:1}} > */}
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/addPlace" element={<AddPlace />} />
                  <Route path="/placeDetails" element={<PlacesDetails />} />
                  <Route path="/host" element={<HostorStay/>} />
                  <Route path="/manage" element={<Manager/>}/>
              </Routes>
            {/* </Box > */}
            {/* </Box > */}
        </Router>
      </AuthContextProvider>
      </ThemeProvider>
    </div>

  );
}

export default App;