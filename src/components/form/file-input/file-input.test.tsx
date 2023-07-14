import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import FileInput from "./file-input.component";

import { ACCEPT_PATTERNS } from "../../../constants/file-input-accept-patterns.constants";

describe("Test file input", () => {
  it("Test labelText to render", () => {
    const id = "test";
    const name = "test";
    const accept = ACCEPT_PATTERNS.IMAGES;
    const multiple = false;
    const labelText = "Hello world";

    const files = { length: 0 } as FileList;
    const images = [] as string[];

    render(
      <FileInput
        id={id}
        name={name}
        accept={accept}
        multiple={multiple}
        labelText={labelText}
        files={files}
        images={images}
        handleFilesChange={(e) => e.preventDefault()}
      />,
    );

    expect(screen.getByText(/Hello world/)).toBeInTheDocument();
  });

  it("Test 0 files to render", () => {
    const id = "test";
    const name = "test";
    const accept = ACCEPT_PATTERNS.IMAGES;
    const multiple = false;
    const labelText = "Hello world";

    const files = { length: 0 } as FileList;
    const images = [] as string[];

    render(
      <FileInput
        id={id}
        name={name}
        accept={accept}
        multiple={multiple}
        labelText={labelText}
        files={files}
        images={images}
        handleFilesChange={(e) => e.preventDefault()}
      />,
    );

    expect(screen.queryByTestId("files-container")).not.toBeInTheDocument();
  });

  it("Test 1 file to render", () => {
    const id = "test";
    const name = "test";
    const accept = ACCEPT_PATTERNS.IMAGES;
    const multiple = false;
    const labelText = "Hello world";

    const files = {
      length: 1,
      0: { name: "xaurox.png" },
    } as unknown as FileList;
    const images = ["xaurox.png"];

    render(
      <FileInput
        id={id}
        name={name}
        accept={accept}
        multiple={multiple}
        labelText={labelText}
        files={files}
        images={images}
        handleFilesChange={(e) => e.preventDefault()}
      />,
    );

    expect(screen.getAllByTestId("image-container").length).toBe(1);
  });

  it("Test multiple files to render", () => {
    const id = "test";
    const name = "test";
    const accept = ACCEPT_PATTERNS.IMAGES;
    const multiple = true;
    const labelText = "Hello world";

    const files = {
      length: 3,
      0: { name: "xaurox.png" },
      1: { name: "xaurox.png" },
      2: { name: "xaurox.png" },
    } as unknown as FileList;
    const images = ["xaurox.png", "xaurox.png", "xaurox.png"];

    render(
      <FileInput
        id={id}
        name={name}
        accept={accept}
        multiple={multiple}
        labelText={labelText}
        files={files}
        images={images}
        handleFilesChange={(e) => e.preventDefault()}
      />,
    );

    expect(screen.getAllByTestId("image-container").length).toBe(3);
  });
});
