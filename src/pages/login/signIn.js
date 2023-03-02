import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const SignIn = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [pwd, setPwd] = useState("");
    const [unauthorized, setUnauthorized] = useState(false);
    const SignIn = async() =>{

            const response = await fetch("http://localhost:3500/api/auth/SignIn",{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({user_name:userName, user_password:pwd})
            })
            if(response.status==401){
                setUnauthorized(true);
            }
            else{
                if(response.ok){
                    const data = await response.json();
                    const token = data.accessToken;
                    sessionStorage.setItem("token", token);
                    navigate('/')
                }
            }
       
    }
  return (
    <div className="sign-in-htm">
				<div className="group">
					<label for="user" className="label">Username</label>
					<input id="user" type="text" className="input" onChange={(e)=>{setUserName(e.target.value)}}/>
				</div>
				<div className="group">
					<label for="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password" onChange={(e)=>{setPwd(e.target.value)}}/>
				</div>
				<div className="group">
					<input id="check" type="checkbox" className="check" defaultChecked/>
					<label for="check"><span className="icon"></span> Keep me Signed in</label>
				</div>
                {unauthorized && <><span style={{color:'red'}}>one or more fields are not valid</span><br/><br/></>}
				<div className="group">
					<input type="submit" className="button" value="Sign In" onClick={SignIn}/>
				</div>
				<div className="hr"></div>
				<div className="foot-lnk">
					<a href="#forgot">Forgot Password?</a>
				</div>
			</div>
  )
}

export default SignIn