import React, { useState, useEffect } from 'react';
import * as styles from './home.styles';
import Image from 'next/image';
import rightArrow from '@icons/icon/Arrow/RightBigArrow.svg';
import Post from '@icons/icon/SubscribeList/Post.svg';
import Scrap from '@icons/icon/SubscribeList/Scrap.svg';
import Setting from '@icons/icon/SubscribeList/Setting.svg';
import SubscribeList from '@icons/icon/SubscribeList/SubscribeList.svg';
import Link from 'next/link';
import profile from '@icons/icon/profile.svg';
import { useRouter } from 'next/router';
import { getUserAPI } from '@/apis/userAPIS';
import { COLORS } from '@/styles/constants/colors';

interface profileInterface {
  studentId: string;
  name: string;
  nickname: string;
  departmentName: string;
  term: number;
  imageUrl: string;
}

const MyPageComponent = () => {
  const router = useRouter();

  function editOnClick() {
    router.push('/my/edit');
  }

  const [profileData, setProfile] = useState<profileInterface>({
    studentId: '',
    name: '',
    nickname: '',
    departmentName: '',
    term: 1,
    imageUrl: '',
  });

  useEffect(() => {
    getUserAPI().then((res) => {
      console.log(res);
      setProfile(res.data);
    });
  }, []);

  return (
    <div style={{ backgroundColor: COLORS.grayscale.white }}>
      <styles.Content style={{ paddingRight: 20 }}>
        <styles.ContentDetil>
          <Image src={profile} width={80} height={80} alt="profile" />
          <div style={{ paddingLeft: 20 }}>
            <styles.ContentTitle>{profileData.name}</styles.ContentTitle>
            <styles.ContentSubTitle>
              {profileData.studentId}
            </styles.ContentSubTitle>
            <styles.ContentSubTitle>
              {profileData.departmentName}
            </styles.ContentSubTitle>
          </div>
        </styles.ContentDetil>
        <styles.EditButton onClick={editOnClick}>프로필 수정</styles.EditButton>
      </styles.Content>
      {/* 
      //TODO : 나의 과목 부분 6-2 부분 지정되고 추가 예정
       */}
      <styles.ContentList style={{ textDecoration: 'none' }}>
        {/* <Link href="/my/subscribe" style={{ textDecoration: 'none' }}>
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
        </Link> */}
        <Link href="/my/post" style={{ textDecoration: 'none' }}>
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
        <Link href="/my/scrap" style={{ textDecoration: 'none' }}>
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
        <Link href="/my/setting" style={{ textDecoration: 'none' }}>
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

export default MyPageComponent;
