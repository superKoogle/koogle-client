import * as React from 'react';
import { useState } from 'react';
import CustomizedButton from '../../components/Button';
import Host from './host';
import RecentRequests from './recentRequests';
import { Grid,Box } from '@mui/material';
import Example from './example';

export default function HostorStay() {
    const [typeOfHost, setTypeOfHost] = useState(1);

    return (
    <>
    <Example></Example>
     <Grid container>
      <Grid item xs={8}>
        <CustomizedButton text={"I want to host"} onClick={()=>{setTypeOfHost(1)}}/>
        <CustomizedButton text={"I want to stay"} onClick={()=>{setTypeOfHost(2)}}/>      
       

        <Host avigail={typeOfHost}/>
</Grid>
<Grid item xs={4}>
        <RecentRequests/>
        </Grid>
        </Grid>
        </>
    );
}
