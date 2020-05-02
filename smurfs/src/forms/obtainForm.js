import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { obtainSmurf } from "../actions/smurfActions";

const obtainForm = (props) => {
  const [name, setName] = useState({});

  const [age, setAge] = useState({});

  const [height, setHeight] = useState({});

  return (
    <div className="obtainForm">
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
        <input />
      </form>
    </div>
  );
};

export default obtainForm;
