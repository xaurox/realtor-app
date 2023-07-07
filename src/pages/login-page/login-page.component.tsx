import SignInForm from "../../layouts/sign-in-form/sign-in-form.component";
import SignUpForm from "../../layouts/sign-up-form/sign-up-form.component";

import useSignMode from "../../hooks/useSignMode.hook";

import { SIGN_MODES } from "../../constants/sign-modes.constants";

const LoginPage = () => {
  const [signMode, toggleSignMode] = useSignMode();

  return (
    <div>
      {signMode === SIGN_MODES.SIGN_UP ? (
        <SignUpForm toggleSignMode={toggleSignMode} />
      ) : (
        <SignInForm toggleSignMode={toggleSignMode} />
      )}
    </div>
  );
};

export default LoginPage;
