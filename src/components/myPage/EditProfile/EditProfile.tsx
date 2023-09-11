import React, { useState, useEffect } from 'react';
import * as styles from './EditProfile.styles';
import Image from 'next/image';
import goingBackIcon from '@icons/icon/Arrow/LeftBigArrow.svg';
import { useRouter } from 'next/router';

interface EditProfileProps {
  name: string;
  studentId: string;
  semester: string;
  department: string;
}

const EditProfile = (props: EditProfileProps) => {
  const router = useRouter();
  return (
    <div>
      <styles.EditProfileAppbar>
        <Image
          src={goingBackIcon}
          width={20}
          height={20}
          alt="back"
          onClick={() => router.back()}
        />
        <p>프로필 수정</p>
        <div></div>
      </styles.EditProfileAppbar>
      <styles.ProfileImageContainer>
        <Image
          src="/images/profile/profile.png"
          width={100}
          height={100}
          alt="profile"
        />
      </styles.ProfileImageContainer>
      <styles.EditProfileButtonContainer>
        <styles.EditProfileButton onClick={() => {}}>
          프로필 사진 변경
        </styles.EditProfileButton>
      </styles.EditProfileButtonContainer>

      <h1>학적 정보</h1>
      <styles.InformationText>
        <styles.InformationTitle>이름</styles.InformationTitle>
        <styles.InformationContent>{props.name}</styles.InformationContent>
      </styles.InformationText>

      <styles.InformationText>
        <styles.InformationTitle>학번</styles.InformationTitle>
        <styles.InformationContent>{props.studentId}</styles.InformationContent>
      </styles.InformationText>

      <styles.InformationText>
        <styles.InformationTitle>학년/학기</styles.InformationTitle>
        <styles.InformationContent>{props.semester}</styles.InformationContent>
      </styles.InformationText>

      <styles.InformationText>
        <styles.InformationTitle>소속</styles.InformationTitle>
        <styles.InformationContent>
          {props.department}
        </styles.InformationContent>
      </styles.InformationText>
    </div>
  );
};

export default EditProfile;
