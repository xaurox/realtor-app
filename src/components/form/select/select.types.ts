export interface SelectType {
  id: string;
  name: string;
  options: string[];
  labelText: string;
  value: string;
  handleChange: (arg: string) => void;
}
