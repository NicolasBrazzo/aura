import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MadeBy } from "./pages/MadeBy";
import { Navbar } from "./components/Navbar";
import "./css/App.css";
import { Login } from "./pages/Login";
import { ModifyPeopleAura } from "./pages/ModifyPeopleAura";

function App() {
  return (
    <div id="bodyApp">
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/madeby" element={<MadeBy/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/modifyPeopleAura" element={<ModifyPeopleAura/>} />
        </Routes>
    </div>
  );
}

export default App;
