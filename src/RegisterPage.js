import React from "react";

function RegisterPage() {
  return (
    <div>
      <h1>Register Page</h1>
      <form>
        <label>Name: </label>
        <input type="text" placeholder="Name" />
        <label>Password: </label>
        <input type="password" placeholder="Password" />
        <label>Email: </label>
        <input type="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default RegisterPage;
