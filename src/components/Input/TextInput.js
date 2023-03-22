import React, { useId } from "react";
import { useMediaQuery } from "../../hooks";

import "./TextInput.css";

const TextInput = ({ label, value, updateValue }) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 768px)");
  const id = useId();

  const onChange = (event) => updateValue(event.target.value);

  return (
    <>
      {isAboveMediumScreen && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={!isAboveMediumScreen ? label : ""}
        aria-label={label}
      />
    </>
  );
};

export default TextInput;
