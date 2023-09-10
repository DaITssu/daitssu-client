import * as styles from './HeaderName.style';
import LeftArrow from '@icons/icon/Arrow/LeftBigArrow.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface HeaderNameProps {
  child: string;
}

const HeaderName = ({ child }: HeaderNameProps) => {
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
      </styles.Conatiner>
    </>
  );
};
export default HeaderName;
