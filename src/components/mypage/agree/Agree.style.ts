import styled from '@emotion/styled';

export const FlexBox = styled.div`
  background-color: white;
`;

export const TopBox = styled.div``;

export const MiddleBox = styled.div`
  background-color: #f9f9f9;
  height: 20px;
`;

export const BottomBox = styled.div``;

export const ContainBox = styled.div`
  display: flex;
  padding: 12px 15px;
`;

export const CheckBox = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

export const TypeBox = styled.div<{ type: string }>`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 16px;

  color: ${(props) => (props.type === 'compulsory' ? '#F36262' : '#BDBDBD')};
  margin-right: ${(props) => (props.type === 'none' ? '' : '5px')};
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 16px;
`;

export const ArrowBox = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`;

export const InfoBox = styled.div`
  padding: 15px;
  font-size: 12px;
  color: #f36262;
  p {
    margin-top: 2px;
  }
`;

export const FinishButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
