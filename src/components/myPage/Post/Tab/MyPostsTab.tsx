import { useState } from 'react';
import * as styles from './MyPostsTab.style';
import ScrapList from '../../Scrap/ScrapList';
import MyComment from '../MyComment';

const MyPostsTab = () => {
  const data = [
    {
      title: '글',
      contents: (
        <styles.PostContianer>
          <ScrapList /> <ScrapList /> <ScrapList /> <ScrapList />
          <ScrapList /> <ScrapList />
        </styles.PostContianer>
      ),
    },
    {
      title: '댓글',
      contents: (
        <styles.PostContianer>
          <MyComment />
          <MyComment />
          <MyComment />
          <MyComment />
        </styles.PostContianer>
      ),
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
      <styles.TabContents>{data[index].contents}</styles.TabContents>
    </div>
  );
};

export default MyPostsTab;
