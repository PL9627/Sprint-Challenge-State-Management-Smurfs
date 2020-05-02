import React, { useState } from "react";

const SmurfForm = (props) => {
  const [smurfForm, setsmurfForm] = useState({
    name: "",
    age: "",
    height: "",
  });

  const changeHandler = (event) => {
    setsmurfForm({
      ...smurfForm,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.addSmurf(smurfForm);

    setsmurfForm({
      name: "",
      age: "",
      height: "",
    });
  };

  return (
    <div className="smurfForm">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          onChange={changeHandler}
          value={smurfForm.name}
          placeholder="Type smurf name here..."
        />
        <input
          type="text"
          name="age"
          onChange={changeHandler}
          value={smurfForm.age}
          placeholder="Type smurf age here..."
        />
        <input
          type="text"
          name="height"
          onChange={changeHandler}
          value={smurfForm.height}
          placeholder="Type smurf height here..."
        />
        <button type="submit">Create New Smurf</button>
      </form>
    </div>
  );
};

export default SmurfForm;