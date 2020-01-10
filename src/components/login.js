import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { MyDiv, Btn, Mycontent, Myinput } from "../Style";

import { axiosWithAuth } from "../axiosAuth";
import "../login.css";
import img from "../img/loginPage.jpg";

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
      <Mycontent src={img} />
      <MyDiv>
        <form onSubmit={handleSubmit}>
          <div>
            <Myinput
              required
              placeholder="Enter Username"
              type="text"
              name="name"
              onChange={e => {
                setusername(e.target.value);
              }}
            />
          </div>
          <div>
            <Myinput
              required
              placeholder="Enter Password"
              type="password"
              name="password"
              onChange={e => {
                setuserpass(e.target.value);
              }}
            />
          </div>
          <div>
            <Btn value="Submit" type="submit">
              Submit
            </Btn>
          </div>
          <div>
            <NavLink to="Register/">
              <Btn>Register</Btn>
            </NavLink>
          </div>
        </form>
      </MyDiv>
    </div>
  );
}

export default Login;
