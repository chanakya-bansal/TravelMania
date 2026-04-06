import React from "react";
import { useState } from "react";
import "../styles/SignUp.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {


const navigate = useNavigate();
const goHome = () => {
  navigate("/Home");
};


const [form,setForm]=useState({Username:"", Email:"", Password: "", isPrem: ""})



const HandleChange=(e)=>{
    setForm({
        ...form,
        [e.target.name]:e.target.value
    });
};


const HandleSubmit=async(e)=>{
    e.preventDefault();
    const ress=await fetch("http://127.0.0.1:8000/SignUp", {
        method:"POST",
        headers:{"Content-Type":"applications/json"},
        body:JSON.stringify(form)
    });
    const data=await ress.json();
    console.log(data);
    console.log(data.message);
    goHome();

};
    return (
        <>
            <form>
                <div className="SignUp">
                        <h2>Create Account</h2>
                        <p id="createAcc">Sign up to get started</p>

                        <div className="inpUser">
                            <label name="username">Username</label>
                            <input type="text" placeholder="Enter your username" name="username" onChange={HandleChange}/>
                        </div>

                        <div className="inpEmail">
                            <label name="email">Email</label>
                            <input type="email" placeholder="Enter your email" name="email" onChange={HandleChange}/>
                        </div>

                        <div className="inpPass">
                            <label name="passsword">Password</label>
                            <input type="password" placeholder="Enter your password" name="password" onChange={HandleChange}/>
                        </div>

                        <div className="inpPrem">
                            <label name="isPremium">Want Premium Account?</label>
                            <input type="checkbox" name="isPremium" onChange={HandleChange}/>
                        </div>

                        <button id="Signup_Button" type="button" onClick={HandleSubmit}>
                            Sign Up
                        </button>
                </div>
            </form>
        </>
    );
};

export default SignUp