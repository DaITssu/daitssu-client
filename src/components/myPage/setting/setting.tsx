import React, { useState, useEffect } from 'react';
import { TEXT_STYLES } from '@/styles/constants/textStyles';
import RightArrow from '@icons/icon/Arrow/RightBigArrow1.svg';
import Image from 'next/image';
import * as styles from './setting.style';
import Link from 'next/link';
import LocalStorage from '@/utils/localStorage';

const Setting = () => {
  const router = useRouter();

  const handleClickLogout = () => {
    LocalStorage.setItem('isLogin', '');
    LocalStorage.removeItem('accessToken');
    LocalStorage.removeItem('refreshToken');
    router.push('/');
  };

const Setting = () => {
  return (
    <styles.SettingStyle>
      <styles.SettingBox>
        <styles.SettingBoxHeader style={TEXT_STYLES.BodyM16}>
          계정 설정
        </styles.SettingBoxHeader>
        <Link href={'/my/blockAccount'}>
          <styles.SettingDiv>
            <styles.SettingDivText style={TEXT_STYLES.HeadM18}>
              차단계정 관리
            </styles.SettingDivText>
            <styles.SettinDivImg>
              <Image src={RightArrow} width={24} height={24} alt="RightArrow" />
            </styles.SettinDivImg>
          </styles.SettingDiv>
        </Link>
        <Link href={'/'}>
          {/* 정보 동의 url 연결 */}
          <styles.SettingDiv>
            <styles.SettingDivText style={TEXT_STYLES.HeadM18}>
              정보 동의 설정
            </styles.SettingDivText>
            <styles.SettinDivImg>
              <Image src={RightArrow} width={24} height={24} alt="RightArrow" />
            </styles.SettinDivImg>
          </styles.SettingDiv>
        </Link>
        <Link href={'/'}>
          {/* 서비스 공지사항 url 연결 */}
          <styles.SettingDiv>
            <styles.SettingDivText style={TEXT_STYLES.HeadM18}>
              서비스 공지사항
            </styles.SettingDivText>
            <styles.SettinDivImg>
              <Image src={RightArrow} width={24} height={24} alt="RightArrow" />
            </styles.SettinDivImg>
          </styles.SettingDiv>
        </Link>
        <Link href={'/'}>
          {/* 이용 안내 url 연결 */}
          <styles.SettingDiv>
            <styles.SettingDivText style={TEXT_STYLES.HeadM18}>
              이용 안내
            </styles.SettingDivText>
            <styles.SettinDivImg>
              <Image src={RightArrow} width={24} height={24} alt="RightArrow" />
            </styles.SettinDivImg>
          </styles.SettingDiv>
        </Link>
      </styles.SettingBox>

      <div style={{ height: '20px' }}></div>
      <styles.SettingBox>
        <styles.SettingBoxHeader>로그아웃 및 탈퇴</styles.SettingBoxHeader>
        <Link href={'/'}>
          {/* 로그아웃 url 연결 */}
          <styles.SettingDiv>
            <styles.SettingDivText color="blue" style={TEXT_STYLES.HeadM18}>
              로그아웃
            </styles.SettingDivText>
            <styles.SettinDivImg>
              <Image src={RightArrow} width={24} height={24} alt="RightArrow" />
            </styles.SettinDivImg>
          </styles.SettingDiv>
        </Link>
        <Link href={'/my/withdrawal'}>
          {/* 탈퇴 하기 url 연결 */}
          <styles.SettingDiv>
            <styles.SettingDivText color="red" style={TEXT_STYLES.HeadM18}>
              탈퇴하기
            </styles.SettingDivText>
            <styles.SettinDivImg>
              <Image src={RightArrow} width={24} height={24} alt="RightArrow" />
            </styles.SettinDivImg>
          </styles.SettingDiv>
        </Link>
      </styles.SettingBox>
    </styles.SettingStyle>
  );
};

export default Setting;
