import { SubmitBox,SubmitBoxButton,SubmitBoxTitle } from "./Header.styles";

interface SubmitHeadernProps {
  label?: string;
  width?: number;
  height?: number;
  color?: string;

  onClose?:()=>void;
}

const SubmitHeader = ({onClose,width,label}: SubmitHeadernProps) => (
  <>
    <SubmitBox width={width}>
        <SubmitBoxButton width={28} onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 2l-10 10 10 10 2-2-8-8 8-8z"/>
          </svg>
        </SubmitBoxButton>
        <SubmitBoxTitle width={100}>{label}</SubmitBoxTitle>
        <SubmitBoxTitle width={28}></SubmitBoxTitle>
    </SubmitBox>
  </>
);

export default SubmitHeader;
