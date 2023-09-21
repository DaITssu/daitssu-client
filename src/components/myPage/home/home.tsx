import React, { useState, useEffect } from 'react';
import * as styles from './home.styles';
import Image from 'next/image';
import rightArrow from '@icons/icon/Arrow/RightBigArrow.svg';
import Post from '@icons/icon/SubscribeList/Post.svg';
import Scrap from '@icons/icon/SubscribeList/Scrap.svg';
import Setting from '@icons/icon/SubscribeList/Setting.svg';
import SubscribeList from '@icons/icon/SubscribeList/SubscribeList.svg';
import Link from 'next/link';

interface EditProfileProps {
  name: string;
  studentId: string;
  department: string;
}

const home = (props: EditProfileProps) => {
  function editOnClick() {
    //TODO : edit profile
    console.log('edit');
  }

  return (
    <div>
      <styles.Content>
        <styles.ContentDetil>
          <Image
            src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png"
            width={100}
            height={100}
            alt="profile"
          />
          <div>
            <styles.ContentTitle>{props.name}</styles.ContentTitle>
            <styles.ContentSubTitle>{props.studentId}</styles.ContentSubTitle>
            <styles.ContentSubTitle>{props.department}</styles.ContentSubTitle>
          </div>
        </styles.ContentDetil>
        <styles.EditButton onClick={editOnClick}>프로필 수정</styles.EditButton>
      </styles.Content>
      {/* 
      //TODO : 나의 과목 부분 6-2 부분 지정되고 추가 예정
       */}
      <styles.ContentList style={{ textDecoration: 'none' }}>
        <Link href="/mypage/subscribe" style={{ textDecoration: 'none' }}>
          <styles.Content>
            <styles.ContentDetil>
              <Image
                src={SubscribeList}
                width={24}
                height={24}
                alt="list"
                style={{ paddingRight: '10px' }}
              />
              <styles.ContentText>구독 목록</styles.ContentText>
            </styles.ContentDetil>
            <Image src={rightArrow} width={20} height={20} alt="go" />
          </styles.Content>
        </Link>
        <Link href="/mypage/mycontents" style={{ textDecoration: 'none' }}>
          <styles.Content>
            <styles.ContentDetil>
              <Image
                src={Post}
                width={24}
                height={24}
                alt="scrap"
                style={{ paddingRight: '10px' }}
              />
              <styles.ContentText>내 글 목록</styles.ContentText>
            </styles.ContentDetil>
            <Image src={rightArrow} width={20} height={20} alt="go" />
          </styles.Content>
        </Link>
        <Link href="/mypage/scrap" style={{ textDecoration: 'none' }}>
          <styles.Content>
            <styles.ContentDetil>
              <Image
                src={Scrap}
                width={24}
                height={24}
                alt="scrap"
                style={{ paddingRight: '10px' }}
              />
              <styles.ContentText>스크랩</styles.ContentText>
            </styles.ContentDetil>
            <Image src={rightArrow} width={20} height={20} alt="go" />
          </styles.Content>
        </Link>
        <Link href="/mypage/setting" style={{ textDecoration: 'none' }}>
          <styles.Content>
            <styles.ContentDetil>
              <Image
                src={Setting}
                width={24}
                height={24}
                alt="setting"
                style={{ paddingRight: '10px' }}
              />
              <styles.ContentText>설정</styles.ContentText>
            </styles.ContentDetil>
            <Image src={rightArrow} width={20} height={20} alt="go" />
          </styles.Content>
        </Link>
      </styles.ContentList>
    </div>
  );
};

export default home;
