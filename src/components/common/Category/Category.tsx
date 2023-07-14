import * as styles from './Category.styles';

interface CategoryProps {
  label?: string;
  BgColor: boolean;
}

const Category = ({ label, BgColor }: CategoryProps) => (
  <styles.Category BgColor={BgColor}>{label}</styles.Category>
);

export default Category;
