import { useEffect, useState } from "react";
import axios from "axios";

import NavTop from "./NavTop";
import MainPage from "./MainPage";
import MyCards from "./MyCards";

export default function Application(props) {
  
  const [page, setPage] = useState("MyCards")
  
  const [myCards, setCards] = useState([]);
  useEffect(() => {
    Promise.all([
      axios.get("/api/mycards/2")
    ]).then((all) => {
      setCards(all[0].data);
    })
  }, [])

  return (
    <main>
      <nav>
        <NavTop
          onClick = {setPage}
        />
      </nav>
      <section>
        {page === "MainPage" && <MainPage />}
        {page === "MyCards" && myCards[0] && <MyCards cards={myCards} />}
        {page === "SavedCards" && <MyCards />}
      </section>
    </main>
  )
}