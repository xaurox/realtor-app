import SignInForm from "../../layouts/sign-in-form/sign-in-form.component";
import SignUpForm from "../../layouts/sign-up-form/sign-up-form.component";

import Header from "../../components/header/header.component";

import useSignMode from "../../hooks/useSignMode.hook";

import { SIGN_MODES } from "../../constants/sign-modes.constants";

import styles from "./login-page.module.scss";

const { loginPage } = styles;

const LoginPage = () => {
  const [signMode, toggleSignMode] = useSignMode();

  return (
    <div className={loginPage}>
      <Header />
      <div>
        {signMode === SIGN_MODES.SIGN_UP ? (
          <SignUpForm toggleSignMode={toggleSignMode} />
        ) : (
          <SignInForm toggleSignMode={toggleSignMode} />
        )}
      </div>
    </div>
  );
};

export default LoginPage;
