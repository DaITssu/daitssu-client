import React, { useState } from 'react';
import Image from 'next/image';
import * as styles from './SelectButton.style';
import BottomArrow from '@icons/icon/Arrow/DownBigArrow.svg';
import UpArrow from '@icons/icon/Arrow/UpBigArrow.svg';

const ButtonGroup = () => {
  const [selectedButton, setSelectedButton] = useState<string>('전체');
  const [expand, setExpand] = useState<boolean>(false);

  const handleButtonClick = (buttonText: string) => {
    setSelectedButton(buttonText);
  };

  const handleExpandClick = () => {
    setExpand(!expand);
  };

  return (
    <styles.Background>
      <styles.ButtonGroupContainer expand={expand}>
        <styles.ButtonGroupStyles expand={expand}>
          <styles.Padding>
            <styles.Button
              selected={selectedButton === '전체'}
              onClick={() => handleButtonClick('전체')}
            >
              전체
            </styles.Button>
            <styles.Button
              selected={selectedButton === '구독'}
              onClick={() => handleButtonClick('구독')}
            >
              구독
            </styles.Button>
            <styles.Button
              selected={selectedButton === '학습역량'}
              onClick={() => handleButtonClick('학습역량')}
            >
              학습역량
            </styles.Button>
            <styles.Button
              selected={selectedButton === '공모전/경진대회'}
              onClick={() => handleButtonClick('공모전/경진대회')}
            >
              공모전/경진대회
            </styles.Button>
            <styles.Button
              selected={selectedButton === '자격증/특강'}
              onClick={() => handleButtonClick('자격증/특강')}
            >
              자격증/특강
            </styles.Button>
            <styles.Button
              selected={selectedButton === '학생활동'}
              onClick={() => handleButtonClick('학생활동')}
            >
              학생활동
            </styles.Button>
            <styles.Button
              selected={selectedButton === '해외연수/교환학생'}
              onClick={() => handleButtonClick('해외연수/교환학생')}
            >
              해외연수/교환학생
            </styles.Button>
            <styles.Button
              selected={selectedButton === '인턴'}
              onClick={() => handleButtonClick('인턴')}
            >
              인턴
            </styles.Button>
            <styles.Button
              selected={selectedButton === '봉사'}
              onClick={() => handleButtonClick('봉사')}
            >
              봉사
            </styles.Button>
            <styles.Button
              selected={selectedButton === '체험활동'}
              onClick={() => handleButtonClick('체험활동')}
            >
              체험활동
            </styles.Button>
            <styles.Button
              selected={selectedButton === '심리/상담/진단'}
              onClick={() => handleButtonClick('심리/상담/진단')}
            >
              심리/상담/진단
            </styles.Button>
            <styles.Button
              selected={selectedButton === '진로지원'}
              onClick={() => handleButtonClick('진로지원')}
            >
              진로지원
            </styles.Button>
            <styles.Button
              selected={selectedButton === '창업지원'}
              onClick={() => handleButtonClick('창업지원')}
            >
              창업지원
            </styles.Button>
            <styles.Button
              selected={selectedButton === '취업지원'}
              onClick={() => handleButtonClick('취업지원')}
            >
              취업지원
            </styles.Button>
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
