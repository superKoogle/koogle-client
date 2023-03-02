import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Register from './register'
import SignIn from './signIn'
import './login.css'

const Login = () => {
  
  return (
    <div className="login-wrap">
	<div className="login-html">
		<input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked/><label for="tab-1" className="tab">Sign In</label>
		<input id="tab-2" type="radio" name="tab" className="sign-up"/><label for="tab-2" className="tab">Sign Up</label>
		<div className="login-form">
			<SignIn />
			<Register/>
		</div>
	</div>
</div>
  )
}

export default Login