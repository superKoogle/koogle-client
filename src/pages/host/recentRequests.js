import * as React from 'react';
import {AuthContext} from '../../context/authContext'



export default function RecentRequests() {


const {token, currentUser} = React.useContext(AuthContext)||{};

React.useEffect(()=>{const x=async()=>{
  const response = await fetch(`http://localhost:3500/api/hosts/${currentUser?.user_id}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'authorization': `Bearer ${token}`
  },
   })
if (response?.ok) {
  console.log("succeeded")
  const options = await response.json();
  console.log(options);
}
else {
console.log("err");
} }
x()},[] )
return <></>

}








