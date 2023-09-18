import * as styles from './UtilityHeader.style';
import LeftArrow from '@icons/icon/Arrow/LeftBigArrow.svg';
import Menu from '@icons/icon/Icon24/Menu.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';

export interface UtilityHeaderProps {
  child: string;
  isCommunity?: boolean;
  isDeleteBtn?: boolean;
  isPossibleDelete?: boolean;
  isConfirmBtn?: boolean;
}

const UtilityHeader = ({
  child,
  isCommunity = false,
  isDeleteBtn = false,
  isPossibleDelete = false,
  isConfirmBtn = false,
}: UtilityHeaderProps) => {
  const router = useRouter();
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
            <Image src={Menu} width={25} height={25} alt="menuBar" />
          )}
          {isDeleteBtn && (
            <styles.DeleteText isPossibleDelete={isPossibleDelete}>
              삭제
            </styles.DeleteText>
          )}
          {isConfirmBtn && <styles.ConfirmText>완료</styles.ConfirmText>}
        </styles.LogoRightImg>
      </styles.Conatiner>
    </>
  );
};
export default UtilityHeader;
