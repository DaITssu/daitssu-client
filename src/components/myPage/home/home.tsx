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
            <p>{props.name}</p>
            <p>{props.studentId}</p>
            <p>{props.department}</p>
          </div>
        </styles.ContentDetil>
        <p>프로필 수정</p>
      </styles.Content>
      <h1>나의 과목</h1>
      <styles.ContentList>
        <Link href="/mypage/subscribe">
          <styles.Content>
            <styles.ContentDetil>
              <Image src={SubscribeList} width={24} height={24} alt="list" />
              <p>구독 목록</p>
            </styles.ContentDetil>
            <Image src={rightArrow} width={20} height={20} alt="go" />
          </styles.Content>
        </Link>
        <Link href="/mypage/mycontents">
          <styles.Content>
            <styles.ContentDetil>
              <Image src={Post} width={24} height={24} alt="scrap" />
              <p>내 글 목록</p>
            </styles.ContentDetil>
            <Image src={rightArrow} width={20} height={20} alt="go" />
          </styles.Content>
        </Link>
        <Link href="/mypage/scrap">
          <styles.Content>
            <styles.ContentDetil>
              <Image src={Scrap} width={24} height={24} alt="scrap" />
              <p>스크랩</p>
            </styles.ContentDetil>
            <Image src={rightArrow} width={20} height={20} alt="go" />
          </styles.Content>
        </Link>
        <Link href="/mypage/setting">
          <styles.Content>
            <styles.ContentDetil>
              <Image src={Setting} width={24} height={24} alt="setting" />
              <p>설정</p>
            </styles.ContentDetil>
            <Image src={rightArrow} width={20} height={20} alt="go" />
          </styles.Content>
        </Link>
      </styles.ContentList>
    </div>
  );
};

export default home;
