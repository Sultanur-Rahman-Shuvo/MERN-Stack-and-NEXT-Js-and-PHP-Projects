import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup(props) {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, cpassword } = credentials;

    // Check if passwords match
    if (password !== cpassword) {
      props.showAlert("Passwords do not match", "danger");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
      });

      const json = await response.json();

      if (response.ok) {
        if (json.success) {
          localStorage.setItem('token', json.authtoken);
          navigate("/");
          props.showAlert("Account Created Successfully", "success");
        } else {
          props.showAlert(json.error || "Invalid Credentials", "danger");
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
    <div className='container mt-2'>
      <h2 className='my-3'>Create an account to use NotebookApp</h2>
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <label htmlFor="name" className="form-label mt-4"><strong><h5>Name</h5></strong></label>
          <input
            type="text"
            className="form-control"
            id="name"
            name='name'
            onChange={onChange}
            aria-describedby="nameHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label"><strong><h5>Email address</h5></strong></label>
          <input
            type="email"
            className="form-control"
            id="email"
            name='email'
            onChange={onChange}
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label"><strong><h5>Password</h5></strong></label>
          <input
            type="password"
            className="form-control"
            id="password"
            name='password'
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label"><strong><h5>Confirm Password</h5></strong></label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name='cpassword'
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <button type="submit" className="btn btn-success mt-3">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
