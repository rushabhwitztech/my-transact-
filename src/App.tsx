import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Screen from "./components/pages/Screen";
import Screenone from "./components/pages/Screenone";
import Screentwo from "./components/pages/Screentwo";
import NavBar from "./components/NavBar";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Screen />}></Route>
          <Route path="/screen-one" element={<Screenone />}></Route>
          <Route path="/screen-two" element={<Screentwo />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
