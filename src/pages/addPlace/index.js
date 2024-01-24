import * as React from 'react';
import { useState } from "react";
import Synagogue from './synagogue';
import BeitHabad from './BeitHabad';
import Restaurant from './restaurant';
import Supermarket from './supermarket';
import {Box, Tab} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Messsage from '../../components/Message';


export default function AddPlace() {
    const [type, setType] = useState();
    const [status, setStatus] = useState(null);
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
        <TabPanel value="1">{status?<Messsage status={status}/>:<Synagogue setStatus={setStatus}/>}</TabPanel>
        <TabPanel value="2">{status?<Messsage status={status}/>:<BeitHabad setStatus={setStatus}/>}</TabPanel>
        <TabPanel value="3">{status?<Messsage status={status}/>:<Supermarket setStatus={setStatus}/>}</TabPanel>
        <TabPanel value="4">{status?<Messsage status={status}/>:<Restaurant setStatus={setStatus}/>}</TabPanel>
      </TabContext>
    </Box>
        </>
    );
}