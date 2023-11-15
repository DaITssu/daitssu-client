
import * as styles from "../../../styles/community/list/CommunityListItem.style";
import React from 'react';
import Link from "next/link";
export interface CommunityItemProps {
  bundle: string;
  title: string;
  contents : string;
  minutes : number;
  review : number;
}

interface Props{
  item:CommunityItemProps;
}

const CommunityListItem:React.FC<Props> = ({item}:Props)=>{
  
  return(
    <>
      <Link href = {'/community/info'}>
        <styles.ListBox>
          <styles.Status>
            {item.bundle}
          </styles.Status>
          <styles.Title>
            {item.title}
          </styles.Title>
          <styles.Contents>
            {item.contents}
          </styles.Contents>
          <styles.BubbleGroup src = "/assets/icon/Bubble/TextBubble.png"/>
          <styles.Review>
            {item.review}
          </styles.Review>
          <styles.Minutes>
            {item.minutes}분전
          </styles.Minutes>
        </styles.ListBox>
      </Link>
    </>
    
  );
};


export default CommunityListItem;
