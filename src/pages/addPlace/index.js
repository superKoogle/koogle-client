import * as React from 'react';
import { useState } from "react";
import Synagogue from './Synagogue';
import BeitHabad from './BeitHabad';
import Restaurant from './Restaurant';
import Supermarket from './Supermarket';
import {Box, Tab} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


export default function AddPlace() {
    const [type, setType] = useState();
    const handleChange = (event, newValue) => {
        setType(newValue);
      };
    return (
        <>
        
           <h1>Which place would you like to add?</h1>
           
            <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={type}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' , justifyContent:'center'}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered textColor='primary'
                      indicatorColor='primary'>
            <Tab label="Synagogue" value="1" />
            <Tab label="Beit habad" value="2" />
            <Tab label="Supermarket" value="3" />
            <Tab label="Restaurant" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1"><Synagogue/></TabPanel>
        <TabPanel value="2"><BeitHabad/></TabPanel>
        <TabPanel value="3"><Supermarket/></TabPanel>
        <TabPanel value="4"><Restaurant/></TabPanel>
      </TabContext>
    </Box>
        </>
    );
}