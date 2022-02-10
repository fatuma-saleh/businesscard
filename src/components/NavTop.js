import { Fragment } from "react";
import { useEffect, useState } from "react";
export default function NavTop(props) {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    let user = localStorage.getItem("user");
    setCurrentUser(user);
  }, []);
  return (
    <Fragment>
      {currentUser !== null ? (
        <>
          {" "}
          <button onClick={() => props.onClick("MyCards")}>My Cards</button>
          <button onClick={() => props.onClick("SavedCards")}>
            Saved Cards
          </button>
          <button onClick={() => props.onClick("")}>New Cards</button>
          <button onClick={() => props.onClick("")}>Template</button>
          <button onClick={() => props.onClick("Logout")}>Logout</button>
        </>
      ) : (
        <>
          {" "}
          <button onClick={() => props.onClick("MainPage")}>Main Page</button>
          <button onClick={() => props.onClick("Register")}>Register</button>
          <button onClick={() => props.onClick("Login")}>Login</button>
        </>
      )}
    </Fragment>
  );
}

  
