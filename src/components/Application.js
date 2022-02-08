import { useEffect, useState } from "react";
import axios from "axios";

import NavTop from "./NavTop";
import MainPage from "./MainPage";
import MyCards from "./MyCards";
import SavedCards from "./SavedCards";

export default function Application(props) {
  
  const [page, setPage] = useState("MyCards")
  
  const [myCards, setMyCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  useEffect(() => {
    Promise.all([
      axios.get("/api/mycards/1"),
      axios.get("/api/savedcards/1")
    ]).then((all) => {
      setMyCards(all[0].data);
      setSavedCards(all[1].data);
    })
  }, [])
  console.log(myCards)

  return (
    <main>
      <nav>
        <NavTop
          onClick = {setPage}
        />
      </nav>
      <section>
        {page === "MainPage" && <MainPage />}
        {page === "MyCards" && myCards[0] && <MyCards myCards={myCards} />}
        {page === "SavedCards" && savedCards[0] && <SavedCards savedCards={savedCards} />}
      </section>
    </main>
  )
}