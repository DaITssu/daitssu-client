import styled from '@emotion/styled';

interface TabFontBoxProps {
  isSelected: boolean;
}


export const TabFontBox = styled.div<TabFontBoxProps>`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 210%;
  letter-spacing: -0.011em;
  text-align: center;
  color: #313131;
  position: relative;
  width: 71px;
  height: 34px;
  display: inline-block;

  /* Apply different styles based on isSelected prop */
  border-bottom: 2px solid ${props => props.isSelected ? "#5EBEEB" : "#D9D9D9"};
`;

export const Rectangle242 = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 390px;
  height: 36px;
  left: 0px;
  top: 107px;
  /* gray 3 */
  border-bottom: 2px solid #d9d9d9;
  padding-left: 16px;
`;