import { useState } from 'react';
import Button from '../../Button';
import * as styles from './CommentInput.styles';

interface CIProps {
  input: string;
  setInput: Function;
  EnrollFunc: Function;
}

function CommentInput({ input, setInput, EnrollFunc }: CIProps) {
  const [text, setText] = useState<string>();

  return (
    <styles.MyCommentBox>
      <styles.CommentFlexBox>
        <styles.MyLeftBox>
          <styles.MyCommentLabel>
            <input
              value={input}
              placeholder="  댓글을 남겨보세요."
              onChange={(e) => setInput(e.target.value)}
            ></input>
          </styles.MyCommentLabel>
        </styles.MyLeftBox>
        <styles.MyRightBox>
          <Button
            label="등록"
            width={57}
            height={45}
            onClick={() => {
              setInput(text);
              console.log(text);
              EnrollFunc();
            }}
          />
        </styles.MyRightBox>
      </styles.CommentFlexBox>
    </styles.MyCommentBox>
  );
}

export default CommentInput;
