import styled from '@emotion/styled';

export const ButtonGroupContainer = styled.div<{ expand: boolean }>`
  width: 390px;
  height: 59px;
  position: relative;
  background-color: white;
  height: ${({ expand }) => (expand ? '200px' : '40px')};
`;

export const ButtonGroupStyles = styled.div<{ expand: boolean }>`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  max-height: ${({ expand }) => (expand ? '200px' : '40px')};
  transition: max-height 0.3s;
`;

export const grayBackgroundStyles = styled.div`
  /* width: 100%; */
  height: 350px;
  background-color: black;
  opacity: 0.2;
  transition: opacity 1s;
`;

export interface ButtonProps {
  selected: boolean;
}

export const Button = styled.button<ButtonProps>`
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

export const ExpandButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;

  transform: translateY(50%);
  background-color: white;
  border: none;
  cursor: pointer;
`;
