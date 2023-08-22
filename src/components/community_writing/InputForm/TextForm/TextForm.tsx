import React from 'react';
import * as styles from "./TextForm.styles"

interface TextFormProps{
  name:string;
  hint:string;
  selectedValue?:string;

  handleChange?:(event: React.ChangeEvent<HTMLTextAreaElement>) => void; // onChange 타입 변경
  rows?:number;
  cols?:number;
}

const TextForm = ({ name, hint, selectedValue, handleChange, rows, cols }:TextFormProps) => {
  return (
    <>
    <styles.TextForm 
      name={name}
      placeholder={"\n"+hint} 
      value={selectedValue}
      onChange={handleChange}
      />
    </>
  );
};

export default TextForm;
