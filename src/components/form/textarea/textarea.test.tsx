import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Textarea from "./textarea.components";

describe("Testing input", () => {
  it("Test labelText to render", () => {
    const id = "test";
    const name = "test";
    const labelText = "Hello world";
    const value = "value";

    render(
      <Textarea
        id={id}
        name={name}
        labelText={labelText}
        value={value}
        handleChange={(e: React.FormEvent) => {
          e.preventDefault();
        }}
      />,
    );

    expect(screen.getByText(/Hello world/)).toBeInTheDocument();
  });
});
