import "./App.css";
import Navbar from "./Component/Navbar";
import { Routes, Route } from "react-router-dom";
import SavedData from "./Component/SavedData";
import "bootstrap/dist/css/bootstrap.css";
import useAuth from "./Context/useAuth";
import Example from "./Component/Popup";
import { lazy } from "react";
import NavbarTwo from "./Component/NavbarTwo";
const Home=lazy (()=>import("./Component/Home")) 

function App() {
  const { show } = useAuth();
  return (
    <div className="App">
      <Navbar />
   
      {show && <Example/>}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SavedData" element={<SavedData />} />
      </Routes>
    </div>
  );
}

export default App;
