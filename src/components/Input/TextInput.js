import React, { useId } from "react";
import { useMediaQuery } from "../../hooks";
import { ABOVE_MEDIUM_SCREEN } from "../../utils/constants";

import "./TextInput.css";

const TextInput = ({ label, value, updateValue }) => {
  const isAboveMediumScreen = useMediaQuery(ABOVE_MEDIUM_SCREEN);
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
