import * as styles from './Anouncement.style';
import SearchBar from './SearchBar';
import ButtonGroup from './SelectButton';

const Anouncement = () => {
  return (
    <styles.AbsoluteBox>
      <styles.SearchBox>
        <SearchBar></SearchBar>
      </styles.SearchBox>
      <styles.TagBox>
        <ButtonGroup />
      </styles.TagBox>
    </styles.AbsoluteBox>
  );
};

export default Anouncement;
