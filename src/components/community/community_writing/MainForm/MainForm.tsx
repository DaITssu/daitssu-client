
import { SubSelectBox } from "./SubSelectBox/SubSelectBox";

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
    <div style={{height:"45px",width:"390px",backgroundColor:"gray"}}>해더
      </div> 

    <SubSelectBox options={["잡담","질문", "정보"]} ></SubSelectBox>
  </>
);

export default SubmitHeader;
