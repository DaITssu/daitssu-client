import { useEffect, useState } from 'react';

import * as styles from './TOS.style';
import CloseBtn from '@icons/icon/Icon18/Close.svg';
import Button from '@/components/common/Button';
import Image from 'next/image';

interface TOSProps {
  onAgree: Function;
  closeModal: Function;
  title: string;
}
const TOS = ({ onAgree, closeModal, title }: TOSProps) => {
  const getTOSContent = (title: string) => {
    if (title === '다있슈 이용약관') {
      return `다있슈 이용약관 내용`;
    } else if (title === '개인정보 수집 및 이용약관') {
      return '개인정보 수집 및 이용약관 내용';
    } else if (title === '제3자 정보 제공 동의') {
      return '제3자 정보 제공 동의 내용';
    }
    return '';
  };

  return (
    <>
      <styles.ModalBackground onClick={() => closeModal()}>
        <styles.ModalContent
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <styles.TOSStyle>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <styles.TOSHedaer>{title}</styles.TOSHedaer>
              <Image
                style={{ margin: '15px' }}
                src={CloseBtn}
                alt="close-button"
                onClick={() => {
                  closeModal();
                }}
              />
            </div>
            <styles.Divider />
            <styles.TOSBody>{getTOSContent(title)}</styles.TOSBody>
            <styles.AgreeBtnDiv>
              <Button
                label="동의하기"
                onClick={() => {
                  onAgree();
                  closeModal();
                }}
              />
            </styles.AgreeBtnDiv>
          </styles.TOSStyle>
        </styles.ModalContent>
      </styles.ModalBackground>
    </>
  );
};
export default TOS;
