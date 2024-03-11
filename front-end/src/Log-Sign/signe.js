import React, {useState} from "react";
import Login from "./LogIn";
import axios from "../api/axiosConfig";
const Signe=()=>
{
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const handleLoginClick = async (e) => {
        e.preventDefault();
        try {
            // Trimite o cerere POST către serverul backend la adresa "/api/employee"
            await axios.post("/api/employee", { name, password , email});
            alert('Logss in successful!');
        } catch (error) {
            alert('Error logging in!');
        }
    };
    return(
        <form className="login-form">
            <div className="login-fields">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="email" className="sub" placeholder="Insert name"/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" className="sub" placeholder="Insert password"/>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" className="sub" placeholder="Insert email"/>
                <button type="submit" className="login-button" onClick={handleLoginClick}>Log In</button>
            </div>
        </form>
    )
};
export default Signe;