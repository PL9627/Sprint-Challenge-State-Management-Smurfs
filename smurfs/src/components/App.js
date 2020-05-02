import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { SmurfContext } from "../smurfContext/smurfContext";
import SmurfList from "./smurfList";
import SmurfForm from "./smurfForm";

const App = () => {
  const [smurf, setSmurf] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        setSmurf(res.data);
      })
      .catch((err) => console.log("app useEffect err", err));
  }, []);

  const addSmurf = (smurf) => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then((res) => console.log(res))
      .catch((err) => console.log("addSmurf axios err", err));
  };

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <SmurfContext.Provider value={{ smurf }}>
        <SmurfList />
        <SmurfForm addSmurf={addSmurf} />
      </SmurfContext.Provider>
    </div>
  );
};

export default App;
