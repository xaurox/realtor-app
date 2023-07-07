export interface TextareaType {
  id: string;
  name: string;
  labelText: string;
  value: string;
  handleChange: React.Dispatch<React.SetStateAction<string>>;
}
