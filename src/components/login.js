import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MyDiv } from "../Style";
import { axiosWithAuth } from "../axiosAuth";

function Login(props) {
  const [username, setusername] = useState("");
  const [userpass, setuserpass] = useState("");

  console.log(username);
  console.log(userpass);

  const user = {
    username: username,
    password: userpass
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/auth/login", user)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        props.setAuthenticated(true);
        props.history.push("/home");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <MyDiv>
          <div>
            <span>Name: </span>
            <input
              type="text"
              name="name"
              onChange={e => {
                setusername(e.target.value);
              }}
            />
          </div>
          <div>
            <span>Password: </span>
            <input
              type="password"
              name="password"
              onChange={e => {
                setuserpass(e.target.value);
              }}
            />
          </div>
          <button value="Submit" type="submit">
            Submit
          </button>
          <NavLink to="Register/">
            <button>Register</button>
          </NavLink>
        </MyDiv>
      </form>
    </div>
  );
}

export default Login;
