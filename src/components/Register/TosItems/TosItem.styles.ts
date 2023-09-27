import styled from '@emotion/styled';
import { COLORS } from '@/styles/constants/colors';
import { TEXT_STYLES } from '@/styles/constants/textStyles';

export const TosItemStyle = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const TosItemImageDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const Box = styled.div`
  width: 100%;

  padding: 16px;
  background-color: white;
`;

export const BoxHeaderText = styled.div`
  ${TEXT_STYLES.BodyM16}
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const EssentialText = styled.div`
  display: inline-block;
  color: ${COLORS.SSU.error};
`;

export const OptionText = styled.div`
  display: inline-block;
  color: ${COLORS.grayscale.Gray2};
`;
