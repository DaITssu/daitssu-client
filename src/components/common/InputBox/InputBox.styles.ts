import styled from '@emotion/styled';
import { COLORS } from '@/styles/constants/colors';
import { TEXT_STYLES } from '@/styles/constants/textStyles';
import { css } from '@emotion/react';

export const InputBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 12px 0;
`;

export const InputLabel = styled.label`
  color: ${COLORS.grayscale.Gray1};
  ${TEXT_STYLES.CapM14};

  margin-bottom: 4px;
`;

export const Input = styled.input<{ width?: string; height?: string }>`
  ${({ width = '358px', height = '48px' }) => css`
    width: ${width};
    height: ${height};
  `}
  padding: 12px;

  background-color: white;
  border-radius: 6px;
  border: 1px solid ${COLORS.grayscale.Gray3};
  outline: none;

  color: ${COLORS.grayscale.Gray1};
  ${TEXT_STYLES.BodyR16};

  //type='number'일 때 화살표 없애기
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
