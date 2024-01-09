import { NextPage } from 'next';
import React, { ChangeEvent, useState } from 'react';
import { SelectListSelect } from './SelectListBox.styles';


interface SelectListBoxProps {
  options: string[]; // options를 문자열 배열로 변경
  chosen?: string | null; // chosen을 문자열 또는 null로 변경
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;  // onChange 타입 변경
}

export const SelectListBox = ({
  options,
  chosen,
  onChange,
}:SelectListBoxProps) => {
  return (
        <SelectListSelect
          id="selectList"
          name="selectedValue"
          value={chosen || 'err'} // 선택한 값이 null이면 빈 문자열로 설정
          onChange={onChange}
          className={'custom-select'}
          style={{
            width: "92px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius:" 5px",
            outline: "none",
            fontSize: "16px",
            backgroundColor: "#fff",
            cursor: "pointer"}}
          >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </SelectListSelect>
  );
};