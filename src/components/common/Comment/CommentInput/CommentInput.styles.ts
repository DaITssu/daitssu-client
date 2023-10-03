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
    background-color: rgba(238, 238, 238, 1);
    width: 293px;
    height: 45px;
    border-radius: 10px;
    border: none;
  }
  input::placeholder {
    color: rgba(110, 110, 110, 1);
    font-weight: 500;
    font-size: 16px;
  }
`;
