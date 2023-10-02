import * as styles from './UtilityHeader.style';
import LeftArrow from '@icons/icon/Arrow/LeftBigArrow.svg';
import Report from '@icons/icon/Icon18/report.svg';
import Ben from '@icons/icon/Icon18/Ben.svg';
import Menu from '@icons/icon/Icon24/Menu.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

export interface UtilityHeaderProps {
  child: string;
  isCommunity?: boolean;
  onClickReport?: Function;
  onClickBen?: Function;

  isDeleteBtn?: boolean;
  isPossibleDelete?: boolean;
  onClickDeleteBtn?: Function;
  isConfirmBtn?: boolean;
  onClickConfrimBtn?: Function;
}

const UtilityHeader = ({
  child,
  isCommunity = false,
  onClickReport = () => {},
  onClickBen = () => {},
  isDeleteBtn = false,
  onClickDeleteBtn = () => {},
  isPossibleDelete = false,
  isConfirmBtn = false,
  onClickConfrimBtn = () => {},
}: UtilityHeaderProps) => {
  const router = useRouter();

  const [isCommunityMenuVisible, setIsCommunityMenuVisible] = useState(false);

  return (
    <>
      <styles.Conatiner>
        <styles.LogoLeftImg
          onClick={() => {
            router.back();
          }}
        >
          <Image src={LeftArrow} width={25} height={25} alt="headerLeftArrow" />
        </styles.LogoLeftImg>
        <styles.LogoText>{child}</styles.LogoText>
        <styles.LogoRightImg>
          {isCommunity && (
            <>
              <Image
                src={Menu}
                width={25}
                height={25}
                alt="menuBar"
                onClick={() => {
                  setIsCommunityMenuVisible((res) => !res);
                }}
              />
              {isCommunityMenuVisible && (
                <styles.DropdownMenu>
                  <styles.DropdownItem>
                    <Image
                      src={Report}
                      alt="report-icon"
                      onClick={() => {
                        onClickReport();
                      }}
                    />
                    <styles.DropdownItemText>신고하기</styles.DropdownItemText>
                  </styles.DropdownItem>
                  <styles.DropdownItem>
                    <Image
                      src={Ben}
                      alt="ben-icon"
                      onClick={() => {
                        onClickBen();
                      }}
                    />
                    <styles.DropdownItemText>차단하기</styles.DropdownItemText>
                  </styles.DropdownItem>
                </styles.DropdownMenu>
              )}
            </>
          )}
          {isDeleteBtn && (
            <styles.DeleteText
              onClick={() => {
                onClickDeleteBtn();
              }}
              isPossibleDelete={isPossibleDelete}
            >
              삭제
            </styles.DeleteText>
          )}
          {isConfirmBtn && (
            <styles.ConfirmText
              onClick={() => {
                onClickConfrimBtn();
              }}
            >
              완료
            </styles.ConfirmText>
          )}
        </styles.LogoRightImg>
      </styles.Conatiner>
    </>
  );
};
export default UtilityHeader;
