import { BrowserRouter, Routes, Route } from "react-router-dom";

import Application from "./components/Application";
import CardShow from "./components/pages/CardShow";
import Layout from "./components/pages/Layout";

import './App.css'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={<Application />} />
            <Route
              path={`showcard/:id`}
              element={<CardShow />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
