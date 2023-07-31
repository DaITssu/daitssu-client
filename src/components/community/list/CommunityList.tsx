
import styled from '@emotion/styled';
import * as styles from '../../../styles/community/list/CommunityList.style';
import React, {FC, ChangeEvent, useState, useEffect} from 'react';
import CommunityItem, {CommunityItemProps} from './CommunityListItem';
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';


const CommunityList:FC = ()=>{

const [mounted, setMounted] = useState<boolean>(false); //기본 브라우저의 클라이언트 사이드 렌더링 제거 

  useEffect(() => {
    setMounted(true);
  },[]);

  const [index,setIndex] = useState(0);

  const selectTagHandler = (n : number) =>{
    setIndex(n);
    //태그 필터링 목록으로 변환 이벤트 추가 
  }

  const plus_button_onClick = () =>{
    // 커뮤니티 게시글 추가 컴포넌트 연결 
  }
  
  const tag = ["전체", "인기글", "잡담", "질문", "정보"];

  const [items,setItems] = useState<CommunityItemProps[]>(
    [{bundle:"잡담",title : "장학금 언제 줘요?",contents : "장학금 언제 줘요?\n장학금 언제 줘요?\n장학금 언제 줘요?\n장학금 언제 줘요?\n장학금 언제 줘요?\n장학금 언제 줘요?\n장학금 언제 줘요?\n장학금 언제 줘요?\n장학금 언제 줘요~~~~~~~~~~~~~~~~?\n",
      minutes : 3, review : 5},
    {bundle:"asdfasdf",title : "장학금 언제 줘요~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~?",contents : "장학금 언제 줘요?\n장학금 언제 줘요?\n장학금 언제 줘요?\n",minutes : 3, review : 999},
    {bundle:"aaaaaa",title : "장학금 언제 줘요?",contents : "장학금 언제 줘요?\n장학금 언제 줘요?\n장학금 언제 줘요?\n",minutes : 3, review : 5},
    {bundle:"잡담",title : "장학금 언제 줘요?",contents : "장학금 언제 줘요?\n장학금 언제 줘요?\n장학금 언제 줘요?\n",minutes : 3, review : 5},
    {bundle:"잡담",title : "장학금 언제 줘요?",contents : "장학금 언제 줘요?\n장학금 언제 줘요?\n장학금 언제 줘요?\n",minutes : 3, review : 5},
    {bundle:"잡담",title : "장학금 언제 줘요?",contents : "장학금 언제 줘요?\n장학금 언제 줘요?\n장학금 언제 줘요?\n",minutes : 3, review : 5},
    {bundle:"잡담",title : "장학금 언제 줘요?",contents : "장학금 언제 줘요?\n장학금 언제 줘요?\n장학금 언제 줘요?\n",minutes : 3, review : 5},
    {bundle:"잡담",title : "장학금 언제 줘요?",contents : "장학금 언제 줘요?\n장학금 언제 줘요?\n장학금 언제 줘요?\n",minutes : 3, review : 5},],

    
  );
  
  
  return(
    mounted&&
    <>
      <styles.TagList>
        {tag.map((name, idx) =>(
          <styles.TagButton
          css={[
            index === idx
            ? css`background-color: #5EBEEB;color: #FFFFFF;` // 선택됨
            : css`background-color: #FFFFFF;color: #5EBEEB;`,// 선택안됨
          ]}
          onClick={()=> selectTagHandler(idx)}>{name}</styles.TagButton>
        ))}
      </styles.TagList>
      <styles.CommunityListBox>
        
        {items.map((item:CommunityItemProps,key:number)=> {
          return <CommunityItem
          key = {key}
          item = {item}/>;
        })}
      </styles.CommunityListBox>
      <styles.PlusButton src="/assets/icon/Button/plus_button.svg" onClick = {plus_button_onClick}/>
    </>
    
  );
};


export default CommunityList;