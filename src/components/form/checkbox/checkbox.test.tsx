import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Checkbox from "./checkbox.component";

describe("Testing checkbox", () => {
  it("Test labelText to render", () => {
    const labelText = "Hello world";
    const checkboxOptions = {
      TV: false,
      Microwave: true,
    };
    const handleChange = (option: string) => {
      return;
    };

    render(
      <Checkbox
        labelText={labelText}
        checkboxOptions={checkboxOptions}
        handleChange={handleChange}
      />,
    );

    expect(screen.getByText(labelText)).toBeInTheDocument();
  });

  it("Test checkboxes to be checked correctly", () => {
    const labelText = "Hello world";
    const checkboxOptions = {
      TV: false,
      Microwave: true,
    };
    const handleChange = (option: string) => {
      return;
    };

    render(
      <Checkbox
        labelText={labelText}
        checkboxOptions={checkboxOptions}
        handleChange={handleChange}
      />,
    );

    expect(screen.getByRole("checkbox", { name: "TV" })).not.toBeChecked();
    expect(screen.getByRole("checkbox", { name: "Microwave" })).toBeChecked();
  });

  it("Test amount of options", () => {
    const labelText = "Hello world";
    const checkboxOptions = {
      TV: false,
      Microwave: true,
    };
    const handleChange = (option: string) => {
      return;
    };

    render(
      <Checkbox
        labelText={labelText}
        checkboxOptions={checkboxOptions}
        handleChange={handleChange}
      />,
    );

    expect(screen.queryAllByTestId("option").length).toBe(2);
  });
});
