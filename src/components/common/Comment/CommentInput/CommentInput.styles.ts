import { COLORS } from '@/styles/constants/colors';
import { TEXT_STYLES } from '@/styles/constants/textStyles';
import styled from '@emotion/styled';

export const MyCommentBox = styled.div`
  margin: auto;
  height: 45px;
  width: 90%;
`;

export const CommentFlexBox = styled.div`
  position: fixed;
  top: 90%;
  display: flex;
  margin: 0 auto;
  left: 0;
  right: 0;
  padding: 0 12px;
`;

export const MyLeftBox = styled.div`
  margin-right: auto;
  width: 100%;
`;

export const MyRightBox = styled.div`
  margin-left: 10px;
`;

export const MyCommentLabel = styled.label`
  input {
    background-color: ${COLORS.grayscale.Gray4};
    height: 45px;
    border-radius: 10px;
    border: none;
    padding-left: 10px;
    outline: none;
    width: 100%;
  }
  input::placeholder {
    color: ${COLORS.grayscale.Gray1};
    ${TEXT_STYLES.BodyM16};
    padding-left: 0;
  }
`;
