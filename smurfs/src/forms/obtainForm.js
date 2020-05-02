import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { obtainSmurf } from "../actions/smurfActions";

const obtainForm = (props) => {
  const [name, setName] = useState({});

  const [age, setAge] = useState({});

  const [height, setHeight] = useState({});

  const ageChangeHandler = (event) => {
    setAge({age: event.target.value});
  };

  const nameChangeHandler = (event) => {
      setName({name: event.target.value});
  };

  const heightChangeHandler = (event) => {
      setHeight({height: event.target.value});
  };

  const handleSubmit = (event) => {
      event.preventDefault();
  };

  return (
    <div className="obtainForm" onSubmit={}>
      <form>
        <input
          name="name"
          type="text"
          onChange={}
          placeholder="Type smurf name here..."
        />
        <input
          name="age"
          type="number"
          onChange={}
          placeholder="Type smurf age here..."
        />
        <input
          name="height"
          type="text"
          onChange={}
          placeholder="Type smurf height here..."
        />
        <button type="submit">Create New Smurf</button>
      </form>
    </div>
  );
};

export default obtainForm;
