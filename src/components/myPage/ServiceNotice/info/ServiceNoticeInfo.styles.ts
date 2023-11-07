import styled from '@emotion/styled';

export const Container = styled.div`
  width: 390px;
  height : 797px;
  hr {
    border: solid 1px rgba(217, 217, 217, 1);
  }
  background-color : #ffffff;
  
`;

export const MenuBox = styled.div`
  display: flex;
  height: 46px;
  align-items : center;
 
`;

export const LeftBox = styled.div`
  padding-left : 15px;
  position: absolute;
`;

export const CenterBox = styled.div`
  font-size: 20px;
  margin: auto;
  font-weight: 500;
 
`;

export const InfoBox = styled.div`
  padding: 16px;
`;

export const TypeBox = styled.div`
  margin: 0px 0 10px;
  text-decoration: underline;
  text-underline-position: under;
  font-size: 14px;
  color: rgba(49, 49, 49, 1);
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
  font-size: 20px;
  margin-bottom: 10px;
  line-height: 30px;
`;

export const DateBox = styled.div`
  display: flex;
  text-align: center;
  font-size: 14px;
  span {
    margin-left: 5px;
    text-align: center;
    display: flex;
    align-items: center;
    color: rgba(110, 110, 110, 1);
  }
`;

export const WatchBox = styled.div`
  margin-left: 15px;
  display: flex;
  text-align: center;
  font-size: 14px;
  span {
    text-align: center;
    display: flex;
    align-items: center;
    color: rgba(110, 110, 110, 1);
  }
`;

export const ContentBox = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;




export const FileIconBox = styled.div``;

export const FileTitleBox = styled.div`
  font-size: 16px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  font-weight: 500;
`;
