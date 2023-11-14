import styled from '@emotion/styled';
import { TEXT_STYLES } from '@/styles/constants/textStyles';
import { COLORS } from '@/styles/constants/colors';

// 가독성을 위해 스타일 파일은 별도로 둡니다.

interface StatusProps {
  /** 상태값 종류, 0->미완료 | 1->완료 | 2->시간초과. */
  status: number;
}

export const Status = styled.div<StatusProps>`
  height: 20px;
  padding: 0 10px;
  line-height: 20px;
  border-radius: 12px;
  text-align: center;
  display: inline-block;
  color: ${COLORS.grayscale.white};
  background-color: ${(props) => {
    switch (props.status) {
      case 0:
        return COLORS.SSU.error;
      case 1:
        return COLORS.SSU.primary;
      case 2:
        return COLORS.grayscale.Gray1;
    }
  }};
  ${TEXT_STYLES.CapM12};
`;
