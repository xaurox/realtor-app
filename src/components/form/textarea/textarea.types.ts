export interface TextareaType {
  id: string;
  name: string;
  labelText: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
