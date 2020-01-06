import React, { useEffect, useState } from "react";

function RegisterPage() {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userEmail, setUserEmail] = useState("");

  return (
    <div>
      <h1>Register Page</h1>
      <form>
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
            setUserPass(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default RegisterPage;
