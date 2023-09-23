import { ReactNode, useState } from 'react';
import * as styles from './TwoTypeTab.style';

interface TProps {
  LeftTitle: string;
  RightTitle: string;
  LeftComponent: ReactNode;
  RightComponent: ReactNode;
}

const TwoTypeTab = ({
  LeftTitle,
  RightTitle,
  LeftComponent,
  RightComponent,
}: TProps) => {
  const data = [
    {
      title: LeftTitle,
      contents: LeftComponent,
    },
    {
      title: RightTitle,
      contents: RightComponent,
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

export default TwoTypeTab;
