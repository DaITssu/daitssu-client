import styled from '@emotion/styled';
import { COLORS } from '@/styles/constants/colors';
import { TEXT_STYLES } from '@/styles/constants/textStyles';

export const FlexBox = styled.div`
  display: flex;
  background-color: white;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid ${COLORS.grayscale.Gray3};
  padding-top: 0.8rem;
`;

export const LeftBox = styled.div``;

export const RightBox = styled.div`
  width: 86%;
  padding-right: 1.2rem;
`;

export const TopBox = styled.div`
  display: flex;
  margin-bottom: 0.6rem;
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 35px;
`;

export const TagBox = styled.div``;

export const TimeBox = styled.div`
  display: flex;
  align-items: center;
  color: ${COLORS.grayscale.Gray1};
  margin-left: auto;
  ${TEXT_STYLES.CapR14};
`;

export const TitleBox = styled.div`
  ${TEXT_STYLES.BodyM16};
`;

export const BottomBox = styled.div`
  display: flex;
  margin-bottom: 0.8rem;
`;

export const ContentBox = styled.div`
  color: ${COLORS.grayscale.Gray1};
  margin-top: 0.6rem;
  padding-right: 1rem;
  ${TEXT_STYLES.CapR14};
`;

export const MessageBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  margin-left: auto;
`;

export const MessageIconBox = styled.div`
  display: flex;
  align-items: center;
`;

export const MessageCntBox = styled.div`
  ${TEXT_STYLES.CapR14};
  color: ${COLORS.grayscale.Gray1};
  margin-left: 0.5rem;
`;
