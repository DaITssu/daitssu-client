import styled from '@emotion/styled';
import { TEXT_STYLES } from '@/styles/constants/textStyles';
import { COLORS } from '@/styles/constants/colors';

export const EditProfileAppbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${TEXT_STYLES.HeadM20};
`;

export const TitleText = styled.p`
  ${TEXT_STYLES.HeadM20};
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SubscribeList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  align-items: flex-start;
  width: 100%;
`;

export const Category = styled.div`
  display: flex;
  padding: 7px 12px;
  margin: 5px 5px;
  color: ${COLORS.SSU.primary};
  ${TEXT_STYLES.CapM14};
  border: 1px solid ${COLORS.SSU.primary};
  border-radius: 50px;
`;

interface SelectableCategoryProps {
  selected: boolean;
  onClick: () => void;
}

export const selectableCategory = styled.div<SelectableCategoryProps>`
  display: flex;
  padding: 7px 10px;
  margin: 5px 5px;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.selected ? COLORS.SSU.primary : COLORS.grayscale.Gray1};
  ${TEXT_STYLES.CapM14};
  border: 1px solid
    ${(props) => (props.selected ? COLORS.SSU.primary : COLORS.grayscale.Gray1)};
  border-radius: 50px;
  cursor: pointer;
`;

export const finishButton = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  margin-top: 10px;
  background-color: ${COLORS.SSU.primary};
  color: ${COLORS.grayscale.white};
  ${TEXT_STYLES.HeadM18};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const DepartmentListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${COLORS.grayscale.Gray4};
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
`;

interface DepartmentListComponentProps {
  selected: boolean;
  onClick: () => void;
}

export const DepartmentListComponent = styled.div<DepartmentListComponentProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  ${TEXT_STYLES.CapM14};
  color: ${(props) =>
    props.selected ? COLORS.SSU.primary : COLORS.grayscale.Gray1};
  cursor: pointer;
`;

export const DepartmentList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  width: 100%;
`;

export const Department = styled.div`
  display: flex;
  ${TEXT_STYLES.CapM14};
  padding: 20px 0px;
  border-bottom: 1px solid ${COLORS.grayscale.Gray4};
  width: 100%;
`;
