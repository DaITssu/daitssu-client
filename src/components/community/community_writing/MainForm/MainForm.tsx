
import { SubSelectBox } from "@/components/community/community_writing/MainForm/SubSelectBox/SubSelectBox";

import React, { ChangeEvent, useState } from 'react';
interface SubmitHeadernProps {
  label?: string;
  width?: number;
  height?: number;
  color?: string;

  selectedValue?:string;
  onChange?:(e: ChangeEvent<HTMLSelectElement>)  => void; 
}

const SubmitHeader = ({onChange,selectedValue}: SubmitHeadernProps) => (
  <>

    <SubSelectBox chosen={selectedValue} options={["잡담","질문", "정보"]} onChange={onChange}></SubSelectBox>
  </>
);

export default SubmitHeader;
