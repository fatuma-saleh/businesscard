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
      <h3>Login Page</h3>
      <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
        <table>
          <tr>
            <td><label for="email">Email </label></td>
            <td>
              <input
                name="email"
                type="email"
                value={email}
                // placeholder="Enter your email"
                onChange={(event) => setemail(event.target.value)}
              />
            </td>
          </tr>
          <tr> 
            <td><label for="firstName">Password </label></td>
            <td>
              <input
                name="password"
                type="password"
                value={password}
                // placeholder="Enter password"
                onChange={(event) => setpassword(event.target.value)}
              />
            </td>
          </tr>
        </table>
      </form>
      <button onClick={onLogin}>Login</button>
    </section>
  );
}
