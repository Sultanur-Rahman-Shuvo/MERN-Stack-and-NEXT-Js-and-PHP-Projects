import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './mix.css'

const Register = () => {
    const [passShow, setPassShow] = useState(false)
    const [cpassShow, setCPassShow] = useState(false)
    const [inpval, setInpval] = useState({
        fname: "",
        email: "",
        password: "",
        cpassword: ""
    })
    const setVal = (e) => {
        const { name, value } = e.target
        setInpval(() => {
            return { ...inpval, [name]: value }
        })
    }
    const addUserData = async (e) => {
        e.preventDefault()
        const { fname, email, password, cpassword } = inpval
        if (fname === "") {
            alert("Please Enter Your Name")
        } else if (email === "") {
            alert("Please Enter Your Email")
        } else if (!email.includes("@")) {
            alert("Enter Valid Email")
        } else if (password === "") {
            alert("Please Enter Your Password")
        } else if (password.length < 6) {
            alert("Password Must Be 6 Character")
        } else if (cpassword === "") {
            alert("Please Confirm Your Password")
        } else if (cpassword.length < 6) {
            alert("Password Must Be 6 Character")
        } else if (password !== cpassword) {
            alert("Password And Confirm Password Mismatch")
        } else {
            const data = await fetch("/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fname, email, password, cpassword
                })
            })
            const res = await data.json()
            if (res.status === 201) {
                alert("User Registration done")
                setInpval({ ...inpval, fname: "", email: "", password: "", cpassword: "" })
            }
        }
    }
    return (
        <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Sign Up</h1>
                        <p style={{ textAlign: "center" }}>We are glad you that you will be using Project Cloud to manage <br /> your tasks! We hope that you will get like it.</p>
                    </div>
                    <form>
                        <div className="form_input">
                            <label htmlFor="fname">Name</label>
                            <input type="text" name="fname" id="fname" onChange={setVal} value={inpval.fname} placeholder='Enter Your Name' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" onChange={setVal} value={inpval.email} placeholder='Enter Your Email Address' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Password</label>
                            <div className="two">
                                <input type={!passShow ? "password" : "text"} name="password" id="password" onChange={setVal} value={inpval.password} placeholder='Enter Your Password' />
                                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Confirm Password</label>
                            <div className="two">
                                <input type={!cpassShow ? "password" : "text"} name="cpassword" id="cpassword" onChange={setVal} value={inpval.cpassword} placeholder='Confirm Password' />
                                <div className="showpass" onClick={() => setCPassShow(!cpassShow)}>
                                    {!cpassShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>
                        <button className='btn' onClick={addUserData}>Sign Up</button>
                        <p>Already have an Account? <NavLink to="/">Login</NavLink></p>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Register
