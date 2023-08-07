import { COLORS } from '../../styles/constants/colors';
import styled from '@emotion/styled';
import { TEXT_STYLES } from '../../styles/constants/textStyles';

// 가독성을 위해 스타일 파일은 별도로 둡니다.

export const ReportScreen = styled.div`
  width: 440px;
  height: 844px;
  border: solid black 1px;
`;

export const ReportItemStyle = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    margin-left: 15px;
  }
`;

export const ReportInput = styled.input`
  margin-top: 20px;
  width: 358px;
  border: 1px solid ${COLORS.grayscale.Gray2};
  height: 108px;
`;
