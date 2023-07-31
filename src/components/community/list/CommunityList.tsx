
import styled from '@emotion/styled';
import * as styles from '../../../styles/community/list/CommunityList.style';
import React, {FC, ChangeEvent, useState, useEffect} from 'react';
import CommunityItem, {CommunityItemProps} from './CommunityListItem';

const CommunityList:FC = ()=>{

const [mounted, setMounted] = useState<boolean>(false); //기본 브라우저의 클라이언트 사이드 렌더링 제거 

  useEffect(() => {
    setMounted(true);
  },[]);

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
      <styles.CommunityListBox>
        
        {items.map((item:CommunityItemProps,key:number)=> {
          return <CommunityItem
          key = {key}
          item = {item}/>;
        })}
      </styles.CommunityListBox>
      <styles.PlusButton src="/assets/icon/Button/plus_button.svg"/>
    </>
    
  );
};


export default CommunityList;