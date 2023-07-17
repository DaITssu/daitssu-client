import * as styles from './Test.style';
import Image from 'next/image';
import DownBigArrow from '@icons/icon/Arrow/DownBigArrow.svg';

interface TestProps {
  label?: string;
}

const Test = ({ label }: TestProps) => (
  <styles.Container>
    <Image src={DownBigArrow} width={200} height={100} alt="arrow" />
    <styles.Label>{label}</styles.Label>
  </styles.Container>
);

export default Test;
