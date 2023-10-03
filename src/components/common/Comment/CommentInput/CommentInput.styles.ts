import { COLORS } from '@/styles/constants/colors';
import { TEXT_STYLES } from '@/styles/constants/textStyles';
import styled from '@emotion/styled';

export const MyCommentBox = styled.div`
  margin: auto;
  width: 358px;
  height: 45px;
`;

export const CommentFlexBox = styled.div`
  position: fixed;
  top: 90%;
  display: flex;
  width: 358px;
`;

export const MyLeftBox = styled.div`
  margin-right: auto;
`;

export const MyRightBox = styled.div`
  margin-left: auto;
`;

export const MyCommentLabel = styled.label`
  input {
    background-color: ${COLORS.grayscale.Gray4};
    width: 293px;
    height: 45px;
    border-radius: 10px;
    border: none;
    padding-left: 10px;
    outline: none;
  }
  input::placeholder {
    color: ${COLORS.grayscale.Gray1};
    ${TEXT_STYLES.BodyM16};
    padding-left: 0;
  }
`;
