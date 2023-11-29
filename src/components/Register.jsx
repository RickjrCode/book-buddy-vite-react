import React from "react";
import { registerUser } from "../api/ajaxHelper";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register({ setToken }) {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const userObj = {
      firstname,
      lastname,
      email,
      password,
    };
    const token = await registerUser(userObj);
    setToken(token);
    navigate("/account");
    console.log(userObj);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:{" "}
          <input
            value={firstname}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
        </label>
        <label>
          Last Name:{" "}
          <input
            value={lastname}
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
        </label>
        <label>
          Email:{" "}
          <input
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </>
  );
}
