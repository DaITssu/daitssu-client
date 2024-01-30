import styled from '@emotion/styled';
import { COLORS } from '@/styles/constants/colors';
import { TEXT_STYLES } from '@/styles/constants/textStyles';

export const Container = styled.div``;

export const NavBarWrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  z-index: 10;
`;

export const FlexBox = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${COLORS.grayscale.Gray3};
  padding-top: 0.8rem;
`;

export const LeftBox = styled.div``;

export const RightBox = styled.div`
  width: 340px;
  margin-left: 5px;
`;

export const TopBox = styled.div`
  display: flex;
  margin-bottom: 0.6rem;
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 35px;
`;

export const TagBox = styled.div``;

export const MyCommentText = styled.div`
  ${TEXT_STYLES.BodyM16};
`;

export const PostInfoBox = styled.div`
  width: 200px;
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

export const PostTitleBox = styled.div`
  ${TEXT_STYLES.BodyM16};
  color: ${COLORS.grayscale.Gray1};
`;

export const PostCommentText = styled.div`
  line-height: 150%; /* 21px */
  ${TEXT_STYLES.CapM14}
  display: flex;
  align-items: center;
`;

export const BottomBox = styled.div`
  display: flex;
  margin-bottom: 0.8rem;
`;

export const ContentBox = styled.div`
  ${TEXT_STYLES.CapR14}
  color: ${COLORS.grayscale.Gray1};
  margin-top: 0.6rem;
  padding-right: 1rem;
`;

interface TabFontBoxProps {
  isSelected: boolean;
}

export const TabFontBox = styled.div<TabFontBoxProps>`
  font-style: normal;
  line-height: 210%;
  text-align: center;
  position: relative;
  width: 50%;
  height: 36px;
  display: inline-block;
  color: ${(props) => (props.isSelected ? '#5EBEEB' : '#313131')};
  border-bottom: 2px solid
    ${(props) => (props.isSelected ? '#5EBEEB' : '#D9D9D9')};
`;

export const TabBox = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 40px;
  left: 0px;
  top: 56px;
  padding-top: 4px;
  ${TEXT_STYLES.BodyR16};
  background-color: white;
`;

export const TabContents = styled.div`
  top: 200px;
  position: absolute;
  width: 100%;
`;

export const PostContianer = styled.div`
  margin-top: -103px;
`;
