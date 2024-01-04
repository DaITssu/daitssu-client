import styled from '@emotion/styled';
import { TEXT_STYLES } from '@/styles/constants/textStyles';
export const SummaryBox = styled.div`
  width: 100%;
  height: 264px;
  padding: 16px 24px;
  background: #ffffff;
`;
export const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  ${TEXT_STYLES.HeadM20};
  left: 0px;
`;
export const MoreButton = styled.div`
  ${TEXT_STYLES.CapR14};
  color: #6e6e6e;
  margin-top: 4px;
  display: flex;
  align-items: center;
`;

export const TextBox = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 170px;
  margin-top: 16px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
`;

export const Line = styled.div<{ top: string }>`
  width: 100%;
  height: 1px;
  top: ${(props) => props.top};
  position: absolute;
  background-color: #d9d9d9;
`;

export const TextLine = styled.div<{ top: string }>`
  display: flex;
  width: 100%;
  position: absolute;
  // margin : 0px 12px;
  top: ${(props) => props.top};
  box-sizing: border-box;
`;

export const TextSummary = styled.div`
  ${TEXT_STYLES.BodyM16};
  white-space: nowrap;
  overflow: hidden;
  display: auto;
  text-overflow: ellipsis;
  padding-right: 50px;
  padding-left: 12px;
`;

export const Date = styled.div`
  ${TEXT_STYLES.CapR14};
  color: #6e6e6e;
  position: absolute;
  right: 12px;
`;
