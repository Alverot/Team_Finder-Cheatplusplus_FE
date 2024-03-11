import React, {useState} from "react";
import Login from "./LogIn";
import axios from "../api/axiosConfig";
const Signa=()=>{

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [adress, setAdress] = useState('');
    const [OrganizationName, setOrganizationName] = useState('');
    const handleSignupClick = async (e) => {
        e.preventDefault();
        try {
            // Trimite o cerere POST către serverul backend la adresa "/api/employee"
            await axios.post("/api/employee", { name, email, password, OrganizationName, adress});
            alert('Signa up successful!');
        } catch (error) {
            alert('Error signing up!');
        }
    };
    return (
        <form className="login-form">
    <div className="login-fields">
        <label htmlFor="name">Name:</label>
        <input type="name" id="name" name="name" className="sub" placeholder="Insert name"/>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" className="sub" placeholder="Insert email"/>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" className="sub" placeholder="Insert password"/>
        <label htmlFor="OrganizationName">OrganizationName:</label>
        <input type="OrganizationName" id="OrganizationName" name="OrganizationName" className="sub" placeholder="Insert organization name"/>
        <label htmlFor="adress">Adress:</label>
        <input type="adress" id="adress" name="adress" className="sub" placeholder="Insert adress"/>
        <button type="submit" className="login-button" onClick={handleSignupClick}>Sign In</button>
    </div>
            </form>
    )
};
export default Signa;