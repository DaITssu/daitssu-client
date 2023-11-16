import React, { useState } from 'react';
import Image from 'next/image';
import * as styles from './SelectButton.style';
import BottomArrow from '@icons/icon/Arrow/DownBigArrow.svg';
import UpArrow from '@icons/icon/Arrow/UpBigArrow.svg';
import { FunSystemCategory, NoticeCategory, getKor } from '../CategoryMapping';

interface ButtonGroupProps {
  index: number; // index prop 추가
  category: (selectedButton: string) => void;
}
const ButtonGroup: React.FC<ButtonGroupProps> = ({ index, category }) =>{

  const [selectedButton, setSelectedButton] = useState<string>('ALL');

  const [expand, setExpand] = useState<boolean>(false);

  const handleButtonClick = (buttonText: string) => {
    setSelectedButton(buttonText);

    category(buttonText);
  };

  const handleExpandClick = () => {
    setExpand(!expand);
  };
  const categories = index ? Object.keys(FunSystemCategory) : Object.keys(NoticeCategory);

  return (
    <styles.Background>
      <styles.ButtonGroupContainer expand={expand}>
        <styles.ButtonGroupStyles expand={expand}>
          <styles.Padding>
            {categories.map((category)=>(
              <styles.Button
                key={category}
                selected = {selectedButton === category}
                onClick={()=>handleButtonClick(category)}
              >
                {getKor(category)}
              </styles.Button>
            ))}
          </styles.Padding>
        </styles.ButtonGroupStyles>
        {!expand ? (
          <styles.ExpandButton onClick={handleExpandClick}>
            <Image src={BottomArrow} width={20} height={20} alt={''} />
          </styles.ExpandButton>
        ) : (
          <styles.ExpandButton onClick={handleExpandClick}>
            <Image src={UpArrow} width={20} height={20} alt={''} />
          </styles.ExpandButton>
        )}
      </styles.ButtonGroupContainer>
      {expand ? (
        <styles.GrayBackgroundStyles/>
      ) : null}
    </styles.Background>
  );
};

export default ButtonGroup;
