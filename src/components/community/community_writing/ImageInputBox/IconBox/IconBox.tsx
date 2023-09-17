import React from 'react';
import { COLORS } from '@/styles/constants/colors';
import { FiCamera } from 'react-icons/fi'; 
import * as styles from "./IconBox.styles"
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
          <FiCamera 
            style={{color:`${IconCol?IconCol: COLORS.grayscale.Black}`}}
            size={iconSize? iconSize: 40} /> 
        </styles.IconBox>
      </label>
    </>
  );
};

export default IconBox;
