import * as styles from './Agree.style';
import Image from 'next/image';
import RightArrow from '@icons/icon/Arrow/RightBigArrow.svg';
import Link from 'next/link';
interface ATProps {
  type: 'compulsory' | 'select' | 'none';
  text: string;
  arrow: boolean;
}

const AgreeText = ({ type, text, arrow }: ATProps) => {
  return (
    <>
      <styles.ContainBox>
        <styles.TypeBox type={type}>
          {type === 'compulsory' ? '(필수)' : type === 'select' ? '(선택)' : ''}
        </styles.TypeBox>
        <styles.TextBox>{text}</styles.TextBox>
      </styles.ContainBox>
      {arrow ? (
        <Link
          href={{
            pathname: '/my/agree/info',
            query: { param: text },
          }}
        >
          <styles.ArrowBox>
            <Image
              src={RightArrow}
              alt="right arrow"
              width={18}
              height={18}
              priority
            />
          </styles.ArrowBox>
        </Link>
      ) : (
        ''
      )}
    </>
  );
};

export default AgreeText;
