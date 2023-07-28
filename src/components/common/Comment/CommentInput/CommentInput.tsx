import * as styles from './CommentInput.styles';

function CommentInput() {
  return (
    <styles.MyCommentBox>
      <styles.CommentFlexBox>
        <styles.MyLeftBox>
          <styles.MyCommentLabel>
            <input placeholder="  댓글을 남겨보세요."></input>
          </styles.MyCommentLabel>
        </styles.MyLeftBox>
        <styles.MyRightBox>
          {/** TODO: common Btn으로 디자인 변경하기 */}
          <styles.MyCommentBtn>등록</styles.MyCommentBtn>
        </styles.MyRightBox>
      </styles.CommentFlexBox>
    </styles.MyCommentBox>
  );
}

export default CommentInput;
