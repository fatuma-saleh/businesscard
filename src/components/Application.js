import { useEffect, useState } from "react";
import axios from "axios";

import NavTop from "./NavTop";
import MainPage from "./MainPage";
import MyCards from "./MyCards";
import SavedCards from "./SavedCards";
import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";

export default function Application(props) {
  const [page, setPage] = useState("MyCards");

  const [myCards, setMyCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  

  const getHeader = function () {
    let user = localStorage.getItem('user');
    // console.log("*****", user)
    
    if (!user){
       return null
      // setPage("")
      // setPage("Login")
    }
    user = JSON.parse(user)
    
    const config = {
      headers: { Authorization: `Bearer ${user.token}` },
    };
    // console.log("*****000000config", config)
    return config
  };

  useEffect(() => {
    const headers = getHeader()
    if (!headers){
      return
    }
    // console.log("herader__", headers);
    // axios.get("http://localhost:8001/api/mycards", headers)
    // .then(result => {
    //   console.log("allll++", result);
    //   setMyCards(result.data);
    // })
    
    Promise.all([
      axios.get("/api/mycards", headers),
     axios.get("/api/savedcards", headers)
    ]).then((all) => {
      //console.log("allll++", all);
      setMyCards(all[0].data);
      setSavedCards(all[1].data);
    });
  }, []);
  

  return (
    <main>
      <nav>
        <NavTop onClick={setPage} />
      </nav>
      <section>
        {page === "MainPage" && <MainPage />}
        {page === "MyCards" && myCards[0] && <MyCards myCards={myCards} />}
        {page === "SavedCards" && savedCards[0] && (
          <SavedCards savedCards={savedCards} />
        )}
        {page === "Login" && <Login />}
        {page === "Register" && <Register setPage={setPage} />}
        {page === "Logout" && <Logout setPage={setPage} />}
    
      </section>
    </main>
  );
}
