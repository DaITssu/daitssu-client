import { useEffect, useState } from 'react';
import NoticeList from './NoticeList';
import * as styles from './TopTab.styles';
import SearchBar from './anouncement/SearchBar'
import ButtonGroup from './anouncement/SelectButton';
import { getFunSystemAPIwithCategory, getNoticeAPI, getNoticeAPIwithCategory } from '@/apis/noticeAPIS';


const TopTab = () => {
  

  const [noticeData, setNoticeData] = useState([]);
  const [funSystemData, setFunSystemData] = useState([]);
  const [index, setIndex] = useState(0);
  const [category, setCategory] = useState("ALL");

  const fetchNoticeData = async (searchText?: String, nowCategory?:String) => {
    try{
      if(nowCategory){
        const noticeData = await getNoticeAPIwithCategory(searchText, nowCategory);
        if(noticeData){
          setNoticeData(noticeData.data.content);
        }else{
          console.error('공지사항 데이터를 불러오는 중 오류 발생:', noticeData.message);
        }
      }else{ 
        const noticeData = await getNoticeAPIwithCategory(searchText,category);
        if(noticeData){
          setNoticeData(noticeData.data.content);
        }else{
          console.error('공지사항 데이터를 불러오는 중 오류 발생:', noticeData.message);
        }
      }
      
    }catch(error){
      console.error('공지사항 데이터를 불러오는 중 오류 발생:', error);
    }
  };

  const fetchFunSystemData = async (searchText?: String, nowCategory?:String) => {
    try{
      if(nowCategory){
        const funSystemData = await getFunSystemAPIwithCategory(searchText, nowCategory);
        if(funSystemData){
          setFunSystemData(funSystemData.data.content);
        }else{
          console.error('펀시스템 데이터를 불러오는 중 오류 발생:', funSystemData.message);
        }
      }else{ 
        const funSystemData = await getFunSystemAPIwithCategory(searchText,category);
        if(funSystemData){
          setFunSystemData(funSystemData.data.content);
        }else{
          console.error('펀시스템 데이터를 불러오는 중 오류 발생:', funSystemData.message);
        }
      }
      
    }catch(error){
      console.error('펀시스템 데이터를 불러오는 중 오류 발생:', error);
    }
  };

  useEffect(()=>{
    fetchNoticeData();
    fetchFunSystemData();
  }, []);

  const handleSearch = (searchText : String) =>{
    index ? fetchFunSystemData(searchText):fetchNoticeData(searchText);
  }
  const handleCategoryButton = (category :string) =>{
    setCategory(category);
    index ? fetchFunSystemData("",category):fetchNoticeData("",category);
  }


  const selectMenuHandler = (n: number) => {
    setIndex(n);
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
