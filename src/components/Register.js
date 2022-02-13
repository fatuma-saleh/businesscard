import React, { useState } from "react";
import axios from "axios";

export default function Register(props) {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  
    const onRegister = async function () {
      // console.log("@@@@@", password)
     try {
       const { data } = await axios.post("http://localhost:8001/api/register", { firstName, lastName, email, password })
       console.log("data++++", data)
       localStorage.setItem('user', JSON.stringify(data.user) );
       props.setCurrentUser(data.user)
       props.setPage("MyCards")
     } catch (error) {
       console.log(error)
     }  
    };
  
  return (
    <section className="register">
      <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
        <div>
          <label for="firstName">First Name </label>
          <input
            name="firstName"
            type="text"
            value={firstName}
            placeholder="Enter First Name"
            onChange={(event) => setfirstName(event.target.value)}
          />
        </div>
        <div>
          <label for="lastName">Last Name </label>
          <input
            name="lastName"
            type="text"
            value={lastName}
            placeholder="Enter Last Name"
            onChange={(event) => setlastName(event.target.value)}
          />
        </div>
        <div>
          <label for="email">Email </label>
          <input
            name="email"
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(event) => setemail(event.target.value)}
          />
        </div>

        <div>
          <label for="firstName">Password </label>
          <input
            name="password"
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={(event) => setpassword(event.target.value)}
          />
        </div>
      </form>
      <button onClick={onRegister}>Register</button>
    </section>
  );
}
