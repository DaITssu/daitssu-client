import Button from '../Button';
import * as styles from './Test.style';

interface TestProps {
  label?: string;
}

const Test = ({ label }: TestProps) => (
  <styles.Container>
    <styles.Label>{label}</styles.Label>
  </styles.Container>
);

export default Test;
