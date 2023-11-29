import * as styles from './NoticeList.styles';
import NoticeItem, { NoticeItemProps } from './NoticeItem';
import React, { FC, ChangeEvent, useState, useEffect } from 'react';
import { getNoticeAPIwithCategory } from '@/apis/noticeAPIS';


const NoticeList: FC<{ category:string;search: string }> = ({ category, search }) => {

  const [noticeData, setNoticeData] = useState<NoticeItemProps[]>([]);
  const [page, setPage] = useState(0);
  const [fetching, setFetching] = useState(false);
  
  const fetchNoticeData = async () => {
  try{
    setFetching(true);
    const noticeData = await getNoticeAPIwithCategory(search,category,page);
    if(noticeData){
      if(page === 0){
        setNoticeData(noticeData.data.content);
      }else{
        setNoticeData((prev)=>[...prev,...noticeData.data.content]);
      }
    }else{
      console.error('공지사항 데이터를 불러오는 중 오류 발생:', noticeData.message);
    } 
    setFetching(false);
  }catch(error){
    console.error('공지사항 데이터를 불러오는 중 오류 발생:', error);
  }
};

const handleScroll = () => {
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop;
  const clientHeight = document.documentElement.clientHeight;

  if (scrollTop + clientHeight >= scrollHeight&& !fetching) {
    fetchNoticeData();
  }
};
useEffect(() => {
  setPage(0);
  fetchNoticeData();
}, [search, category]);

useEffect(() => {
  fetchNoticeData();
  window.addEventListener("scroll",handleScroll);
  return()=>{
    window.removeEventListener("scroll", handleScroll);
  };
},[]);

  return (
    <styles.NoticeListBoxShort>
      {noticeData.map((item: NoticeItemProps) => {
        return <NoticeItem key={item.id} item={item} />;
      })}
    </styles.NoticeListBoxShort>
  );
};

export default NoticeList;
