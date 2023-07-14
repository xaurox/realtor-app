import React from "react";

import { CheckboxProps } from "./checkbox.types";

import styles from "./checkbox.module.scss";

const { checkbox, checkbox__container, checkbox__label, checkbox__option } =
  styles;

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { labelText, checkboxOptions, handleChange } = props;

  return (
    <div className={checkbox__container}>
      <p className={checkbox__label}>{labelText}</p>
      {Object.keys(checkboxOptions).map((option) => {
        return (
          <div key={option} className={checkbox__option} data-testid="option">
            <input
              id={option}
              name={option}
              type="checkbox"
              className={checkbox}
              checked={checkboxOptions[option]}
              onChange={() => handleChange(option)}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Checkbox;
