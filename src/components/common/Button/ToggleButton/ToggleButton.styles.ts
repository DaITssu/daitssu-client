import styled from '@emotion/styled';
import { COLORS } from '@/styles/constants/colors';

export const ToggleSwitch = styled.div`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
`;

export const HiddenCheckbox = styled.input`
  display: none;
`;

export const Switch = styled.span<{ isChecked: boolean }>`
  position: absolute;
  cursor: pointer;
  background-color: ${(props) =>
    props.isChecked ? `${COLORS.SSU.primary}` : '#ccc'};
  border-radius: 25px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color 0.2s ease;

  &::before {
    position: absolute;
    content: '';
    left: 2px;
    top: 2px;
    width: 21px;
    height: 21px;
    background-color: #fff;
    border-radius: 50%;
    transform: ${(props) => (props.isChecked ? 'translateX(25px)' : 'none')};
    transition: transform 0.3s ease;
  }
`;
