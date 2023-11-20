
import * as styles from './CommunityList.style';
import React, {FC, useState, useEffect} from 'react';
import CommunityItem, {CommunityItemProps} from './CommunityListItem';
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import Link from 'next/link';
import { getCommunityItemAPI } from '@/apis/communityAPIS';


const CommunityList:FC = ()=>{

  
  const [page, setPage] = useState(0);
  const [category, setCategory] = useState("ALL");
  const [items,setItems] = useState<CommunityItemProps[]>([]);
  const [fetching, setFetching] = useState(false);
  const [index,setIndex] = useState(0);

  const fetchData = async() =>{
    try{
      setFetching(true);
      const data = await getCommunityItemAPI("",category,page);
      if (data) {
        if (page === 0) {
          setItems(data.data.articles);
        } else {
          setItems((prev) => [...prev, ...data.data.articles]);
        }
        setPage(page + 1);
      } else {
        console.error('커뮤니티 데이터를 불러오는 중 오류 발생:', data.message);
      }
    }catch(error){
      console.error('커뮤니티 데이터를 불러오는 중 오류 발생:', error);
    }finally{
      setFetching(false);
    }
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight&& !fetching) {
      fetchData();
    }
  };

  useEffect(() => {
    fetchData();
    console.log(items);
    window.addEventListener("scroll",handleScroll);
    return()=>{
      window.removeEventListener("scroll", handleScroll);
    };
  },[category,index]);

  const selectTagHandler = (n : number) =>{
    setCategory(tag[n].eng);
    setIndex(n);
    setPage(0);
    
  }

  const plus_button_onClick = () =>{
    // 커뮤니티 게시글 추가 컴포넌트 연결 
  }
  
  const tag = [
    { kor: "전체", eng: "ALL" },
    { kor: "인기글", eng: "POPULAR" },
    { kor: "잡담", eng: "CHAT" },
    { kor: "질문", eng: "QUESTION" },
    { kor: "정보", eng: "INFORMATION" },
  ];
  

  return(
    <>
      <styles.TagList>
        {tag.map(({kor,eng}, idx) =>(
          <styles.TagButton
            key = {idx}
            css={[
              index === idx
              ? css`background-color: #5EBEEB;color: #FFFFFF;` // 선택됨
              : css`background-color: #FFFFFF;color: #5EBEEB;`,// 선택안됨
            ]}
          onClick={()=> selectTagHandler(idx)}>{kor}</styles.TagButton>
        ))}
      </styles.TagList>
      <styles.CommunityListBox>
        
        {items.map((item:CommunityItemProps,key:number)=> {
          return <CommunityItem
          key = {key}
          item = {item}/>;
        })}
      </styles.CommunityListBox>
      <Link href={'/community/writing'}>
        <styles.PlusButton src="/assets/icon/Button/plus_button.svg" onClick = {plus_button_onClick}/>
      </Link>
      
    </> 
  );
};


export default CommunityList;