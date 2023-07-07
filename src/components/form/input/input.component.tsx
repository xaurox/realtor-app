import React from "react";

import { InputProps } from "./input.types";

import styles from "./input.module.scss";

const { input, input__label, input__container } = styles;

const Input: React.FC<InputProps> = (props) => {
  const { id, name, type, labelText, placeholder, value, handleChange, min } =
    props;

  return (
    <div className={input__container}>
      <label htmlFor={id} className={input__label}>
        {labelText}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        className={input}
        placeholder={placeholder}
        defaultValue={value}
        onChange={handleChange}
        min={min}
      />
    </div>
  );
};

export default Input;
