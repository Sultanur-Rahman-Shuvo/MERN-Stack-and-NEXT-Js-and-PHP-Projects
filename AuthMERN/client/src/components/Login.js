import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./mix.css"

const Login = () => {
    const [passShow, setPassShow] = useState(false)
    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })
    const history = useNavigate()
    const setVal = (e) => {
        const { name, value } = e.target
        setInpval(() => {
            return { ...inpval, [name]: value }
        })
    }
    const loginuser = async (e) => {
        e.preventDefault()
        const { email, password } = inpval
        if (email === "") {
            alert("Please Enter Your Email")
        } else if (!email.includes("@")) {
            alert("Enter Valid Email")
        } else if (password === "") {
            alert("Please Enter Your Password")
        } else if (password.length < 6) {
            alert("Password Must Be 6 Character")
        } else {
            const data = await fetch("/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email, password
                })
            })
            const res = await data.json()
            if (res.status === 201) {
                localStorage.setItem("usersdatatoken", res.result.token)
                history("/dash")
                setInpval({ ...inpval, email: "", password: "" })
            }
        }
    }
    return (
        <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Welcome Back, Login</h1>
                        <p>Hi, we are glad you are back. Please Login</p>
                    </div>
                    <form>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" value={inpval.email} onChange={setVal} placeholder='Enter Your Email Address' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Password</label>
                            <div className="two">
                                <input type={!passShow ? "password" : "text"} name="password" id="password" value={inpval.password} onChange={setVal} placeholder='Enter Your Password' />
                                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>
                        <button className='btn' onClick={loginuser}>Login</button>
                        <p>Don't have an Account? <NavLink to="/register">Sign Up</NavLink></p>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login
