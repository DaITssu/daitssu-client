import * as styles from "./TitleForm.styles"
interface TitleFormnProps {
  label?: string;
  width?: number;
  height?: number;
  color?: string;

  hint:string;
  selectedValue?:string;
  handleChange?:(event: React.ChangeEvent<HTMLInputElement>) => void; // onChange 타입 변경
}

const TitleForm = ({selectedValue,handleChange,hint}: TitleFormnProps) => (

    <>
    <styles.TitleForm
      className="title"
      name="title"
      value={selectedValue}
      onChange={handleChange}
      placeholder={hint}
      autoComplete="off"
    />
  </>
);

export default TitleForm;
