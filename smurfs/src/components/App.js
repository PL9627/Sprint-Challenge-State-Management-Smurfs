import React, { useState, useEffect } from "react";
import "./App.css";
import { SmurfContext } from "../context/smurfContext";
import axios from "axios";
import SmurfList from "./smurfList";
import SmurfForm from "./smurfForm";

const App = () => {
  const [newSmurfs, setNewSmurfs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        //console.log(res);

        setNewSmurfs(res.data);
      })
      .catch((err) => console.log("useEffect axios get err", err));
  }, []);

  const postSmurfs = (smurf) => {
    axios.post("http://localhost:3333/smurfs", smurf)
      .then((res) => console.log(res))
      .catch((err) => console.log("axios post err", err));
  };

  return (
    <SmurfContext.Provider value ={{newSmurfs, postSmurfs}}>
      <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <SmurfList />
      <SmurfForm />
    </div>
    </SmurfContext.Provider>
  );
};

export default App;
