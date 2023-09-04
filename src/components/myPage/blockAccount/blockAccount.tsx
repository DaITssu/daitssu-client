import React, { useState, useEffect } from 'react';
import { TEXT_STYLES } from '@/styles/constants/textStyles';
import ProfileImg from '../../../../public/noticeInfo/profile.svg';
import Image from 'next/image';
import * as styles from './BolckAccount.style';

const BlockAccount = () => {
  const exBlockAccountData = [
    '닉네임',
    '닉네임',
    '닉네임',
    '닉네임',
    '닉네임',
    '닉네임',
  ];
  return (
    <styles.BlockAccountStyle>
      <div style={{ height: '20px' }}></div>

      {exBlockAccountData.map((res, index) => {
        return (
          <BlockEachAccount
            key={`blockAccount-${index}`}
            name={res}
            profile_photo={ProfileImg}
          />
        );
      })}
    </styles.BlockAccountStyle>
  );
};

export default BlockAccount;

interface BlockEachAccountProps {
  name: string;
  profile_photo: string;
}

const BlockEachAccount = ({ name, profile_photo }: BlockEachAccountProps) => {
  return (
    <styles.BlockAccountDiv>
      <styles.BlockAccountDivImg>
        <Image src={profile_photo} width={50} height={50} alt="profile_photo" />
      </styles.BlockAccountDivImg>
      <styles.BlockAccountDivName>{name}</styles.BlockAccountDivName>
      <styles.BlockaccountDivBtn
        onClick={() => {
          //TODO : 차단 계정 해제 api 연결
        }}
      >
        해제
      </styles.BlockaccountDivBtn>
    </styles.BlockAccountDiv>
  );
};
