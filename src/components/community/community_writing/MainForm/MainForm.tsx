import { SubmitBox,SubmitBoxButton,SubmitBoxTitle } from "./MainForm.styles";
import { SubSelectBox } from "./SubSelectBox/SubSelectBox";
import CloseIcon from "./CloseIcon/CloseIcon";

interface SubmitHeadernProps {
  label?: string;
  width?: number;
  height?: number;
  color?: string;

  selectedValue?:string;
  onChange?: () => void;
  onSubmit?: () => void;
  onClose?:()=>void;
}

const SubmitHeader = ({onChange, onSubmit,onClose}: SubmitHeadernProps) => (
  <>
    <SubmitBox >
      <SubmitBoxButton width={28} onClick={onClose}>
        <CloseIcon></CloseIcon>
      </SubmitBoxButton>
      <SubmitBoxTitle>글쓰기</SubmitBoxTitle>
      <SubmitBoxButton width={33} height={27} onClick={onSubmit}>완료</SubmitBoxButton>
    </SubmitBox>

    <SubSelectBox options={["잡담","질문", "정보"]} ></SubSelectBox>
  </>
);

export default SubmitHeader;
