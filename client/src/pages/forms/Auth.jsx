import React, { useState } from "react";
import Cookies from "universal-cookie";
import api from "../../services/api";
//images
import signinImage from "../../assets/signup.jpg";

const initialState = {
  fullName: "",
  userName: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  profilepicURL: "",
};

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [form, setForm] = useState(initialState);

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.value]: e.target.name });
  };

  const handleSubmit = (e)=>{
      e.preventDefault()
      console.log(form);
  }

  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignup ? "Sign up " : "Sign in"}</p>
          <form onSubmit={handleSubmit}>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  required
                  onChange={handleChange}
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="userName">Your Username</label>
              <input
                type="text"
                name="userName"
                placeholder="Your username"
                required
                onChange={handleChange}
              />
            </div>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="phoneNumer">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumer"
                  placeholder="Your PhoneNumber"
                  required
                  onChange={handleChange}
                />
              </div>
            )}
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="profilepicURL">Profile Image URL</label>
                <input
                  type="text"
                  name="profilepicURL"
                  placeholder="Your Profile Image URL"
                  required
                  onChange={handleChange}
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                required
                onChange={handleChange}
              />
            </div>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="confirmpassword">Confirm your password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your Password"
                  required
                  onChange={handleChange}
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_button">
              <button>{isSignup ? "Sign Up" : "Sign In"}</button>
            </div>
          </form>
          <div className="auth__form-container_fields-account">
            <p>
              {isSignup ? "Already have an account?" : "Don't have an account?"}
              <span onClick={switchMode}>
                {isSignup ? "Sign In" : "Sign Up"}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="auth__form-container_image">
        <img src={signinImage} alt="sign in" />
      </div>
    </div>
  );
};

export default Auth;
