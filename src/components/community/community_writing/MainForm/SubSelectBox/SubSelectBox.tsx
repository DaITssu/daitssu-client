import { NextPage } from 'next';
import React, { ChangeEvent, useState } from 'react';
import * as styles from "@/components/community/community_writing/MainForm/SubSelectBox/SubSelectBox.styles"
import { SelectListBox } from '@/components/community/community_writing/MainForm/SubSelectBox/SelectListBox/SelectListBox';
interface SubSelectBoxProps {
  options: string[]; // options를 문자열 배열로 변경
  chosen?: string | null; // chosen을 문자열 또는 null로 변경
  onChange?: (e: ChangeEvent<HTMLSelectElement>)  =>  void; // onChange 타입 변경
}

export const SubSelectBox = ({
  options,
  chosen,
  onChange,
}:SubSelectBoxProps) => {
  return (
    <styles.SubjectSelectBox marginBottom={12}>

      <styles.SubjectSelectBoxList width={46}>
        <label htmlFor="selectList" style={{fontSize: "16px"}}>주제</label>
      </styles.SubjectSelectBoxList>

      <styles.SubjectSelectBoxList>
        <SelectListBox options={options} chosen={chosen} onChange={onChange}/>
      </styles.SubjectSelectBoxList>
      
    </styles.SubjectSelectBox>
  );
};
