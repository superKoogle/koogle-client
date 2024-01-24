import { Avatar, Typography, AvatarGroup, Stack, Box } from '@mui/material';
import { lightGreen, grey, red } from '@mui/material/colors';
import React from 'react';


const Messsage = ({ status }) => {
    return (
        <>
            <Box sx={{
                width:"50%",
                margin: 'auto',
                padding: 5,
                backgroundColor: status == 200 || status==201 ? lightGreen[50] : red[50],
                border: "2px solid",
                borderRadius: "40px",
                borderColor: status == 200  || status==201? 'success.main' : red[400],
                textAlign: "center",
                textSizeAdjust: "auto",
                color: grey[800],
            }}>
                {status == 200  || status==201? <><h2>Thank you!</h2>
                    <h3>new place had been added to our dataBase.<br />
                        You help other people on their way far from home.</h3>
                        <img src="/loc.gif" width={80}/>
                </> :
                    <><h2>Oooops...!</h2>
                        <h3>Something went Wrong.<br />
                            Maybe try again?</h3>
                            <img src="/err.gif" width={70}/></>
                }

            </Box>
        </>
    )
}

export default Messsage