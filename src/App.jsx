import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page_1 from "../src/chapter_1/Page_1";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page_1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
