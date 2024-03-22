import styled from '@emotion/styled';
import { COLORS } from '@/styles/constants/colors';

export const Padding = styled.div`
  padding: 10px;
`;

export const ButtonGroupContainer = styled.div<{ expand: boolean }>`
  width: 100%;
  height: 59px;
  position: relative;
  background: ${COLORS.grayscale.white};
  height: ${({ expand }) => (expand ? '100%' : '59px')};
  padding-right: 20px;
`;

export const ButtonGroupStyles = styled.div<{ expand: boolean }>`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  max-height: ${({ expand }) => (expand ? '210px' : '59px')};
  transition: max-height 0.3s;
`;

export const GrayBackgroundStyles = styled.div`
  width: 100%;
  height: calc(100% - 300px);
  position: absolute;
  background-color: black;
  opacity: 0.2;
  transition: opacity 1s;
  z-index: 5;
`;

export interface ButtonProps {
  selected: boolean;
}
export const Background = styled.div`
  width: 100%;
  height: 100%;
`;
export const Button = styled.button<ButtonProps>`
  padding: 10px 20px;
  margin-right: 10px;
  margin-bottom: 12px;
  border: 2px solid ${COLORS.SSU.primary};
  color: ${COLORS.SSU.primary};
  background-color: ${COLORS.grayscale.white};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 25px;
  &:not(:first-of-type) {
    /* margin-top: 5px;
    margin-left: 5px; */
  }

  &:hover {
    background-color: ${COLORS.SSU.primary};
    color: ${COLORS.grayscale.white};
  }

  ${({ selected }) =>
    selected &&
    `
    background-color: ${COLORS.SSU.primary};
    color: ${COLORS.grayscale.white};
  `}
`;

export const ExpandButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;

  transform: translateY(50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
