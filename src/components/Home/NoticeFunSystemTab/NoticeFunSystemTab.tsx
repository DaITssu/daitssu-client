import { useEffect, useState } from 'react';
import * as styles from './NoticeFunSystemTab.styles';
import NoticeList from '@/components/notice/NoticeList';
import LineSearchBar from './LineSearchBar/LineSearchBar';
import CommunityList from '@/components/community/list/CommunityList';
import FunSystemList from '@/components/notice/FunSystemList';


const NoticeFunSystemTab = () => {
  
  
  const [index, setIndex] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(()=>{
    window.location.reload;
  }, [index, search]);

  const handleSearch = (searchText : string) =>{
    setSearch(searchText);
  }

  const selectMenuHandler = (n: number) => {
    setIndex(n);
  };

  return (
    <>
      <LineSearchBar onSearch = {handleSearch}/>
      {search && <styles.TabContainer>
        <styles.TabBox>
          {["공지사항", "펀시스템","커뮤니티"].map((element, idx) => (
            <styles.TabFontBox
              key={idx}
              isSelected={idx === index}
              onClick={() => selectMenuHandler(idx)}>
              {element}
            </styles.TabFontBox>
          ))}
        </styles.TabBox>
        {index === 0 ? (
          <NoticeList key={search} search = {search} category = "ALL"/>
        ) : index === 1 ?(
          <FunSystemList key={search} search = {search} category = "ALL"/>
        ) : (
          <CommunityList key={search} isButtonVisible = {false} search = {search}/>
        )}
      </styles.TabContainer>}
      
    </>
  );
};

export default NoticeFunSystemTab;