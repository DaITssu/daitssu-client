import React, { useState } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

const ButtonGroupContainer = styled.div`
  width: 390px;
  height: 59px;
  position: relative;
`;

const ButtonGroupStyles = styled.div<{ expand: boolean }>`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  max-height: ${({ expand }) => (expand ? '200px' : '40px')};
  transition: max-height 0.3s;
`;

interface ButtonProps {
  selected: boolean;
}

const Button = styled.button<ButtonProps>`
  padding: 10px 20px;
  margin-right: 10px;
  margin-bottom: 10px;
  border: 2px solid #5ebeeb;
  color: #5ebeeb;
  background-color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 25px;
  &:not(:first-of-type) {
    /* margin-top: 5px;
    margin-left: 5px; */
  }

  &:hover {
    background-color: #5ebeeb;
    color: #ffffff;
  }

  ${({ selected }) =>
    selected &&
    `
    background-color: #5ebeeb;
    color: #ffffff;
  `}
`;

const ExpandButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;

  transform: translateY(50%);
  background-color: white;
  border: none;
  cursor: pointer;
`;

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
    <ButtonGroupContainer>
      <ButtonGroupStyles expand={expand}>
        <Button
          selected={selectedButton === '전체'}
          onClick={() => handleButtonClick('전체')}
        >
          전체
        </Button>
        <Button
          selected={selectedButton === '구독'}
          onClick={() => handleButtonClick('구독')}
        >
          구독
        </Button>
        <Button
          selected={selectedButton === '학습역량'}
          onClick={() => handleButtonClick('학습역량')}
        >
          학습역량
        </Button>
        <Button
          selected={selectedButton === '공모전/경진대회'}
          onClick={() => handleButtonClick('공모전/경진대회')}
        >
          공모전/경진대회
        </Button>
        <Button
          selected={selectedButton === '자격증/특강'}
          onClick={() => handleButtonClick('자격증/특강')}
        >
          자격증/특강
        </Button>
        <Button
          selected={selectedButton === '학생활동'}
          onClick={() => handleButtonClick('학생활동')}
        >
          학생활동
        </Button>
        <Button
          selected={selectedButton === '해외연수/교환학생'}
          onClick={() => handleButtonClick('해외연수/교환학생')}
        >
          해외연수/교환학생
        </Button>
        <Button
          selected={selectedButton === '인턴'}
          onClick={() => handleButtonClick('인턴')}
        >
          인턴
        </Button>
        <Button
          selected={selectedButton === '봉사'}
          onClick={() => handleButtonClick('봉사')}
        >
          봉사
        </Button>
        <Button
          selected={selectedButton === '체험활동'}
          onClick={() => handleButtonClick('체험활동')}
        >
          체험활동
        </Button>
        <Button
          selected={selectedButton === '심리/상담/진단'}
          onClick={() => handleButtonClick('심리/상담/진단')}
        >
          심리/상담/진단
        </Button>
        <Button
          selected={selectedButton === '진로지원'}
          onClick={() => handleButtonClick('진로지원')}
        >
          진로지원
        </Button>
        <Button
          selected={selectedButton === '창업지원'}
          onClick={() => handleButtonClick('창업지원')}
        >
          창업지원
        </Button>
        <Button
          selected={selectedButton === '취업지원'}
          onClick={() => handleButtonClick('취업지원')}
        >
          취업지원
        </Button>
      </ButtonGroupStyles>
      {!expand ? (
        <ExpandButton onClick={handleExpandClick}>
          <Image src={'/bottomArrow.png'} width={20} height={20} alt={''} />
        </ExpandButton>
      ) : (
        <ExpandButton onClick={handleExpandClick}>
          <Image src={'/topArrow.png'} width={20} height={20} alt={''} />
        </ExpandButton>
      )}
    </ButtonGroupContainer>
  );
};

export default ButtonGroup;
