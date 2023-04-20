import * as React from 'react';
import { useState } from 'react';
import CustomizedButton from '../../components/Button';
import Host from './host';
import RecentRequests from './recentRequests';
import { Grid } from '@mui/material';

export default function HostorStay() {
    const [type, setType] = useState();

    return (
        <>
        <Grid container>
         <Grid item xs={8}>
        <CustomizedButton text={"i want to host"} onClick={()=>{setType(1)}}></CustomizedButton>
        <CustomizedButton text={"i want to stay"} onClick={()=>{setType(2)}}></CustomizedButton>
        {type && <Host typeOf={type}></Host>}
        </Grid>
        <Grid item xs={4}>
        <RecentRequests></RecentRequests>
        </Grid>
        </Grid>
        </>
    );
}
