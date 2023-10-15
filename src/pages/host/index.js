import * as React from 'react';
import { useState } from 'react';
import CustomizedButton from '../../components/Button';
import Host from './Host';
import RecentRequests from './recentRequests';
import { Grid, Box } from '@mui/material';
import CarouselImg from './carousel';
import { Height } from '@mui/icons-material';

export default function HostorStay() {
    const [typeOfHost, setTypeOfHost] = useState();
    const [submited, setSubmited] = useState(true);
    return (
        <>
            <CarouselImg />
            <Grid container sx={{width:"100%"}}>
                <Grid item sx={{ display: "grid", gap: 1 }} xs={8}>
                    <Box sx={{ display: "flex", gap: 1 }}>
                        <CustomizedButton text={"I want to host"} onClick={() => { setTypeOfHost(1); setSubmited(true) }} style={{Height:"40px"}}/>
                        <CustomizedButton text={"I want to stay"} onClick={() => { setTypeOfHost(2); setSubmited(true) }}  style={{Height:"40px"}}/>
                    </Box>

                    <Host setSubmit={setSubmited} isSubmit={submited} hostFlag={typeOfHost} />
                </Grid>
                <Grid item xs={4}>
                <RecentRequests/>

                </Grid>
            </Grid>
        </>
    );
}
