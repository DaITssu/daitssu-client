import * as styles from './Button.styles';

interface ButtonProps {
  label?: string;
  width?: number;
  height?: number;
  color?: string;
  onClick?: () => void;
}

const Button = ({ label, width, height, color, onClick }: ButtonProps) => (
  <styles.Button width={width} height={height} color={color} onClick={onClick}>
    {label}
  </styles.Button>
);

export default Button;
