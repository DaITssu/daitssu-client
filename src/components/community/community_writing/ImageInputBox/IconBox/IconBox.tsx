import React from 'react';
import { COLORS } from '@/styles/constants/colors';
import * as styles from "@/components/community/community_writing/ImageInputBox/IconBox/IconBox.styles"
interface FormData {
  iconSize?:number;
  width?:number;
  height?:number;
  backCol?:string;
  margin?:number;
  IconCol?:string;
}

const IconBox = ({iconSize,width,height,backCol,margin,IconCol }:FormData) => {
  return (
    <>
      <label htmlFor="imageInput">
        <styles.IconBox  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        width={width} height={height} backgroundColor={backCol} margin={margin}>
          <img src="/camera.svg" style={{color:`${IconCol?IconCol: COLORS.grayscale.Black}`,
          width:`${iconSize? `${iconSize}px`: "40px"}`}}/>
        </styles.IconBox>
      </label>
    </>
  );
};

export default IconBox;
