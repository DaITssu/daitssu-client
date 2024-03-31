import * as styles from "@/components/community/community_writing/InputForm/TitleForm/TitleForm.styles"
interface TitleFormnProps {
  label?: string;
  width?: number;
  height?: number;
  color?: string;

  hint:string;
  selectedValue?:string;
  handleChange?:(event: React.ChangeEvent<HTMLInputElement>) => void; 
}

const TitleForm = ({selectedValue,handleChange,hint,height}: TitleFormnProps) => (

    <>
    <styles.TitleForm
      className="title"
      name="title"
      value={selectedValue}
      onChange={handleChange}
      placeholder={hint}
      autoComplete="off"
      height={height}
    />
  </>
);

export default TitleForm;
