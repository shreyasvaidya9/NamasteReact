import React, { useId } from "react";

import "./TextInput.css";

const TextInput = ({ label, value, updateValue }) => {
  const id = useId();

  const onChange = (event) => updateValue(event.target.value);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" value={value} onChange={onChange} />
    </>
  );
};

export default TextInput;
