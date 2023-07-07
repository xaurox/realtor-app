import { useState } from "react";

import { SIGN_MODES } from "../constants/sign-modes.constants";

const useSignMode = (): [SIGN_MODES, () => void] => {
  const [signMode, setSignMode] = useState(SIGN_MODES.SIGN_UP);

  const toggleSignMode = () =>
    signMode === SIGN_MODES.SIGN_UP
      ? setSignMode(SIGN_MODES.SIGN_IN)
      : setSignMode(SIGN_MODES.SIGN_UP);

  return [signMode, toggleSignMode];
};

export default useSignMode;
