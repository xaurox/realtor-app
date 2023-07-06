import React from "react";

import { FileInputProps } from "./file-input.types";

import styles from "./file-input.module.scss";

const {
  fileInput__container,
  input,
  input__container,
  input__label,
  input__button,
  files__container,
  files__list,
  files__label,
  files__item,
} = styles;

const FileInput: React.FC<FileInputProps> = (props) => {
  const {
    id,
    name,
    accept,
    multiple,
    labelText,
    files,
    handleFilesChange,
    images,
  } = props;

  return (
    <div className={fileInput__container}>
      <div className={input__container}>
        <p className={input__label}>{labelText}</p>
        <label htmlFor={id} className={input__button}>
          Upload photos
        </label>
        <input
          id={id}
          name={name}
          type="file"
          accept={accept}
          multiple={multiple}
          className={input}
          onChange={handleFilesChange}
        />
      </div>
      {files.length ? (
        <div className={files__container}>
          <p className={files__label}>Uploaded photos:</p>
          <div className={files__list}>
            {images.map((image, index) => {
              return (
                <div key={index} className={files__item}>
                  <img src={image} alt={files[index].name} />
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FileInput;
