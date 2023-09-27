import styled from '@emotion/styled';
import { COLORS } from '@/styles/constants/colors';
import { TEXT_STYLES } from '@/styles/constants/textStyles';

export const HeadTitle = styled.div`
  ${TEXT_STYLES.HeadM20};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 38px;
`;

// component
export const ComponentContainer = styled.div`
  height: 88px;
  padding: 15px;
  align-items: center;
  display: flex;
  background-color: ${COLORS.SSU.secondary};

  &:visited {
    background-color: ${COLORS.SSU.secondary};
  }
`;

export const LeadingBox = styled.div`
  margin-bottom: auto;
  padding-top: 5px;
`;

export const ContentBox = styled.div`
  padding-left: 10px;
`;

export const RightTopBox = styled.div`
  display: flex;
  width: 330px;
`;

export const TypeBox = styled.div<{ type: '학부' | '장학' | 'none' }>`
  ${TEXT_STYLES.BodyM16};
  color: ${COLORS.SSU.blue};
  display: flex;
  align-items: center;
  margin-right: ${(props) => (props.type === 'none' ? '' : '5px')};
`;

export const TitleBox = styled.div`
  ${TEXT_STYLES.BodyM16};
  display: flex;
  align-items: center;
`;

export const TimeBox = styled.div`
  ${TEXT_STYLES.CapR14};
  color: ${COLORS.grayscale.Gray1};
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const RightBottomBox = styled.div`
  ${TEXT_STYLES.BodyR16};
  color: ${COLORS.grayscale.Black};
  margin-top: 10px;
`;
