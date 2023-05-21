import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main_page from "./pages/Main_page";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main_page />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
