import { useState } from 'react';
import * as styles from '../../styles/constants/TopTab.style';

const TopTab = () => {
  const data = [
    {
      id: 0,
      title: '공지사항',
      // TODO: noticelist 추가 필요 (디자인 수정 필요)
      contents: '공지사항 내용!',
    },
    {
      id: 1,
      title: '펀시스템',
      // TODO: noticelist 추가 필요 (디자인 수정 필요)
      contents: '펀시스템 내용!',
    },
  ];
  const [index, setIndex] = useState(0);

  const selectMenuHandler = (n: number) => {
    setIndex(n);
  };

  return (
    <div>
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
      <p style={{ top: '200px', position: 'absolute' }}>
        {data[index].contents}
      </p>
    </div>
  );
};

export default TopTab;
