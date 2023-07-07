import React, { useState } from "react";

import Input from "../../components/form/input/input.component";

import { SignInFormType } from "./sign-in-form.types";

import styles from "./sign-in-form.module.scss";
import { INPUT_TYPES } from "../../constants/input-type.constants";

const {
  form,
  form__container,
  form__heading,
  form__button,
  toggleMethodContainer,
  toggleMethodContainer__description,
  toggleMethodContainer__link,
} = styles;

const SignInForm: React.FC<SignInFormType> = ({ toggleSignMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleTextChange =
    (setState: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.FormEvent<HTMLInputElement>) => {
      setState(e.currentTarget.value);
    };

  return (
    <div className={form__container}>
      <form className={form} noValidate onSubmit={handleSubmit}>
        <h2 className={form__heading}>Sign In:</h2>
        <Input
          id="email"
          name="email"
          type={INPUT_TYPES.EMAIL}
          labelText="Email:"
          placeholder="Input your email..."
          value={email}
          handleChange={handleTextChange(setEmail)}
        />
        <Input
          id="password"
          name="password"
          type={INPUT_TYPES.PASSWORD}
          labelText="Password"
          placeholder="Input your password..."
          value={password}
          handleChange={handleTextChange(setPassword)}
        />
        <button className={form__button}>Sign In</button>
      </form>
      <div className={toggleMethodContainer}>
        <p className={toggleMethodContainer__description}>Need an accound?</p>
        <p className={toggleMethodContainer__link} onClick={toggleSignMode}>
          Sign Up
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
