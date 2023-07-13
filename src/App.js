import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    console.log("Effect");
    axios.get("http://localhost:3001/notes").then((response) => {
      console.log("promesa cumplida");
      setNotes(response.data);
    });
  }, []);
  console.log("render", notes.length, "notes");

  return <div className="App">Datas Base</div>;
}

export default App;
