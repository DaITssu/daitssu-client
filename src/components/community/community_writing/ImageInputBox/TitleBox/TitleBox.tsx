import React from 'react';
import { COLORS } from '@/styles/constants/colors';
import * as styles from "@/components/community/community_writing/ImageInputBox/TitleBox/TitleBox.styles"

interface FormData {
  width?:number;
  height?:number;
  fontSize?:number
}

const TitleBox = ({width,height,fontSize}:FormData) => {
  return (
    <>
    <styles.TitleBox>
      <label htmlFor="imageInput">이미지 첨부</label>
    </styles.TitleBox>
    </>
  );
};

export default TitleBox;
