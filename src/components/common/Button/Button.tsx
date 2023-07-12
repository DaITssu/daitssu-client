import * as styles from './Button.styles';

interface ButtonProps {
  label?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}

const Button = ({ label, width, height, onClick }: ButtonProps) => (
  <styles.Button width={width} height={height} onClick={onClick}>
    {label}
  </styles.Button>
);

export default Button;
