import React, { useState } from "react";

import Input from "../../components/form/input/input.component";

import { SignUpFormType } from "./sign-up-form.types";

import styles from "./sign-up-form.module.scss";
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

const SignUpForm: React.FC<SignUpFormType> = ({ toggleSignMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
        <h2 className={form__heading}>Sign Up:</h2>
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
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type={INPUT_TYPES.PASSWORD}
          labelText="Confirm password"
          placeholder="Confirm your password..."
          value={confirmPassword}
          handleChange={handleTextChange(setConfirmPassword)}
        />
        <button className={form__button}>Sign Up</button>
      </form>
      <div className={toggleMethodContainer}>
        <p className={toggleMethodContainer__description}>
          Already have an accound?
        </p>
        <p className={toggleMethodContainer__link} onClick={toggleSignMode}>
          Sign In
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
