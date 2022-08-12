import React, { useState, Link } from "react";
import LoginForm from "./LoginForm.js";
import './Login.css';



function LoginApp() {
  
  const adminUser = {
    email: "testuser@test.com",
    password: "testuser"
  }
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log("details");
    if (details.email === adminUser.email && details.password === adminUser.password) {
      setUser({
        name: details.name,
        email: details.email
      })
    } else {
      setError("Email and Password is not matching.");
    }
  }
  const Logout = () => {
    setUser({ name: "", email:""});

  }

  return (
    <div className="signedin">
      {(user.email !== "") ? (
        <div className="signedin__welcome">
          <p>Order History</p>
          <p>Store Credit & Gift Cards</p>
          <p>Favorites Lists</p>
          <p>Address Book</p>
          <p>Saved Payments</p>
          <p>Communications</p>
          <p>Account Information</p>
          <hr/>
          <button className="signedout" onClick={Logout}>Sign out</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default LoginApp;