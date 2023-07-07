import React from "react";

import { TextareaType } from "./textarea.types";

import styles from "./textarea.module.scss";

const { textarea, textarea__container, textarea__label } = styles;

const Textarea: React.FC<TextareaType> = (props) => {
  const { id, name, labelText, value, handleChange } = props;

  const textareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleChange(e.target.value);
  };

  return (
    <div className={textarea__container}>
      <label htmlFor={id} className={textarea__label}>
        {labelText}
      </label>
      <textarea
        id={id}
        name={name}
        className={textarea}
        value={value}
        onChange={textareaChange}
        rows={8}
      ></textarea>
    </div>
  );
};

export default Textarea;
