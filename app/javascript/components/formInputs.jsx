import { FormControlLabel, TextField } from "@mui/material";
import React, { useState } from "react";

const isRequiredField = (validate) => {
  return validate.filter((val) => val.type === "required").length > 0;
};

export const Checkbox = ({ name, label }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label>
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
      {"  "}{label}
    </label>
  );
};

export const Number = ({ name, label, validate }) => {
  // need to figure out how to check min value is 0
  checkRequired = validate ? isRequiredField(validate) : false
  return (
    <label>
      {label}{"  "}
      <input
        type="number"
        id={name}
        name={name}
        required={isRequiredField(validate)}
      />
    </label>
    // <TextField type="number" id={name} name={name} label={label} required={isRequiredField(validate)} InputProps={{ inputProps: {inputMode: 'numeric', pattern: '[0-9]*'}}} />
  );
};

export const Select = ({ name, label, options }) => {
  return (
    <label>
      {label}{"  "}
      <select name={name} id={name}>
        {options.map((option) => (
          <option key={`${name}-${option}`} value={option}>{option}</option>
        ))}
      </select>
    </label>
  );
};

export const Text = ({ name, label, validate }) => {
  checkRequired = validate ? isRequiredField(validate) : false
  return (
    <label>
      <input id={name} name={name} required={checkRequired} />
      {"  "}{label}
    </label>
    // <TextField id={name} label={label} required={isRequiredField(validate)} />
  );
};

export const Url = ({ name, label }) => {
  return (
    <label>
      <input id={name} name={name} />
      {"  "}{label}
    </label>
  );
  // return <TextField id={name} label={label} />;
};
