import { useState } from "react";
import Login from "./components/Login";
import "./styles/App.css";
import Regisration from "./components/Regisration";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const content = currentForm === "login" ? <Login /> : <Regisration />;
  return content;
}

export default App;
