import { useEffect, useState } from 'react';
import NoticeList from './NoticeList';
import * as styles from './TopTab.styles';
import SearchBar from './anouncement/SearchBar'
import ButtonGroup from './anouncement/SelectButton';
import { getNoticeAPI, getNoticeAPIwithCategory } from '@/apis/noticeAPIS';


const TopTab = () => {
  

  const [data,setData] = useState([
    {
      id: 0,
      title: '공지사항',  
      contents: <NoticeList items = {[]}/>,
    },
    {
      id: 1,
      title: '펀시스템',
      contents: <NoticeList items = {[]}/>,
    },
  ]);
  const [index, setIndex] = useState(0);
  const [category, setCategory] = useState("ALL");

  const fetchData = async (searchText?: String, nowCategory?:String) => {
    try{
      if(nowCategory){
        const noticeData = await getNoticeAPIwithCategory(searchText, nowCategory);
        if(noticeData){
          setData((prevData)=>[
            {...prevData[0], contents: <NoticeList items={noticeData.data.content} />},
            { ...prevData[1], contents: <NoticeList items={[]} /> },
          ]);
          
        }else{
          console.error('공지사항 데이터를 불러오는 중 오류 발생:', noticeData.message);
        }
      }else{ 
        const noticeData = await getNoticeAPIwithCategory(searchText,category);
        if(noticeData){
          setData((prevData)=>[
            {...prevData[0], contents: <NoticeList items={noticeData.data.content} />},
            { ...prevData[1], contents: <NoticeList items={[]} /> },
          ]);
          
        }else{
          console.error('공지사항 데이터를 불러오는 중 오류 발생:', noticeData.message);
        }
      }
      
    }catch(error){
      console.error('공지사항 데이터를 불러오는 중 오류 발생:', error);
    }
  };


  useEffect(()=>{
    fetchData();
  }, []);

  const handleSearch = (searchText : String) =>{
    fetchData(searchText);
  }
  const handleCategoryButton = (category :string) =>{
    setCategory(category);
    fetchData("",category);
  }


  const selectMenuHandler = (n: number) => {
    setIndex(n);
  };

  return (
    <styles.TabContentBox>
      <styles.Rectangle242>
        {data.map((element, idx) => (
          <styles.TabFontBox
            key={element.id}
            isSelected={idx === index}
            onClick={() => selectMenuHandler(idx)}
          >
            {element.title}
          </styles.TabFontBox>
        ))}
      </styles.Rectangle242>
      <SearchBar onSearch={handleSearch}/>
      <ButtonGroup category={handleCategoryButton}/>
      {data[index].contents}
     
    </styles.TabContentBox>
  );
};

export default TopTab;
