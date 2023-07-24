import * as React from 'react';
import { useState } from 'react';
import CustomizedButton from '../../components/Button';
import Host from './host';
import RecentRequests from './recentRequests';
import { Grid,Box } from '@mui/material';
import CarouselImg from './carousel';

export default function HostorStay() {
    const [typeOfHost, setTypeOfHost] = useState();
    const [submited,setSubmited] = useState(true);
    return (
    <>
    <CarouselImg/>
        <Box sx={{display:"flex",gap:1, justifyContent:"space-between", padding:3}}>
            <Box sx={{display:"grid",gap:1}}>
            <Box sx={{display:"flex",gap:1}}>
                <CustomizedButton text={"I want to host"}  onClick={()=>{setTypeOfHost(1);setSubmited(true)}}/>
                <CustomizedButton text={"I want to stay"} onClick={()=>{setTypeOfHost(2);setSubmited(true)}}/>                   </Box>
   
                <Host setSubmit={setSubmited} isSubmit={submited} hostFlag={typeOfHost}/>
                </Box>
            <RecentRequests/>
        </Box>
        </>
    );
}
