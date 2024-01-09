import React from 'react';
import { COLORS } from '@/styles/constants/colors';
import * as styles from '@/components/community/community_writing/ImageInputBox/IconBox/IconBox.styles';
import Image from 'next/image';
interface FormData {
  iconSize?: number;
  width?: number;
  height?: number;
  backgroundColor?: string;
  margin?: number;
  IconColor?: string;
}

const IconBox = ({
  iconSize,
  width,
  height,
  backgroundColor,
  margin,
  IconColor,
}: FormData) => {
  return (
    <>
      <label htmlFor="imageInput">
        <styles.IconBox
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          width={width}
          height={height}
          backgroundColor={backgroundColor}
          margin={margin}
        >
          <Image
            src="/camera.svg"
            width={iconSize ? iconSize : 40}
            height={iconSize ? iconSize : 40}
            color={IconColor ? IconColor : COLORS.grayscale.Black}
            alt="camera"
          />
        </styles.IconBox>
      </label>
    </>
  );
};

export default IconBox;
