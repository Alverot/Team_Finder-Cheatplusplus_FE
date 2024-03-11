import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import axios from '../api/axiosConfig';
import Logss from './logss';
import Signa from './signa';
import Signe from './signe';


const Login = () => {
    const [isLoginView, setIsLoginView] = useState(true);
    const [IsLoginView1, setIsLoginView1] = useState(true);
    const [IsSignupView1, setIsSignupView1] = useState(false);
    const [employee, setEmployee] = useState('');
    const [adm, setAdm] = useState('');
    const [isPressed, setIsPressed] = useState(false);
    const [isPressed1, ssetIsPressed] = useState(false);

    /*const handleToggleView = () => {
        setIsLoginView(prevState => !prevState);
    };
     */
    const handleClick1 = () => {
        // Apelarea funcțiilor dorite
        handleButtonClick();
        handleLoginClick1();
    };
    const handleClick2 = () => {
        // Apelarea funcțiilor dorite
        handleButtonClick();
        handleSignupClick1();
    };
    const handleClick3 = () => {
        // Apelarea funcțiilor dorite
        handleButtonClick1();
        handleEmployee();
    };
    const handleClick4 = () => {
        // Apelarea funcțiilor dorite
        handleButtonClick1();
        handleAdm()
    };
    const handleButtonClick = () => {
        setIsPressed(!isPressed);
    };
    const handleButtonClick1 = () => {
        ssetIsPressed(!isPressed1);
    };
    const handleLoginClick1 = () => {
        setIsLoginView1(true);
        setIsSignupView1(false);
    };

    const handleSignupClick1 = () => {
        setIsLoginView1(false);
        setIsSignupView1(true);
    };
    const handleEmployee=()=>{
        setEmployee(true);
        setAdm(false);
    };
    const handleAdm=()=>{
        setAdm(true);
        setEmployee(false);
    };
    return (
        <div>
            <div className="bara-sus">
                <h1 style={{ color: 'black' }}>MySKILL</h1>
                <h2 style={{ color: 'black' }}><button className="butoane-sus" onClick={handleClick1} style={{ backgroundColor: isPressed ? 'red' : 'gray' }}>Log In</button></h2>
                <h2 style={{ color: 'black' }}>|</h2>
                <h2 style={{ color: 'black' }}><button className="butoane-sus" onClick={handleClick2} style={{ backgroundColor: !isPressed ? 'red' : 'gray' }}>Sign In</button></h2>
            </div>
            <div className="div-mare">
                <div className="stanga">
                        {/* Restul codului pentru formularul de login și signup */}

                        {IsLoginView1 && employee &&(
                            <Logss/>
                        )}
                        {IsSignupView1 && adm  && (
                            <Signa/>
                        )}
                        {IsLoginView1 && adm &&(
                            <Logss/>
                        )}
                        {IsSignupView1 && employee &&(
                            <Signe/>
                        )}

                </div>
                <div className="dreapta">
                    <div className="left"><button className="buton-dreapta" onClick={handleClick3} style={{ backgroundColor: isPressed1 ? 'red' : 'gray' }}>I'm an employee</button></div>
                    <div className="right"><button   className="buton-dreapta" onClick={handleClick4} style={{ backgroundColor: !isPressed1 ? 'red' : 'gray' }}>I'm an administrator</button></div>
                </div>
            </div>
        </div>
    );
};

export default Login;
