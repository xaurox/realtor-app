import React, { useState, useEffect, useReducer } from "react";

import { ref, uploadBytes } from "firebase/storage";

import { storage } from "../../utils/firebase/firebase";

import { INPUT_TYPES } from "../../constants/input-type.constants";
import { PROPERTY_TYPES } from "../../constants/property-types.constants";
import { ACCEPT_PATTERNS } from "../../constants/file-input-accept-patterns.constants";
import { PROPERTY_UTILITIES } from "../../constants/property-utilities.constants";

import Input from "../../components/form/input/input.component";
import Select from "../../components/form/select/select.component";
import Checkbox from "../../components/form/checkbox/checkbox.component";
import Textarea from "../../components/form/textarea/textarea.components";
import FileInput from "../../components/form/file-input/file-input.component";

import styles from "./create-offer-form.module.scss";

const { form, form__container, form__heading, form__button } = styles;

const CreateOfferForm: React.FC = () => {
  const [propertyType, setPropertyType] = useState(PROPERTY_TYPES[0]);
  const [address, setAddress] = useState("");
  const [numberOfRooms, setNumberOfRooms] = useState(0);
  const [area, setArea] = useState(0);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const [files, setFiles] = useState<FileList>({ length: 0 } as FileList);
  const [images, setImages] = useState<string[]>([]);

  const initialState = PROPERTY_UTILITIES.reduce(
    (acc: { [key: string]: boolean }, curr) => {
      acc[curr] = false;
      return acc;
    },
    {},
  );

  const reducer = (state: { [key: string]: boolean }, action: string) => {
    if (action === "reset") {
      return { ...initialState };
    }

    if (action) {
      return { ...state, [action]: !state[action] };
    }

    return state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleCheckChange = (option: string) => {
    dispatch(option);
  };

  const handleTextChange =
    (setState: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.FormEvent<HTMLInputElement>) => {
      setState(e.currentTarget.value);
    };

  const handleNumberChange =
    (setState: React.Dispatch<React.SetStateAction<number>>) =>
    (e: React.FormEvent<HTMLInputElement>) => {
      setState(Number(e.currentTarget.value));
    };

  const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImages([]);

    const changedFiles = e.target.files;

    if (changedFiles) {
      setFiles(changedFiles);
    }
  };

  useEffect(() => {
    const images: string[] = [];
    const fileReaders: FileReader[] = [];

    let isCancel = false;

    if (!files) return;
    if (!files.length) return;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      const fileReader = new FileReader();
      fileReaders.push(fileReader);

      fileReader.onload = (e) => {
        const result = e.target?.result;

        if (result) {
          images.push(result.toString());
        }

        if (images.length === files.length && !isCancel) {
          setImages(images);
        }
      };

      fileReader.readAsDataURL(file);
    }

    return () => {
      isCancel = true;

      fileReaders.forEach((fileReader) => {
        if (fileReader.readyState === 1) {
          fileReader.abort();
        }
      });
    };
  }, [files]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    for (let i = 0; i < files.length; i++) {
      const storageRef = ref(storage, `images/${files[i].name}`);

      uploadBytes(storageRef, files[i])
        .then(() => {
          console.log("File uploaded!");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className={form__container}>
      <form className={form} noValidate onSubmit={handleSubmit}>
        <h2 className={form__heading}>Create offer:</h2>
        <Select
          id="type"
          name="type"
          options={PROPERTY_TYPES}
          labelText="Property type:"
          value={propertyType}
          handleChange={setPropertyType}
        />

        <Input
          id="address"
          name="address"
          type={INPUT_TYPES.TEXT}
          labelText={`${propertyType} address:`}
          placeholder="Input address..."
          value={address}
          handleChange={handleTextChange(setAddress)}
        />

        <Input
          id="rooms"
          name="rooms"
          type={INPUT_TYPES.NUMBER}
          labelText="Number of rooms:"
          placeholder="Input number of rooms..."
          value={numberOfRooms}
          handleChange={handleNumberChange(setNumberOfRooms)}
          min={1}
        />

        <Input
          id="area"
          name="area"
          type={INPUT_TYPES.NUMBER}
          labelText={`${propertyType} area:`}
          placeholder={`Input ${propertyType} area...`}
          value={area}
          handleChange={handleNumberChange(setArea)}
        />

        <Checkbox
          labelText={`${propertyType} utilities:`}
          checkboxOptions={state}
          handleChange={handleCheckChange}
        />

        <Input
          id="price"
          name="price"
          type={INPUT_TYPES.NUMBER}
          labelText={`${propertyType} price:`}
          placeholder={`Input ${propertyType} price...`}
          value={price}
          handleChange={handleNumberChange(setPrice)}
        />

        <Textarea
          id="description"
          name="description"
          labelText={`${propertyType} description:`}
          value={description}
          handleChange={handleTextChange(setDescription)}
        />

        <FileInput
          id="photos"
          name="photos"
          accept={ACCEPT_PATTERNS.IMAGES}
          multiple={true}
          labelText={`${propertyType} photos:`}
          files={files}
          handleFilesChange={handleFilesChange}
          images={images}
        />

        <button className={form__button}>Create offer</button>
      </form>
    </div>
  );
};

export default CreateOfferForm;
