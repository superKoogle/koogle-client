import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Login from '../pages/login/Login';
// import Login from "./pages/login/Login";
import Home from "../pages/home";
import AddPlace from "../pages/addPlace";
import PlacesDetails from "../pages/placesGrid";
import HostorStay from "../pages/host";

import {
  MemoryRouter,
  Link,
  matchPath,
  useLocation,
} from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

function Router(props) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location="/koogle">{children}</StaticRouter>;
  }

  return (
    <MemoryRouter initialEntries={['/koogle']} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
}

function useRouteMatch(patterns) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

function MyTabs() {

  const routeMatch = useRouteMatch(['/', '/login', '/host']);
  
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Tabs value={currentTab}>
      <Tab label="koogle" value='/' to="/" component={Link} />
      <Tab label="login" value='/login' to="/login" component={Link} />
      <Tab label="host" value='/host' to="/host" component={Link} />
    </Tabs>
  );
}


export default function AnotherNav() {
  
  return (
    <Router>
      <Box sx={{ width: '100%' }}>
        <MyTabs />
      </Box>
    </Router>
  );
}
