import { COLORS } from '@/styles/constants/colors';
import { TEXT_STYLES } from '@/styles/constants/textStyles';
import styled from '@emotion/styled';

export const CommentWhiteBox = styled.div`
  padding: 15px 10px;
  display: flex;
`;

export const CLeftBox = styled.div`
  width: 45px;
  height: 45px;
`;

export const CRightBox = styled.div`
  width: 373px;
  margin-left: 17px;
  display: flex;
  flex-direction: column;
`;

export const CTopBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;
export const NicknameBox = styled.div`
  display: flex;
  ${TEXT_STYLES.BodyM16};
  align-items: center;
`;

export const TimeBox = styled.div`
  display: flex;
  margin-left: 10px;
  ${TEXT_STYLES.CapR14};
  align-items: center;
  margin-right: auto;
  color: ${COLORS.grayscale.Gray1};
`;

export const OtherBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const MessageBox = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 7px;
`;

export const ReportBox = styled.div`
  display: flex;
`;

export const CommentContentBox = styled.div`
  ${TEXT_STYLES.BodyR16};
`;
