import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom'


export default function NavTabs() {
  const [value, setValue] = React.useState(0);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function LinkTab(props) {
    const navigate = useNavigate();
    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
          navigate(props.href);
        }}
        {...props}
      />
    );
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab label="Koogle" href="/"/>
        <LinkTab label="Sign In" href="/login"/>
        <LinkTab label="Host" href="/host"/>
        <LinkTab label="placeDetails" href="/placeDetails"/>
      </Tabs>
    </Box>
  );
}
