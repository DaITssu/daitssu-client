import React, { useState, useEffect } from 'react';
import * as styles from './EditProfile.styles';
import Image from 'next/image';
import EditIcon from '@icons/icon/Icon24/Correction.svg';
import ProfileIcon from '@icons/icon/Icon24/profile.svg';
import { useRouter } from 'next/router';
import useModal from '@/components/common/Modal/useModal';
import Modal from '@/components/common/Modal';
import { checkNicknameAPI, editNicknameAPI, getUserAPI } from '@/apis/userAPIS';
import UtilityHeader from '@/components/common/Header/UtilityHeader';

interface profileInterface {
  studentId: string;
  name: string;
  nickname: string;
  departmentName: string;
  term: number;
  imageUrl: string;
}
// term은 1~8, 학년은 1~4
const getTerm = (term: number): string => {
  var text = '';
  text += Math.floor((term + 1) / 2) + '학년 ';
  if (term % 2 === 1) text += '1학기';
  else text += '2학기';
  return text;
};

const EditProfile = () => {
  const router = useRouter();
  const { open, PopUp, close } = useModal();

  const [nickname, setNickname] = useState<string>('');

  const [profile, setProfile] = useState<profileInterface>({
    studentId: '',
    name: '',
    nickname: '',
    departmentName: '',
    term: 1,
    imageUrl: '',
  });

  useEffect(() => {
    getUserAPI().then((res) => {
      setProfile(res.data);
      setNickname(res.data.nickname);
    });
  }, []);

  return (
    <div>
      <UtilityHeader child="프로필 수정" />
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
      <div style={{ padding: 20 }}>
        <styles.BigTitle>학적정보</styles.BigTitle>
        <styles.InformationText>
          <styles.InformationTitle>이름</styles.InformationTitle>
          <styles.InformationContent>{profile.name}</styles.InformationContent>
        </styles.InformationText>
        <styles.InformationText>
          <styles.InformationTitle>학번</styles.InformationTitle>
          <styles.InformationContent>
            {profile.studentId}
          </styles.InformationContent>
        </styles.InformationText>

        <styles.InformationText>
          <styles.InformationTitle>학년/학기</styles.InformationTitle>
          <styles.InformationContent>
            {getTerm(profile.term)}
          </styles.InformationContent>
        </styles.InformationText>

        <styles.InformationText>
          <styles.InformationTitle>소속</styles.InformationTitle>
          <styles.InformationContent>
            {profile.departmentName}
          </styles.InformationContent>
        </styles.InformationText>
      </div>
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
    try {
      checkNicknameAPI(inputValue).then((res) => {
        editNicknameAPI(inputValue).then((res) => {
          props.close();
          props.setNickname(inputValue);
          setIsFailed(false);
        });
      });
    } catch (e) {
      setIsFailed(true);
      return;
    }
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
