import { useEffect, useState } from 'react';
import NoticeList from './NoticeList';
import * as styles from './TopTab.styles';
import SearchBar from './anouncement/SearchBar';
import ButtonGroup from './anouncement/SelectButton';
import { getFunSystemAPIwithCategory, getNoticeAPIwithCategory } from '@/apis/noticeAPIS';
import { NoticeItemProps } from './NoticeItem';

const TopTab = () => {
  
  const [noticeData, setNoticeData] = useState<NoticeItemProps[]>([]);
  const [funSystemData, setFunSystemData] = useState<NoticeItemProps[]>([]);
  const [index, setIndex] = useState(0);
  const [category, setCategory] = useState("ALL");
  
  const [fetching, setFetching] = useState(false); //데이터 받아오는 중인지 표시
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");

  const fetchNoticeData = async () => {

    try{
      if(page ===0){
        setNoticeData([]);
      }
      const noticeData = await getNoticeAPIwithCategory(search,category,page);
      if(noticeData){
        setNoticeData((prev)=>[...prev,...noticeData.data.content]);
      }else{
        console.error('공지사항 데이터를 불러오는 중 오류 발생:', noticeData.message);
      } 
      
    }catch(error){
      console.error('공지사항 데이터를 불러오는 중 오류 발생:', error);
    }
  };

  const fetchFunSystemData = async () => {

    try{
      if(page ===0){
        setFunSystemData([]);
      }
      const funSystemData = await getFunSystemAPIwithCategory(search,category,page);
      if(funSystemData){
        setFunSystemData((prev)=>[...prev,...funSystemData.data.content]);
      }else{
        console.error('펀시스템 데이터를 불러오는 중 오류 발생:', funSystemData.message);
      }
    
    }catch(error){
      console.error('펀시스템 데이터를 불러오는 중 오류 발생:', error);
    }
  };

  useEffect(()=>{
    window.addEventListener("scroll",handleScroll);

    fetchNoticeData();
    fetchFunSystemData();

    return() =>{
      window.removeEventListener("scroll",handleScroll);
    }
  }, [category, index, search]);

  const handleSearch = (searchText : string) =>{
    setPage(0);
    setSearch(searchText);
  }
  const handleCategoryButton = (category :string) =>{
    setPage(0);
    setCategory(category);
  }

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight - 200 && !fetching) {
      index ? fetchFunSystemData():fetchNoticeData(); //TODO : 검색까지 반영되게 
    }
   };

  const selectMenuHandler = (n: number) => {
    setIndex(n);
    setPage(0);
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
        <NoticeList items={noticeData}/>
      ) : (
        <NoticeList items={funSystemData} />
      )}
      
    </styles.TabContentBox>
  );
};

export default TopTab;
