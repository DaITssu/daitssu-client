import React, { useState, useEffect } from 'react';
import * as styles from './EditProfile.styles';
import Image from 'next/image';
import goingBackIcon from '@icons/icon/Arrow/LeftBigArrow.svg';
import EditIcon from '@icons/icon/Icon24/Correction.svg';
import ProfileIcon from '@icons/icon/Icon24/profile.svg';
import { useRouter } from 'next/router';
import useModal from '@/components/common/Modal/useModal';
import Modal from '@/components/common/Modal';

const EditProfile = () => {
  const router = useRouter();
  const { open, PopUp, close } = useModal();

  const [nickname, setNickname] = useState<string>('자이언트펭귄');
  const [name, setName] = useState<string>('김민수');
  const [studentId, setStudentId] = useState<string>('201911111');
  const [semester, setSemester] = useState<string>('1학년 1학기');
  const [department, setDepartment] = useState<string>('컴퓨터공학과');

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
        <styles.EditProfileButtonContainer onClick={open}>
          <styles.Width24Container></styles.Width24Container>
          {nickname}
          <Image src={EditIcon} width={24} height={24} alt="edit" />
        </styles.EditProfileButtonContainer>
      </styles.EditProfileContainer>
      <PopUp>
        <Modal onClose={close} title={'닉네임 변경하기'}>
          <EditProfileModal
            nickname={nickname}
            close={close}
            setNickname={setNickname}
          />
        </Modal>
      </PopUp>
      <styles.BigTitle>학적정보</styles.BigTitle>
      <styles.InformationText>
        <styles.InformationTitle>이름</styles.InformationTitle>
        <styles.InformationContent>{name}</styles.InformationContent>
      </styles.InformationText>
      <styles.InformationText>
        <styles.InformationTitle>학번</styles.InformationTitle>
        <styles.InformationContent>{studentId}</styles.InformationContent>
      </styles.InformationText>

      <styles.InformationText>
        <styles.InformationTitle>학년/학기</styles.InformationTitle>
        <styles.InformationContent>{semester}</styles.InformationContent>
      </styles.InformationText>

      <styles.InformationText>
        <styles.InformationTitle>소속</styles.InformationTitle>
        <styles.InformationContent>{department}</styles.InformationContent>
      </styles.InformationText>
    </div>
  );
};
interface EditProfileModalProps {
  nickname: string;
  close: () => void;
  setNickname: (nickname: string) => void;
}
const EditProfileModal = (props: EditProfileModalProps) => {
  function onSubmit() {
    //TODO : 서버에 닉네임 전송
    console.log(inputValue);
    // setIsFailed(true);
    props.close();
    props.setNickname(inputValue);
  }

  const [inputValue, setInputValue] = useState<string>(props.nickname);
  const [isFailed, setIsFailed] = useState<boolean>(false);

  return (
    <styles.ModalContainer>
      <styles.ModalTextfieldContainer isFailed={isFailed}>
        <styles.ModalTextfield
          placeholder={props.nickname}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onSubmit={onSubmit}
          maxLength={20}
        ></styles.ModalTextfield>
        <styles.ModalTextLengthCounter>
          {inputValue.length} / 20
        </styles.ModalTextLengthCounter>
      </styles.ModalTextfieldContainer>
      {isFailed && (
        <styles.ModalErrorMessage>
          중복된 닉네임입니다. 다시 입력하세요.
        </styles.ModalErrorMessage>
      )}
      <styles.ModalButton onClick={onSubmit}>완료</styles.ModalButton>
    </styles.ModalContainer>
  );
};

export default EditProfile;
