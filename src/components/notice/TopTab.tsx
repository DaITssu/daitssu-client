import { useEffect, useState } from 'react';
import NoticeList from './NoticeList';
import * as styles from './TopTab.styles';
import SearchBar from './anouncement/SearchBar';
import ButtonGroup from './anouncement/SelectButton';
import FunSystemList from './FunSystemList';

const TopTab = () => {
  
  const [index, setIndex] = useState(0);
  const [category, setCategory] = useState("ALL");
  const [search, setSearch] = useState("");

  const handleSearch = (searchText : string) =>{
    setSearch(searchText);
  }
  
  const handleCategoryButton = (category :string) =>{
    setCategory(category);
  }

  const selectMenuHandler = (n: number) => {
    setIndex(n);
    setCategory("ALL");
    setSearch("");
  };

  return (
    <styles.TabContentBox>
      <styles.Rectangle242>
        {["공지사항", "펀시스템"].map((title, idx) => (
          <styles.TabFontBox
            key={idx}
            isSelected={idx === index}
            onClick={() => selectMenuHandler(idx)}
          >
            {title}
          </styles.TabFontBox>
        ))}
      </styles.Rectangle242>
      <SearchBar onSearch={handleSearch}/>
      <ButtonGroup index = {index} category={handleCategoryButton}/>

      {index === 0 ? (
        <NoticeList key={`${search}-${category}`} search = {search} category= {category}/>
      ) : (
        <FunSystemList key={`${search}-${category}`} search = {search} category= {category} />
      )}
      

    </styles.TabContentBox>
  );
};

export default TopTab;
