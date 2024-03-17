import { COLORS } from '@/styles/constants/colors';
import styled from '@emotion/styled';

export const Navigaton = styled.div<{ render: boolean }>`
  height: 100px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.grayscale.white};
  display: ${(props) => (props.render ? 'flex' : 'none')};

  /* @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  } 
  animation: fadeInUp 0.5s; */
`;

export const IconContainer = styled.div``;
