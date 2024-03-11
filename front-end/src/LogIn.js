import React, { useState } from 'react';


const Login = () => {



    const handleToggleView = () => {
        setIsLoginView(prevState => !prevState);
    };
    const [isLoginView, setIsLoginView] = useState(true);
    const [isSignupView, setIsSignupView] = useState(false);

    const handleLoginClick = () => {
        setIsLoginView(true);
        setIsSignupView(false);
    };

    const handleSignupClick = () => {
        setIsLoginView(false);
        setIsSignupView(true);
    };

    return (
        <div>
           <div className="bara-sus">
            <h1  style={{color: 'black'}}>MySKILL</h1>
            <h2 style={{color: 'black'}}><button className="butoane-sus" onClick={handleLoginClick}>Log In</button></h2>
            <h2 style={{color: 'black'}}>|</h2>
            <h2  style={{color: 'black'}}><button className="butoane-sus" onClick={handleSignupClick}>Sign In</button></h2>
           </div>
            <div className="div-mare">
            <div className="stanga">
            <form className="login-form">
                {isLoginView && (
                    <div className="login-fields">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" className="sub" />
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" className="sub" />
                    </div>
                )}
                {!isLoginView && (
                    <div className="login-fields">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" className="sub" />
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" className="sub"/>
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" className="sub"/>
                    </div>
                )}

                <p className="login-toggle" onClick={handleToggleView}>
                    {isLoginView ? 'Don\'t have an account? Sign up here.' : 'Already have an account? Log in here.'}
                </p>
                <button type="submit" className="login-button">{isLoginView ? 'Log In' : 'Sign Up'}</button>

            </form>


           </div>
            <div className="dreapta">
                <div className="left"><button className="buton-dreapta">I'm a employee</button></div>
                <div className="right"><button className="buton-dreapta">I'm a administrator</button></div>
            </div>
            </div>
        </div>
    );
};

export default Login;
