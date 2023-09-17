import { COLORS } from "@/styles/constants/colors";
interface CloseIconProps {
  label?: string;
  width?: number;
  height?: number;
  color?: string;

}

const CloseIcon = ({width, height}: CloseIconProps) => {
  return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width? `${width}`:"48"}
        height={height? `${height}`:"48"}
        viewBox="0 0 24 24"
        stroke={COLORS.grayscale.Gray1}  // 선의 색상을 지정
        fill="none"  // 채우기 색상을 지정
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
  );
};

export default CloseIcon;
