// styles.tsx
import { COLORS } from '../../../styles/constants/colors';
import styled from '@emotion/styled';
import { TEXT_STYLES } from '../../../styles/constants/textStyles';

interface DayBlockNProps {
  height?: string;
  width?: string;
  isToday?: Boolean;

  // 일: 0, 월: 1, 화: 2, 수: 3, 목: 4, 금: 5, 토: 6
  weekday?: number;
  isSelected?: Boolean;

  fontFamily?: string;
  fontSize?: string;
}

export const DayBlockN = styled.div<DayBlockNProps>`
  margin-bottom: 3px;
  border-radius: 8px;
  align-items: center;
  width: ${(props) => {
    if (props.isToday) return '29px';
    return '33px';
  }};
  height: ${(props) => {
    if (props.isToday) return '29px';
    return '33px';
  }};
  display: flex;
  justify-content: center;
  font-size: ${(props) =>
    props.fontSize ? props.fontSize : TEXT_STYLES.CapM14.fontSize};
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : TEXT_STYLES.CapM14.fontFamily};

  background-color: ${(props) => {
    if (props.isSelected) return COLORS.SSU.primary;
    return COLORS.grayscale.white;
  }};
  color: ${(props) => {
    if (props.isSelected) return COLORS.grayscale.white;
    if (props.isToday) return COLORS.SSU.primary;
    if (props.weekday == 0) return COLORS.SSU.error;
    if (props.weekday == 6) return COLORS.SSU.blue;
    return COLORS.grayscale.Black;
  }};
  border: ${(props) => {
    if (props.isToday) return '2px solid ' + COLORS.SSU.primary;
    return 'none';
  }};
`;

interface DayBlockBoxProps {
  height?: string;
  width?: string;
}
export const DayBlockBox = styled.div<DayBlockBoxProps>`
  border-radius: 8px; /* 각이 둥근 사각형 */
  margin-right: 4px;
  margin-left: 4px;
  width: 33px;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface TasksTodayProps {
  height?: string;
  width?: string;
}
export const TasksToday = styled.div<TasksTodayProps>`
  display: flex;
  justify-content: center;
  margin-bottom: 3px;
  width: 33px;
`;

interface TaskProps {
  Height?: string;
  Width?: string;
  Key?: number;
  Color?: string;
}
export const Task = styled.div<TaskProps>`
  border-radius: 8px; /* 각이 둥근 사각형 */
  width: 5px;
  height: 5px;
  margin-left: 2px;
  margin-right: 2px;
  background-color: ${(props) => props.Color};
`;
