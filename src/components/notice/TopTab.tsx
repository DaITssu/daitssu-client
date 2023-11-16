import { useState } from 'react';
import NoticeList from './NoticeList';
import { jsx, css } from '@emotion/react';
import * as styles from './TopTab.styles';
import SearchBar from './anouncement/SearchBar'
import ButtonGroup from './anouncement/SelectButton';


const TopTab = () => {
  const data = [
    {
      id: 0,
      title: '공지사항',
   
      contents: <NoticeList items = {[]}/>,
    },
    {
      id: 1,
      title: '펀시스템',
      // TODO: noticelist 추가 필요 (디자인 수정 필요)
      contents: <NoticeList items = {[]}/>,
    },
  ];
  const [index, setIndex] = useState(0);

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
      <SearchBar/>
      <ButtonGroup/>
      {data[index].contents}
     
    </styles.TabContentBox>
  );
};

export default TopTab;
