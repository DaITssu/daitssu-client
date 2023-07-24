import styled from '@emotion/styled';

function CommentInput() {
  return (
    <MyCommentBox>
      <CommentFlexBox>
        <MyLeftBox>
          <MyCommentLabel>
            <input placeholder="  댓글을 남겨보세요."></input>
          </MyCommentLabel>
        </MyLeftBox>
        <MyRightBox>
          {/** TODO: common Btn으로 디자인 변경하기 */}
          <MyCommentBtn>등록</MyCommentBtn>
        </MyRightBox>
      </CommentFlexBox>
    </MyCommentBox>
  );
}

const MyCommentBox = styled.div`
  margin: auto;
  width: 358px;
  height: 45px;
`;

const CommentFlexBox = styled.div`
  position: fixed;
  top: 90%;
  display: flex;
  width: 358px;
`;

const MyLeftBox = styled.div`
  margin-right: auto;
`;

const MyRightBox = styled.div`
  margin-left: auto;
`;

const MyCommentLabel = styled.label`
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

const MyCommentBtn = styled.button``;

export default CommentInput;
