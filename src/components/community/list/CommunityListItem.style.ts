import { COLORS } from '@/styles/constants/colors';
import { TEXT_STYLES } from '@/styles/constants/textStyles';
import styled from '@emotion/styled';
import Image from 'next/image';

export const ListBox = styled.button`
  list-style: none;
  width: 100%;
  height: 134px;
  position: relative;
  border: 0;
  background: ${COLORS.grayscale.white};
  border-top: 1px solid ${COLORS.grayscale.Gray3};
`;
export const Minutes = styled.div`
  position: absolute;
  right: 20px;
  top: 15px;
  ${TEXT_STYLES.CapR14};
  text-align: right;
  color: ${COLORS.grayscale.Gray1};
`;

export const Review = styled.div`
  ${TEXT_STYLES.CapR14};
  color: ${COLORS.grayscale.Gray1};
`;
export const Status = styled.div`
  white-space: nowrap;
  text-align: left;
  display: inline-flex;
  padding: 2px 10px;
  gap: 10px;
  position: absolute;
  left: 20px;
  top: 15px;
  background: ${COLORS.grayscale.white};
  border: 1px solid ${COLORS.SSU.primary};
  border-radius: 12px;

  flex: 1;
  ${TEXT_STYLES.CapM12};
  text-align: center;
  color: ${COLORS.SSU.primary};
  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const Bubble = styled.div`
  position: absolute;
  right: 20px;
  bottom: 15px;
  display: flex;
`;
export const BubbleGroup = styled(Image)`
  margin-right: 5px;
  align-item: center;
  margin-top: 1px;
`;

export const Title = styled.div`
  position: absolute;
  left: 20px;
  top: 32.84%;
  text-align: left;

  ${TEXT_STYLES.BodyM16};

  color: ${COLORS.grayscale.Black};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Contents = styled.div`

position: absolute;
left: 20px;
right: 15%;
top: 56.72%;
bottom: 15%;
text-align:left;

${TEXT_STYLES.CapR14};

color: ${COLORS.grayscale.Gray1}

/*최대 두줄 */
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2; 
-webkit-box-orient: vertical;
overflow: hidden;
`;
