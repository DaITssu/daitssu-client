import * as styles from './InputBox.styles';
import { Dispatch, SetStateAction } from 'react';

interface InputBoxProps {
  width?: string;
  height?: string;
  label?: string;
  type?: 'text' | 'number' | 'password';
  placeholder?: string;
  value: any;
  setValue: Dispatch<SetStateAction<any>>;
}

export default function InputBox({ value, setValue, ...props }: InputBoxProps) {
  const handleChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    if (props.type === 'number' && e.currentTarget.value) {
      setValue(Number(e.currentTarget.value));
    } else setValue(e.currentTarget.value);
  };
  return (
    <styles.InputBoxContainer>
      <styles.InputLabel htmlFor={props.label}>{props.label}</styles.InputLabel>
      <styles.Input
        value={value || ''}
        onChange={handleChangeInput}
        id={props.label}
        type={props.type}
        width={props.width}
        height={props.height}
        placeholder={props.placeholder}
      />
    </styles.InputBoxContainer>
  );
}
