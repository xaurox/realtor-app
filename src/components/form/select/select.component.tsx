import React from "react";

import { SelectType } from "./select.types";

import styles from "./select.module.scss";

const { select, select__container, select__label, select__option } = styles;

const Select: React.FC<SelectType> = (props) => {
  const { id, name, options, labelText, value, handleChange } = props;

  return (
    <div className={select__container}>
      <label htmlFor={id} className={select__label}>
        {labelText}
      </label>
      <select
        name={name}
        id={id}
        className={select}
        value={value}
        onChange={handleChange}
      >
        {options.map((option) => {
          return (
            <option
              key={option}
              value={option}
              label={option}
              className={select__option}
              data-testid="option"
            >
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
