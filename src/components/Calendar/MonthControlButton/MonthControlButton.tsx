import React from 'react';
import './MonthControlButton.css'; // CSS 파일을 import
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
  // day는 버튼에 표시할 요일 정보를 받아오고, onClick은 버튼 클릭 시 호출할 함수를 받아옵니다.

  return (
    <button className="custom-button" onClick={onClick}>
      <Image
        src={isLeft ? LeftArrow : RightArrow}
        alt="ArrowImage"
        height={20}
        width={20}
      />
    </button>
  );
};

export default MonthControlButton;
