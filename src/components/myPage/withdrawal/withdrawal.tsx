import React, { useState, useEffect } from 'react';
import { TEXT_STYLES } from '@/styles/constants/textStyles';
import Image from 'next/image';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import * as styles from './withdrawal.style';
import CheckedRadio from '/public/assets/icon/Radio/CheckedRadio.svg';
import DefaultRadio from '/public/assets/icon/Radio/DefaultRadio.svg';

import { withdrawlAPI } from '@/apis/userAPIS';

const Withdrawal = () => {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const handleIconToggle = (icon: string) => {
    setSelectedIcon(icon);
  };
  const ReportText = [
    '이용하기 불편해서',
    '기록 삭제 목적',
    '콘텐츠 부족',
    '사용 빈도가 낮아서',
    '계정 이용 불안',
    '사용법이 어려움',
    '기타',
  ];

  const router = useRouter();

  const handleClickWithdrawlBtn = () => {
    const response = withdrawlAPI();
    response
      .then((res) => {
        if (res === 200) {
          router.push('/');
          alert('회원탈퇴가 완료되었습니다.');
        } else {
          router.push('/');
          alert('회원탈퇴에 실패했습니다.');
        }
      })
      .catch(() => {
        router.push('/');
        alert('회원탈퇴에 실패했습니다.');
      });
  };

  return (
    <styles.withdrawalStyle>
      <styles.withdrawalHeader style={TEXT_STYLES.HeadSM20}>
        정말 해당 계정을 떠나시는건가요?
      </styles.withdrawalHeader>
      <div style={{ height: '20px' }}></div>
      <styles.withdrawalHeaderText style={TEXT_STYLES.CapM14}>
        서비스 개선 품질을 위해 계정을 삭제하려는 이유를 말씀해 주세요.
        중요자료로 사용하겠습니다.
      </styles.withdrawalHeaderText>
      <div style={{ height: '20px' }}></div>
      <div>
        {ReportText.map((res, index) => (
          <WithdrawalItem
            text={res}
            isSelected={selectedIcon === res}
            onClick={() => handleIconToggle(res)}
            key={res}
          />
        ))}
      </div>
      <styles.WithdrawalEmptySpace />
      <div style={{ height: '20px' }}></div>
      <styles.WithdrawalWarningText style={TEXT_STYLES.CapR12}>
        회원 탈퇴시 회원님의 모든 계정 및 활동기록 사용내역이 삭제됩니다. 삭제인
        정보에 대해서는 복구할 수 없으니 신중하게 결정해주세요.
      </styles.WithdrawalWarningText>
      <div style={{ height: '20px' }}></div>
      <div style={TEXT_STYLES.CapM14}>탈퇴 확인 입력</div>
      <div style={{ height: '20px' }}></div>
      <styles.WithdrawalInput placeholder="해당 내용을 확인하고 탈퇴하겠습니다." />
      <div style={{ height: '20px' }}></div>
      <styles.WithdrawalButton
        disabled={selectedIcon ? false : true}
        onClick={handleClickWithdrawlBtn}
        style={TEXT_STYLES.HeadM18}
        active={selectedIcon ? true : false}
      >
        탈퇴하기
      </styles.WithdrawalButton>
    </styles.withdrawalStyle>
  );
};

export default Withdrawal;

export interface ReportItemProps {
  text: string;
  isSelected: boolean;
  onClick: any;
}

export const WithdrawalItem: NextPage<ReportItemProps> = ({
  text,
  isSelected,
  onClick,
}) => {
  return (
    <styles.WithdrawalItemStyle onClick={onClick}>
      {isSelected ? (
        <Image width={20} height={20} src={CheckedRadio} alt="CheckedRadio" />
      ) : (
        <Image width={20} height={20} src={DefaultRadio} alt="DefaultRadio" />
      )}
      <span style={TEXT_STYLES.BodyM16}>{text}</span>
    </styles.WithdrawalItemStyle>
  );
};
