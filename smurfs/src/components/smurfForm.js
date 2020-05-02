import React, { useState } from "react";

const SmurfForm = () => {
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
        height: ""
    })
  };

  return (
      <div className="smurfForm">
          <form onSubmit={submitHandler}>
            <input type="text"
            name="name"
            onChange={changeHandler}
            value={smurfForm.name}
            placeholder="Type smurf name here..."/>
            <input />
            <input />
          </form>
      </div>
  )
};
