import React, { useState } from "react";
import axios from "axios";

export default function Login(props) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const onLogin = async function () {
    // console.log("@@@@@", password)
   try {
     const { data } = await axios.post("http://localhost:8001/api/login", { email, password })
     console.log("data++++", data)
     localStorage.setItem('user', JSON.stringify(data.user) );
     props.setCurrentUser(data.user)
     props.setPage("MyCards")
   } catch (error) {
     console.log(error)
   }  
  };

  return (
    <section className="login">
      <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
        <div>
          <label for="email">Email </label>
          <input
            name="email"
            type="email"
            value={email}
            // placeholder="Enter your email"
            onChange={(event) => setemail(event.target.value)}
          />
        </div>

        <div> 
          <label for="firstName">Password </label>
          <input
            name="password"
            type="password"
            value={password}
            // placeholder="Enter password"
            onChange={(event) => setpassword(event.target.value)}
          />
        </div>
      </form>
      <button onClick={onLogin}>Login</button>
    </section>
  );
}
