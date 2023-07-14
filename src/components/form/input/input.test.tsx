import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Input from "./input.component";

import { INPUT_TYPES } from "../../../constants/input-type.constants";

describe("Testing input", () => {
  it("Test labelText to render", () => {
    const id = "test";
    const name = "test";
    const type = INPUT_TYPES.TEXT;
    const labelText = "Hello world";
    const placeholder = "placeholder";
    const value = "value";

    render(
      <Input
        id={id}
        name={name}
        type={type}
        labelText={labelText}
        placeholder={placeholder}
        value={value}
        handleChange={(e: React.FormEvent) => {
          e.preventDefault();
        }}
      />
    );

    expect(screen.getByText(/Hello world/)).toBeInTheDocument();
  });

  it("Test value prop to render", () => {
    const id = "test";
    const name = "test";
    const type = INPUT_TYPES.TEXT;
    const labelText = "Hello world";
    const placeholder = "placeholder";
    const value = "value";

    render(
      <Input
        id={id}
        name={name}
        type={type}
        labelText={labelText}
        placeholder={placeholder}
        value={value}
        handleChange={(e: React.FormEvent) => {
          e.preventDefault();
        }}
      />
    );

    expect(screen.getByDisplayValue(value)).toBeInTheDocument();
  });

  it("Test placeholder prop to render", () => {
    const id = "test";
    const name = "test";
    const type = INPUT_TYPES.TEXT;
    const labelText = "Hello world";
    const placeholder = "placeholder";
    const value = "value";

    render(
      <Input
        id={id}
        name={name}
        type={type}
        labelText={labelText}
        placeholder={placeholder}
        value={value}
        handleChange={(e: React.FormEvent) => {
          e.preventDefault();
        }}
      />
    );

    expect(screen.getByPlaceholderText(/placeholder/)).toBeInTheDocument();
  });
});
