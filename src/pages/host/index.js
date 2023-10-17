import * as React from 'react';
import { useState } from 'react';
import CustomizedButton from '../../components/Button';
import Host from './Host';
import RecentRequests from './recentRequests';
import { Grid, Box, Button} from '@mui/material';
import CarouselImg from './carousel';
import { Height } from '@mui/icons-material';

export default function HostorStay() {
    const [typeOfHost, setTypeOfHost] = useState();
    const [submited, setSubmited] = useState(true);
    return (
        <>
            <CarouselImg />
            <Grid container sx={{width:"100%"}}>
                <Grid item xs={8}>
                    <Box sx={{alignItems:"center"}}>
                        <Button variant="contained" onClick={() => { setTypeOfHost(1); setSubmited(true) }} sx={{m: 3}}>I want to host</Button>
                        <Button variant="contained" onClick={() => { setTypeOfHost(1); setSubmited(true) }} sx={{m: 3}}>I want to stay</Button>
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
