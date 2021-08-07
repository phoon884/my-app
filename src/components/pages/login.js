import React, { useState } from "react";
import "./login.css";
import { ValidateLogin } from "../../helper/RequestAction";
import { Redirect } from "react-router";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(null);
  //const [done , setDone] = useState(undefined)

  const Login_Action = (event) => {
    event.preventDefault();

    const user = {
      email: username,
      password: password,
    }; 
    ValidateLogin(user).then(res => {setLogin(res)})
  }
  if (login) {
    return (<Redirect to="/" />)
  }
  return (
    <div className="card-wrapper">
      <div className="card">
        <h1 className="center">Log In</h1>

        <form name="login_form" onSubmit={Login_Action}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="field"
            required
            onChange={(e) => setUsername(e.target.value)}
          ></input>

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="field"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <p className="error error--hidden"></p>

          <input type="submit" value="Log In" className="btn"></input>
        </form>
      </div>
    </div>
  );

}


export default Login;
