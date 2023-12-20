
import { COLORS } from '@/styles/constants/colors';
import { TEXT_STYLES } from '@/styles/constants/textStyles';
import styled from '@emotion/styled';

export const NoticeDate = styled.text
`
position: absolute;
right: 13px;
top: 40px;

${TEXT_STYLES.CapR14};
color: ${COLORS.grayscale.Gray1};

`;



export const Noticeitem = styled.button
`
  list-style:none;
  position:relative;
  width: 100%;
  height: 73px;
  margin-bottom : 12px;
  border-top : 10px;

  border: 0;
  background: ${COLORS.grayscale.Gray5};
  border-radius: 12px;
  &:active{
    background-color: ${COLORS.SSU.secondary};
  }
`;



export const NoticeTitleFont = styled.div
`
position: absolute;
left: 13px;
right: 50px;
top: 10px;

${TEXT_STYLES.BodyM16};
color: ${COLORS.grayscale.Black};

text-align : left;
white-space:nowrap;
overflow: hidden;
text-overflow: ellipsis;

`;