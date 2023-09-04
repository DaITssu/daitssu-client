import { NextPage } from 'next';
import React from 'react';

interface SelectListBoxProps {
  options: string[]; // options를 문자열 배열로 변경
  chosen?: string | null; // chosen을 문자열 또는 null로 변경
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void; // onChange 타입 변경
}

export const SelectListBox = ({
  options,
  chosen,
  onChange,
}:SelectListBoxProps) => {
  return (
        <select
          id="selectList"
          name="selectedValue"
          value={chosen || ''} // 선택한 값이 null이면 빈 문자열로 설정
          onChange={onChange}
          className={'custom-select'}
          >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
  );
};
