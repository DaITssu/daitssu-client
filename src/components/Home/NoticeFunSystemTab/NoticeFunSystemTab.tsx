import { useState } from 'react';
import * as styles from './NoticeFunSystemTab.style';
import NoticeList from '@/components/notice/NoticeList';
import LineSearchBar from './LineSearchBar/LineSearchBar';
const NoticeFunSystemTab = () => {

  const data = [
    {
      title: '공지사항',
      contents:<NoticeList items={[]}/>,
    },
    {
      title: '펀시스템',
      contents:<NoticeList items={[]}/>,
    },
    {
      title: '커뮤니티',
      contents:<NoticeList items={[]}/>,
    },
  ];
  const [index, setIndex] = useState(0);

  const selectMenuHandler = (n: number) => {
    setIndex(n);
  };

  return (
    <div>
      <LineSearchBar/>
      <styles.TabBox>
        {data.map((element, idx) => (
          <styles.TabFontBox
            key={idx}
            isSelected={idx === index}
            onClick={() => selectMenuHandler(idx)}>
            {element.title}
          </styles.TabFontBox>
        ))}
      </styles.TabBox>
      <styles.TabContents>
        {data[index].contents}
      </styles.TabContents>
    </div>
  );
};

export default NoticeFunSystemTab;