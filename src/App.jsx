import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MadeBy } from "./pages/MadeBy";
import { Navbar } from "./components/Navbar";
import "./css/App.css";

function App() {
  return (
    <div id="bodyApp">
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/madeby" element={<MadeBy/>} />
        </Routes>
    </div>
  );
}

export default App;
