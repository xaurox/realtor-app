import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Select from "./select.component";

import { PROPERTY_TYPES } from "../../../constants/property-types.constants";

describe("Test select component", () => {
  it("Test labelText to render", () => {
    const id = "test";
    const name = "test";
    const options = PROPERTY_TYPES;
    const labelText = "Hello world";
    const value = PROPERTY_TYPES[0];
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      e.preventDefault();
    };

    render(
      <Select
        id={id}
        name={name}
        options={options}
        labelText={labelText}
        value={value}
        handleChange={handleChange}
      />,
    );

    expect(screen.getByText(labelText)).toBeInTheDocument();
  });

  it("Test amount of options to render", () => {
    const id = "test";
    const name = "test";
    const options = PROPERTY_TYPES;
    const labelText = "Hello world";
    const value = PROPERTY_TYPES[0];
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      e.preventDefault();
    };

    render(
      <Select
        id={id}
        name={name}
        options={options}
        labelText={labelText}
        value={value}
        handleChange={handleChange}
      />,
    );

    expect(screen.getAllByTestId("option").length).toBe(PROPERTY_TYPES.length);
  });
});
