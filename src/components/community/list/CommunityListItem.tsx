
import * as styles from "./CommunityListItem.style";
import React from 'react';
import Link from "next/link";
import bubble from "@icons/icon/Icon18/SmallComment.svg"

const changeDate =(timestampString : string) =>{
  const nowDate = new Date();
  const timestamp = new Date(timestampString);

  const timeDiff:number = nowDate.getTime() - timestamp.getTime();
  const formatter = new Intl.RelativeTimeFormat('ko', { numeric: 'auto' });

  if (timeDiff < 3600000) {
    return formatter.format(-Math.floor(timeDiff / 60000), 'minute');
  } else if (timeDiff < 86400000) {
    return formatter.format(-Math.floor(timeDiff / 3600000), 'hour');
  } else {
    const datePart = timestamp.toISOString().split('T')[0];
    return datePart;
  }
}

export interface CommunityItemProps {
  id : number;
  topic: string;
  title: string;
  content : string;
  writerNickName : string;
  updatedAt : string;
  imageUrls : string[];
  review : number;
}

interface Props{
  item:CommunityItemProps;
}

const CommunityListItem:React.FC<Props> = ({item}:Props)=>{
  
  return(
    <>
      <Link href = {`/community/${item.id}`}>
        <styles.ListBox>
          <styles.Status>
            {item.topic}
          </styles.Status>
          <styles.Title>
            {item.title}
          </styles.Title>
          <styles.Contents>
            {item.content}
          </styles.Contents>
          <styles.Bubble>
            <styles.BubbleGroup src = {bubble} width={18} height={18} alt={'chat_icon'}/>
            <styles.Review>
                {item.review}
            </styles.Review>
          </styles.Bubble>
          <styles.Minutes>
            {changeDate(item.updatedAt)}
          </styles.Minutes>
        </styles.ListBox>
      </Link>
    </>
    
  );
};


export default CommunityListItem;
