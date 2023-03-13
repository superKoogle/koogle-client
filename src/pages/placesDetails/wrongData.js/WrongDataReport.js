import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CustomizedButton from '../../../components/Button';
import ReportToFill from './Report';
export default function WrongDataDialog({placeId}) {
  const [open, setOpen] = React.useState(false);
  const [wrongField, setWrongField] = React.useState('');
  const [text, setText] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendReport =async()=>{
    const token = sessionStorage.getItem("token");
    if(!token){
      ///////////////////////
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
    if(response?.ok){
      const msg = await response.json();
      console.log(msg);
  }
    handleClose();
  }

  return (
    <div>
      <CustomizedButton text={"Wrong data? let us know"} onClick={handleClickOpen}/>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
      <ReportToFill wrongField={wrongField} setWrongField={setWrongField} setText={setText}></ReportToFill>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={()=>{sendReport()}}>send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
