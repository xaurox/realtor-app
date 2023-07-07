export interface CheckboxProps {
  labelText: string;
  checkboxOptions: { [key: string]: boolean };
  handleChange: (option: string) => void;
}
