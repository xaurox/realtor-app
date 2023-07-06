import React from "react";

import { INPUT_TYPES } from "../../../constants/input-type.constants";

export interface InputProps {
  // default
  id: string;
  name: string;
  type: INPUT_TYPES;
  labelText: string;
  placeholder: string;

  // handling value passed as prop
  value: number | string;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;

  // number input
  min?: number;
  max?: number;
}
