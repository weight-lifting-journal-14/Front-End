
import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

import { axiosWithAuth } from "../axiosAuth";
import { MyDiv2, Myinput, Mycontent, Btn } from "../Style";
import img from "../img/regPage.jpg";

function RegisterPage(props) {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const user = {
    username: userName,
    password: userPass
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/auth/register", user)
      .then(res => {
        console.log(res);
        props.history.push("/");
      });
  };

  return (
    <div>
      <Mycontent src={img} />
      <MyDiv2>
        <h1>Register Here:</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <Myinput
              required
              type="text"
              placeholder="Enter Username"
              onChange={e => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div>
            <Myinput
              required
              type="password"
              placeholder="Enter Password"
              onChange={e => {
                setUserPass(e.target.value);
              }}
            />
          </div>
          <div>
            <Myinput
              type="email"
              placeholder="Enter Email"
              onChange={e => {
                setUserEmail(e.target.value);
              }}
            />
          </div>
          <Btn>Submit</Btn>
        </form>
      </MyDiv2>
    </div>
  );
}

export default RegisterPage;
