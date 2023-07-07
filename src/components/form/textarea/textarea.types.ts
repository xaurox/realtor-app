export interface TextareaType {
  id: string;
  name: string;
  labelText: string;
  value: string;
  handleChange: (arg: string) => void;
}
