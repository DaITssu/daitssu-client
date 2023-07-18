import Button from '../common/Button';
import * as styles from './Test.style';
import video from '@icons/video_icon/video.svg';
import Image from 'next/image';

interface TestProps {
  label?: string;
}
const icon = video;

const Test = ({ label }: TestProps) => (
  <styles.Container>
    <styles.Label>{label}</styles.Label>
    <Image src={icon} width={24} height={24} alt="test" />
  </styles.Container>
);

export default Test;
