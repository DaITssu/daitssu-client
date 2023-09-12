import { useState } from 'react';
import * as styles from './MyPostsTab.style';

const MyPostsTab = () => {
  const data = [
    {
      title: '글',
      contents: '글 목록!', // 컴포넌트 맞게 넣기 
    },
    {
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
      <styles.TabBox>
        {data.map((element, idx) => (
          <styles.TabFontBox
            key={idx}
            isSelected={idx === index}
            onClick={() => selectMenuHandler(idx)}
          >
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

export default MyPostsTab;