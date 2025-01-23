import React, { useState } from 'react';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="container">
            <div className="form-container">
                <div className="form-toggle">
                    <button className={isLogin ? "active" : ""} onClick={() => setIsLogin(true)}>Login</button>
                    <button className={!isLogin ? "active" : ""} onClick={() => setIsLogin(false)}>SignUp</button>
                </div>
                {isLogin ? (
                    <>
                        <div className="form">
                            <h2>Login Form</h2>
                            <input type="email" placeholder="Enter Email" />
                            <input type="password" placeholder="Enter Password" />
                            <a href="#">Forgot Password?</a>
                            <button>Login</button>
                            <p>
                                Not a Member?{' '}
                                <button
                                    className="link-button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsLogin(false);
                                    }}
                                >
                                    SignUp
                                </button>
                            </p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="form">
                            <h2>SignUp Form</h2>
                            <input type="email" placeholder="Enter Email" />
                            <input type="password" placeholder="Enter Password" />
                            <button>SignUp</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default AuthForm;
