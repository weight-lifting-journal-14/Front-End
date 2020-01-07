import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MyDiv } from "./Style";

function Login() {
  const [username, setusername] = useState("");
  const [userpass, setuserpass] = useState("");

  console.log(username);
  console.log(userpass);

  const handleSubmit = () => {
    alert("Bam Sent! " + username);
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
