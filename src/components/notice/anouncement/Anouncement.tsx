import * as styles from './Anouncement.style';
import SearchBar from './SearchBar';
import ButtonGroup from './SelectButton';

const Anouncement = () => {
  return (
    <styles.AbsoluteBox>
      <styles.SearchBox>
        <SearchBar
          onSearch={function (searchText: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      </styles.SearchBox>
      <styles.TagBox>
        <ButtonGroup
          index={0}
          category={function (selectedButton: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      </styles.TagBox>
    </styles.AbsoluteBox>
  );
};

export default Anouncement;
