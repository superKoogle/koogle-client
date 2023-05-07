import { Link, useNavigate } from 'react-router-dom'
import { React, useEffect, useState } from 'react'
import validator from 'validator'
const zxcvbn = require('zxcvbn')

const SignUp = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState();
    const [pwd, setPwd] = useState();
    const [repeatedPwd, setRepeatedPwd] = useState();
    const [email, setEmail] = useState();
    const [err, setErr] = useState();
    const [weakPwdErr, setWeakPwdErr] = useState();
    const [pwdErr, setPwdErr] = useState();
    const [ok, setOk] = useState(false);

    const checkPassword = () => {
        if (pwd) {
            document.getElementById("pwd_strength").setAttribute("value", zxcvbn(pwd).score)
            if (zxcvbn(pwd).score < 3) {
                setWeakPwdErr("Password is weak");
            }
            else {
                setWeakPwdErr("");
            }
            if (pwd != repeatedPwd) {
                setPwdErr("No match");
            }
            else {
                setPwdErr("");
            }
        }

    }

    useEffect(checkPassword, [pwd, repeatedPwd])
    useEffect(() => {
        if (err == "" && weakPwdErr == "" && pwdErr == "") {
            setOk(true);
        }

    }, [err, weakPwdErr, pwdErr])

    const checkEmail = () => {
        validator.isEmail(email) ? setErr("") : setErr("Email address is not valid");
    }

    const Register = async () => {
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

    return (
        <div className="sign-up-htm">
            <div className="group">
                <label for="user" className="label">Username</label>
                <input id="user" type="text" className="input" onChange={(e) => { setUserName(e.target.value) }} />
            </div>
            <div className="group">
                <label for="pass" className="label">Password</label>
                <input id="pass" type="password" className="input" data-type="password" onKeyUp={(e) => { setPwd(e.target.value) }} />
                <progress value={0} max={4} id="pwd_strength">0%</progress>
                {weakPwdErr && <><span style={{ color: 'red' }}>{weakPwdErr}</span><br /><br /></>}
            </div>
            <div className="group">
                <label for="pass" className="label">Repeat Password</label>
                <input id="pass" type="password" className="input" data-type="password" onKeyUp={async (e) => { await setRepeatedPwd(e.target.value) }} />
                {pwdErr && <><span style={{ color: 'red' }}>{pwdErr}</span><br /><br /></>}

            </div>
            <div className="group">
                <label for="pass" className="label">Email Address</label>
                <input id="pass" type="email" className="input" onChange={(e) => { setEmail(e.target.value) }} onBlur={checkEmail} />
            </div>
            {err && <><span style={{ color: 'red' }}>{err}</span><br /><br /></>}
            <div className="group">
                <input id="signUpBtn" type="submit" className="button"  value="Sign Up" onClick={Register} disabled={!ok} />
            </div>
            <div className="hr"></div>
            <div className="foot-lnk">
                <label for="tab-1">Already Member?</label>
            </div>
        </div>
    )
}


/*    <style>
        li{
            cursor: pointer;
			margin: 15px 0;
        }
    </style>
    style={{cursor:'pointer', margin:'15px'}} */ 




export default SignUp;