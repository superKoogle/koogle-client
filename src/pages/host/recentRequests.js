import { Typography } from '@mui/material';
import * as React from 'react';
import HostCard from '../../components/HostCard';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { AuthContext } from '../../context/authContext';
import PropTypes from "prop-types";

ImageList.propTypes = {
  children: ()=>{return null}
}

export default function RecentRequests() {
  const [results, setResults] = React.useState();
  const { token, currentUser } = React.useContext(AuthContext) || {};
  const [remove ,setRemove] = React.useState();

 
  React.useEffect(() => {
    const x =  async() => {
      if (!currentUser) return;
      const response = await fetch(`http://localhost:3500/api/hosts/?user_id=${currentUser?.user_id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`
        },
      })
      if (response?.ok) {
        console.log("succeeded")
       
      setResults(await response.json())
       console.log(results)
      }
      else {
        console.log("err");
      }
    };
    x()
  }, [currentUser]);

  React.useEffect(()=>{
    console.log("in use effect");
    if(results)
    {
      const filtered = results.filter((res,ind)=>ind!=remove);
      setResults(filtered)       
      setRemove()
    }
  },[remove]);

  return (
    <>
       {!results? <div>Your recent requests Will be shown here.</div>:
       <ImageList sx={{ width: '100%'}} cols={1}>
        {results.map((res,ind)=><ImageListItem key={ind}><HostCard hostReq={res} index={ind} removeMe={setRemove} /></ImageListItem>)}
       </ImageList>}
    </>)
}

