import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
//images
import signinImage from "../../assets/signup.jpg";

const cookies = new Cookies();
const initialState = {
  fullName: null,
  userName: null,
  password: null,
  confirmPassword: null,
  phoneNumber: null,
  profilepicURL: null,
};

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [form, setForm] = useState(initialState);

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { password, fullName, phoneNumber, userName, profilepicURL } = form;
      const url = "http://localhost:2000/";

      const {
        data: { token, userId, hashedPassword },
      } = await axios.post(`${url}${isSignup ? "signup" : "signin"}`, {
        password,
        fullName,
        phoneNumber,
        userName,
      });

      cookies.set("token", token);
      cookies.set("userName", userName);
      cookies.set("fullName", fullName);
      cookies.set("userId", userId);

      if (isSignup) {
        cookies.set("phoneNumber", phoneNumber);
        cookies.set("profilepicURL", profilepicURL);
        cookies.set("hashedPassword", hashedPassword);
      }

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

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
                  name="phoneNumber"
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
