import React, { useState } from "react";
import { Button } from "reactstrap";
import { axiosWithAuth } from "../axiosAuth";

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
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          placeholder="Name"
          onChange={e => {
            setUserName(e.target.value);
          }}
        />
        <label>Password: </label>
        <input
          type="password"
          placeholder="Password"
          onChange={e => {
            setUserPass(e.target.value);
          }}
        />
        <label>Email: </label>
        <input
          type="email"
          placeholder="Email"
          onChange={e => {
            setUserEmail(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default RegisterPage;
