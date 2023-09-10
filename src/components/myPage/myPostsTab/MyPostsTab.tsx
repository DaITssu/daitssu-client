import { useState } from 'react';
import * as styles from './MyPostsTab.style';

const MyPostsTab = () => {
  const data = [
    {
      id: 0,
      title: '글',
      contents: '글 목록!', // 컴포넌트 맞게 넣기 
    },
    {
      id: 1,
      title: '댓글',
      contents: '댓글 목록!', // 컴포넌트 맞게 넣기 
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

export default MyPostsTab;
