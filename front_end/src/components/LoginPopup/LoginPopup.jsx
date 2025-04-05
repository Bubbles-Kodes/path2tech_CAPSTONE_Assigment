import React, { useContext, useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Sign In");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Sign In") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    try {
      const response = await axios.post(newUrl, data, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Amz-Date, Authorization, X-Api-Key, X-Amz-Security-Token, locale',
          'Access-Control-Allow-Methods': 'GET, POST',
        }
      });

      if (response.data.token) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
        alert(currState === "Sign Up" ? "Account created successfully!" : "Logged in successfully!");
      } else {
        alert("An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(error.response?.data?.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.close_icon} alt="" />
        </div>
        <div className="login-popup-input">
          {currState === "Sign In" ? <></> : <input name='name' onChange={handleChange} value={data.name} type="text" placeholder='Your name' required />}
          <input name='email' onChange={handleChange} value={data.email} type="email" placeholder='Your email' required />
          <input name='password' onChange={handleChange} value={data.password} type="password" placeholder='Password' required />
        </div>
        <button type='submit'>{currState === "Sign Up" ? "Create account" : "Login"}</button>
        {currState === "Sign Up" && (
          <div className="login-popup-condition">
            <input type="checkbox" required={currState === "Sign Up"} />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        )}
        {currState === "Sign In"
          ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
          : <p>Already have an account? <span onClick={() => setCurrState("Sign In")}>Login here</span></p>}
      </form>
    </div>
  );
};

export default LoginPopup;