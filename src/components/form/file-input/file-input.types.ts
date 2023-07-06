import { ACCEPT_PATTERNS } from "../../../constants/file-input-accept-patterns.constants";

export interface FileInputProps {
  id: string;
  name: string;
  accept: ACCEPT_PATTERNS;
  multiple: boolean;
  labelText: string;
  files: FileList;
  handleFilesChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  images: string[];
}
