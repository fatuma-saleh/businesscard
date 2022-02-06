import { useEffect, useState } from "react";
import axios from "axios";

import NavTop from "./NavTop";
import MainPage from "./MainPage";
import MyCards from "./MyCards";

export default function Application(props) {
  
  const [page, setPage] = useState("MyCards")
  
  const [cards, setCards] = useState([]);
  useEffect(() => {
    Promise.all([
      axios.get("/api/mycards/2")
    ]).then((all) => {
      setCards(all[0].data);
      console.log(cards)
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
        {page === "MyCards" && cards[0] && <MyCards card={cards} />}
        {page === "SavedCards" && <MyCards />}
      </section>
    </main>
  )
}