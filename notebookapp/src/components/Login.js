import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [error, setError] = useState(null); // Added state for error messages
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic client-side validation
        if (!credentials.email || !credentials.password) {
            props.showAlert("Please fill in all fields", "danger");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: credentials.email, password: credentials.password })
            });

            const json = await response.json();

            if (response.ok) { // Check if the response status is OK
                if (json.success) {
                    localStorage.setItem('token', json.authtoken);
                    props.showAlert("Logged in Successfully", "success");
                    navigate("/");
                } else {
                    props.showAlert(json.error || "Invalid Details", "danger");
                }
            } else {
                props.showAlert("Server Error: " + (json.message || "An error occurred"), "danger");
            }
        } catch (error) {
            console.error("An error occurred:", error);
            props.showAlert("Something went wrong. Please try again later.", "danger");
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className='mt-3'>
            <h2>Login to continue to NotebookApp</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label mt-4"><strong><h5>Email address</h5></strong></label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name='email'
                        value={credentials.email}
                        onChange={onChange}
                        aria-describedby="emailHelp"
                        required
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label"><strong><h5>Password</h5></strong></label>
                    <input
                        type="password"
                        className="form-control"
                        name='password'
                        value={credentials.password}
                        onChange={onChange}
                        id="password"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success mt-3">Submit</button>
            </form>
        </div>
    );
}

export default Login;
