import styled from '@emotion/styled';
import { COLORS } from '@/styles/constants/colors';
import { TEXT_STYLES } from '@/styles/constants/textStyles';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${COLORS.grayscale.white};
  hr {
    border: solid 1px ${COLORS.grayscale.Gray3};
  }
`;

export const InfoBox = styled.div`
  padding: 15px;
`;

export const TypeBox = styled.div`
  margin: 0px 0 10px;
  text-decoration: underline;
  text-underline-position: under;
  ${TEXT_STYLES.CapR14};
  color: ${COLORS.grayscale.Gray1};
`;

export const MiddleBox = styled.div`
  display: flex;
  margin-bottom: 10px;
  height: 21px;
  span {
    margin-left: 5px;
  }
`;

export const TitleBox = styled.div`
  margin-bottom: 10px;
  ${TEXT_STYLES.HeadM20};
`;

export const DateBox = styled.div`
  display: flex;
  text-align: center;
  ${TEXT_STYLES.CapR14};
  align-items: center;

  span {
    margin-left: 5px;
    text-align: center;
    display: flex;
    color: ${COLORS.grayscale.Gray1};
  }
`;

export const WatchBox = styled.div`
  margin-left: 15px;
  display: flex;
  text-align: center;
  align-items: center;
  ${TEXT_STYLES.CapR14};
  span {
    text-align: center;
    display: flex;
    color: ${COLORS.grayscale.Gray1};
  }
`;

export const ShareBox = styled.div`
  width: 109.45px;
  margin-left: auto;
`;

export const SharePopupBox = styled.div`
  margin-top: 28px;
  position: relative;
  z-index: 1;
  background-color: white;
  font-size: 14px;
  border: 1px solid;
  border-color: ${COLORS.grayscale.Gray4};
`;

export const ShareIconBox = styled.div`
  float: right;
`;

export const DropdownIconBox = styled.div`
  display: flex;
  align-items: center;
`;

export const DropdownTextBox = styled.div`
  margin-left: 8px;
  display: flex;
  align-items: center;
  ${TEXT_STYLES.CapR14};
`;

export const UrlBox = styled.li`
  padding: 7px 13px;
  list-style: none;
  display: flex;
  border-bottom: 1px solid;
  border-color: ${COLORS.grayscale.Gray4};
`;

export const KakaoBox = styled.li`
  padding: 7px 13px;
  list-style: none;
  display: flex;
`;

export const ContentBox = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  ${TEXT_STYLES.BodyR16};
  word-break: break-all;
`;

export const FileBox = styled.div`
  margin-top: 15px;
`;

export const FileTopBox = styled.div`
  display: flex;
  padding-bottom: 5px;
`;

export const FileIconBox = styled.div`
  display: flex;
  align-items: center;
`;

export const FileTitleBox = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
  ${TEXT_STYLES.BodyM16};
`;

export const FileAttachBox = styled.div`
  display: flex;
  background-color: ${COLORS.grayscale.Gray4};
  padding: 0 15px;
  border-radius: 10px;
  margin-bottom: 15px;
  height: 45px;
`;

export const FileNameBox = styled.div`
  ${TEXT_STYLES.CapR14};
  display: flex;
  align-items: center;
`;

export const FileDownBox = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const BottomBox = styled.div``;

export const CommentTitleBox = styled.div`
  background-color: ${COLORS.grayscale.Gray5};
  ${TEXT_STYLES.BodyM16};
  height: 48px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
