import { Link, useNavigate } from 'react-router-dom'
import { React, useState } from 'react'

const Register = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [pwd, setPwd] = useState("");
    const [repeatedPwd, setRepeatedPwd] = useState("");
    const [email, setEmail] = useState("");
    const [err, setErr] = useState();
    const Register = async () => {
        if (userName.length < 2 || pwd.length < 8 || email.length < 5) {
            alert("not all fields are ok. we didn't finish working on it. sorry.")
        }
        if (pwd != repeatedPwd) { 
            alert("password is not good. we didn't finish working on it. sorry.")
        }
        else {
            const response = await fetch("http://localhost:3500/api/auth/SignUp", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user_name: userName, user_password: pwd, user_email: email })
            })
            if (response.status == 201) {
                const response = await fetch("http://localhost:3500/api/auth/SignIn", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ user_name: userName, user_password: pwd })
                })
                    const data = await response.json();
                    const token = data.accessToken;
                    sessionStorage.setItem("token", token);
                    navigate('/')
            }
            else {
                const err = await response.json();
                setErr(err.message);
                console.log(err.message)
            }
        }
    }
    return (
        <div class="sign-up-htm">
            <div class="group">
                <label for="user" class="label">Username</label>
                <input id="user" type="text" class="input" onChange={(e) => { setUserName(e.target.value) }} />
            </div>
            <div class="group">
                <label for="pass" class="label">Password</label>
                <input id="pass" type="password" class="input" data-type="password" onChange={(e) => { setPwd(e.target.value) }} />
            </div>
            <div class="group">
                <label for="pass" class="label">Repeat Password</label>
                <input id="pass" type="password" class="input" data-type="password" onChange={(e) => { setRepeatedPwd(e.target.value) }} />
            </div>
            <div class="group">
                <label for="pass" class="label">Email Address</label>
                <input id="pass" type="email" class="input" onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            {err && <span>{err}</span>}
            <div class="group">
                <input type="submit" class="button" value="Sign Up" onClick={Register} />
            </div>
            <div class="hr"></div>
            <div class="foot-lnk">
                <label for="tab-1">Already Member?</label>
            </div>
        </div>
    )
}

export default Register;