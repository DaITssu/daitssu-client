import Button from '../../Button';
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
          <Button label="등록" width={57} height={45} />
        </styles.MyRightBox>
      </styles.CommentFlexBox>
    </styles.MyCommentBox>
  );
}

export default CommentInput;
