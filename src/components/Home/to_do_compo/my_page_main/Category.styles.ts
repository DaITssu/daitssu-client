import { COLORS } from '@/styles/constants/colors';
import styled from '@emotion/styled';
import { TEXT_STYLES } from '@/styles/constants/textStyles';

// 가독성을 위해 스타일 파일은 별도로 둡니다.

interface CategoryProps {
  /** 상태값 종류, true->채워진 배경 | false->흰 배경 */
  BgColor: boolean;
}

export const Category = styled.div<CategoryProps>`
  height: 35px;
  padding: 0 15px;
  line-height: 35px;
  border-radius: 20px;
  text-align: center;
  display: inline-block;
  color: ${(props) =>
    props.BgColor ? COLORS.grayscale.white : COLORS.SSU.primary};
  background-color: ${(props) =>
    props.BgColor ? COLORS.SSU.primary : COLORS.grayscale.white};
  border: 1px solid
    ${(props) => (props.BgColor ? COLORS.SSU.primary : COLORS.SSU.primary)};
  ${TEXT_STYLES.CapM14};
`;
