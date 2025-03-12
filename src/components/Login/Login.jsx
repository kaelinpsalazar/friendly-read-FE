import {useState, useEffect} from "react";
import './Login.css';

function Login() {
  return (

    <form className="login-form">
      <div>
        <label>Username: </label>
        <input type="email"/>
      </div>
      <div>
        <label>Password: </label>
        <input/>
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>


  );
};

export default Login;