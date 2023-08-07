import React from 'react';
import { MonthControlButtonStyle } from './MonthControlButton.styles';
import Image from 'next/image';
import LeftArrow from '@icons/icon/Arrow/LeftBigArrow.svg';
import RightArrow from '@icons/icon/Arrow/RightBigArrow.svg';

const MonthControlButton = ({
  isLeft,
  onClick,
}: {
  isLeft: boolean;
  onClick: () => void;
}) => {
  return (
    <MonthControlButtonStyle onClick={onClick}>
      <Image
        src={isLeft ? LeftArrow : RightArrow}
        alt="ArrowImage"
        height={20}
        width={20}
      />
    </MonthControlButtonStyle>
  );
};

export default MonthControlButton;
