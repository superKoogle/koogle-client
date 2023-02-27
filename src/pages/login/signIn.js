import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const SignIn = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [pwd, setPwd] = useState("");
    const [unauthorized, setUnauthorized] = useState(false);
    const SignIn = async() =>{
        if(userName.length<2 || pwd.length<8){
            alert("not all fields are ok. we didn't finish working on it. sorry.")
        }
        else{
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
                const data = await response.json();
                const token = data.accessToken;
                sessionStorage.setItem("token", token);
                navigate('/')
            }
        }
    }
  return (
    <div class="sign-in-htm">
				<div class="group">
					<label for="user" class="label">Username</label>
					<input id="user" type="text" class="input" onChange={(e)=>{setUserName(e.target.value)}}/>
				</div>
				<div class="group">
					<label for="pass" class="label">Password</label>
					<input id="pass" type="password" class="input" data-type="password" onChange={(e)=>{setPwd(e.target.value)}}/>
				</div>
				<div class="group">
					<input id="check" type="checkbox" class="check" defaultChecked/>
					<label for="check"><span class="icon"></span> Keep me Signed in</label>
				</div>
                {unauthorized && <><span style={{color:'red'}}>one or more fields are not valid</span><br/><br/></>}
				<div class="group">
					<input type="submit" class="button" value="Sign In" onClick={SignIn}/>
				</div>
				<div class="hr"></div>
				<div class="foot-lnk">
					<a href="#forgot">Forgot Password?</a>
				</div>
			</div>
  )
}

export default SignIn