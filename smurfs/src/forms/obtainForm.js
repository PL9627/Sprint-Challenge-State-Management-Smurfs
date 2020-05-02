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
          <input/>
          <input/>
          <input/>
          <input/>
      </form>
    </div>
  );
};

export default obtainForm;
