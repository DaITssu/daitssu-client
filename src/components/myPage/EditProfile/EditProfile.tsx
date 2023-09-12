import React, { useState, useEffect } from 'react';
import * as styles from './EditProfile.styles';
import Image from 'next/image';
import goingBackIcon from '@icons/icon/Arrow/LeftBigArrow.svg';
import EditIcon from '@icons/icon/Icon24/Correction.svg';
import ProfileIcon from '@icons/icon/Nav/my_on.svg';
import { useRouter } from 'next/router';

interface EditProfileProps {
  name: string;
  nickname: string;
  studentId: string;
  semester: string;
  department: string;
}

const EditProfile = (props: EditProfileProps) => {
  const router = useRouter();

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [nickname, setNickname] = useState<string>(props.nickname);

  function onSubmit() {
    //TODO : 닉네임 변경 API 호출
    console.log(nickname);
  }

  function setOnFocus() {
    setIsFocused(true);
  }

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
      <styles.EditProfileContainer>
        <styles.ProfileImageContainer>
          <Image src={ProfileIcon} width={100} height={100} alt="profile" />
        </styles.ProfileImageContainer>
        <styles.EditProfileButtonContainer>
          <styles.EditProfileTextfield
            placeholder={nickname}
            onChange={(e) => setNickname(e.target.value)}
            onSubmit={onSubmit}
          ></styles.EditProfileTextfield>
          <Image
            src={EditIcon}
            width={24}
            height={24}
            alt="edit"
            onClick={onSubmit}
          />
        </styles.EditProfileButtonContainer>
      </styles.EditProfileContainer>
      <styles.BigTitle>학적정보</styles.BigTitle>
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
