import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Register from './register'
import SignIn from './signIn'
import './login.css'

const Login = () => {
    // const navigate = useNavigate();
    // const [userName, setUserName] = useState("");
    // const [pwd, setPwd] = useState("");
    const [repeatedPwd, setRepeatedPwd]  =useState("");
    const [email, setEmail] = useState("");
    

  return (
    <div class="login-wrap">
	<div class="login-html">
		<input id="tab-1" type="radio" name="tab" class="sign-in" defaultChecked/><label for="tab-1" class="tab">Sign In</label>
		<input id="tab-2" type="radio" name="tab" class="sign-up"/><label for="tab-2" class="tab">Sign Up</label>
		<div class="login-form">
			<SignIn />
			<Register/>
		</div>
	</div>
</div>
  )
}

export default Login