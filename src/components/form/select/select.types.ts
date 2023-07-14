export interface SelectType {
  id: string;
  name: string;
  options: string[];
  labelText: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
