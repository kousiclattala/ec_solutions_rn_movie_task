export type TextInputBoxProps = {
  value: string;
  onChangeText: (val: string) => void;
  placeholder: string;
  isSecure: boolean;
  isError: boolean;
  label: string;
};
