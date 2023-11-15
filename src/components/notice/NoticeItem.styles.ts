import styled from '@emotion/styled';
import Image from 'next/image';
import { TEXT_STYLES } from '@/styles/constants/textStyles';
import {COLORS} from '@/styles/constants/colors';

export const NoticeDate = styled.text`
  position: absolute;
  right : 12px;
  top: 71.29%;
  bottom: 7.92%;
  float : right;
  font-style: normal;
  ${TEXT_STYLES.CapR14};
  line-height: 150%;
  letter-spacing: -0.011em;
  color:${COLORS.grayscale.Gray1};
`;

export const NoticeViews = styled.text`

  position: absolute;
  left: 35px;
  right: 70%;
  top: 71.29%;
  bottom: 7.92%;
  text-align: left;
  ${TEXT_STYLES.CapR14};
  line-height: 150%;
  color:${COLORS.grayscale.Gray1};
`;

export const ViewIcon = styled(Image)`
  position: absolute;
  top: 73px;
  left: 11px;
`;

export const Noticeitem = styled.button`
  list-style: none;
  position: relative;
  width: 100%;
  height: 101px;
  margin-bottom: 12px;
  border-top: 10px;
  border: 0;
  background: ${COLORS.grayscale.Gray5};
  border-radius: 12px;
  &:active {
    background-color: ${COLORS.SSU.secondary};
  }
  display : flex;
  justify-content: center;
  box-sizing: border-box;
`;

export const NoticeText = styled.div`
  width: 24px;
  height: 18px;
  text-align: left;
  ${TEXT_STYLES.CapM12};
  text-align: center;
  color: ${COLORS.grayscale.Black};

  flex: none;
  order: 0;
  flex-grow: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const NoticeStatus = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 10px;
  gap: 10px;

  position: absolute;
  height: 18px;
  left: 12px;
  top: calc(50% - 24px / 2 - 28.5px);

  background: ${COLORS.grayscale.Gray3};
  border-radius: 12px;
  white-space: nowrap;
  width: min-content;
`;

export const NoticeTitleFont = styled.div`
  position: absolute;
  left : 12px;
  right: 10.11%;
  top: 39.6%;
  bottom: 36.63%;
  text-align: left;
  ${TEXT_STYLES.BodyM16}

  color:${COLORS.grayscale.Black};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
