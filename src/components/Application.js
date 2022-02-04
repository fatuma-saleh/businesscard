import { useState } from "react";

import NavTop from "./NavTop";
import MainPage from "./MainPage";
import MyCards from "./MyCards";
import SavedCards from "./SavedCards";
import NewCards from "./NewCards";
import Template from "./Template";
import Register from "./Register";

export default function Application(props) {
  const [page, setPage] = useState("MyCards")
  return (
    <main>
      <nav>
        <NavTop
          onClick = {setPage}
        />
      </nav>
      <section>
        {page === "MainPage" && <MainPage />}
        {page === "MyCards" && <MyCards />}
        {page === "SavedCards" && <SavedCards />}
        {page === "NewCards" && <NewCards />}
        {page === "Template" && <Template />}
      </section>
    </main>
  )
}