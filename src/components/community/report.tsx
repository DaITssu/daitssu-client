import * as styles from './report.styles';
import { useState, useEffect } from 'react';
import { TEXT_STYLES } from '../../styles/constants/textStyles';
import { NextPage } from 'next';
import { COLORS } from '../../styles/constants/colors';
import Button from '../common/Button';
import BottomPopUp from '../common/BottomPopUp';
import React from 'react';
import CheckedRadio from '@icons/icon/Radio/CheckedRadio.svg';
import DefaultRadio from '@icons/icon/Radio/DefaultRadio.svg';
import Image from 'next/image';

interface ReportItemProps {
  text: string;
  isSelected: boolean;
  onClick: any;
}

const ReportItem: NextPage<ReportItemProps> = ({
  text,
  isSelected,
  onClick,
}) => {
  return (
    <styles.ReportItemStyle onClick={onClick}>
      {isSelected ? (
        <Image src={CheckedRadio} alt="checkRadio" />
      ) : (
        <Image src={DefaultRadio} alt="checkRadio" />
      )}
      <span style={TEXT_STYLES.BodyM16}>{text}</span>
    </styles.ReportItemStyle>
  );
};

export const Report = () => {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const handleIconToggle = (icon: string) => {
    setSelectedIcon(icon);
  };
  const customTextStyle = {
    ...TEXT_STYLES.CapM14,
    color: COLORS.grayscale.Gray1,
  };
  const ReportText = [
    '비매너 사용자',
    '욕설 및 비방',
    '적합하지 않는 게시글',
    '성희롱 발언',
    '거래글',
    '불법 및 스팸글',
    '기타',
  ];
  return (
    <div>
      <div style={TEXT_STYLES.HeadSM20}>신고하는 이유를 선택해주세요</div>
      <div style={{ height: '20px' }} />
      <div style={customTextStyle}>
        허위 신고에 대해서는 당사자에게 운영정책상 제제가 있을 수 있습니다.
      </div>
      <div style={{ height: '20px' }} />
      <div style={{ marginBottom: '30px' }}>
        {ReportText.map((res) => (
          <ReportItem
            text={res}
            isSelected={selectedIcon === res}
            onClick={() => handleIconToggle(res)}
            key={res}
          />
        ))}
      </div>
      <div
        style={{ backgroundColor: COLORS.grayscale.Gray5, height: '16px' }}
      />
      <div style={{ marginTop: '20px', marginBottom: '20px' }}>
        <div style={TEXT_STYLES.BodyM16}>신고 사유 내용입력</div>
        <styles.ReportInput
          placeholder="신고 사유에 대한 내용을 입력해주세요."
          type="text"
        ></styles.ReportInput>
      </div>
      <div style={{ cursor: 'pointer' }} onClick={() => {}}>
        <Button label="신고하기" color={COLORS.SSU.error} />
      </div>

      <BottomPopUp label="신고가 접수되었습니다. " />
    </div>
  );
};

export default Report;
