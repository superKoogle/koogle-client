import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CustomizedButton from '../../../components/Button';
import InfoAlert from '../../../components/InfoAlert';
import { AuthContext } from '../../../context/authContext';
import ReportToFill from './Report';
import { setNestedObjectValues } from 'formik';





export default function WrongDataDialog({placeId}) {
  const [notLoggedIn, setNotLoggedIn] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [wrongField, setWrongField] = React.useState('');
  const [text, setText] = React.useState('');
  const [status, setStatus] = React.useState(0);

  const {currentUser} = React.useContext(AuthContext);

  const handleClickOpen = () => {
    if(!currentUser){
      setNotLoggedIn(true);
      return;
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendReport =async()=>{
    const token = localStorage.getItem("token");
    if(!token){
      //
      console.log("no token");
      return;
    }
    const response = await fetch('http://localhost:3500/api/reports',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        'authorization':`Bearer ${token}`
      },
      body: JSON.stringify({report_place_id:placeId, report_text:text})
    })
    const msg = await response.json();
      console.log(msg);
    if(response?.ok){
      setStatus(200);
      }
      else{
        console.log("errory");
        setStatus(400);
      }
  
    handleClose();
  }

  return (
    <div>
      <CustomizedButton text={"Wrong data? let us know"} onClick={handleClickOpen}/>
      {notLoggedIn && <InfoAlert message={"Please sign in to use this service."} action={setNotLoggedIn} severity="info"></InfoAlert>}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Report wrong data</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To report about wrong data you have found about this site, please enter the wrong field and some information tou know. We
            will do our best to correct it soon.
          </DialogContentText>
      <ReportToFill wrongField={wrongField} setWrongField={setWrongField} setText={setText}></ReportToFill>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={()=>{sendReport()}}>send</Button>
        </DialogActions>
      </Dialog>
      {status==200 && <InfoAlert message={"Thank you! we will do our best to fix it."} action={setStatus} severity="success"></InfoAlert>}
          {status==400 && <InfoAlert message={"Something went wrong. sorry :("} action={setStatus} severity="error"></InfoAlert>}
    </div>
  );
}
