import styled from '@emotion/styled';

export const LoaderContainer = styled.div<{ size?: number }>`
  width: ${(props) => (props.size ? `${props.size}px` : '80px')};
  height: ${(props) => (props.size ? `${props.size}px` : '80px')};
  animation: loader 1s infinite linear;
  @keyframes loader {
    100% {
      transform: rotate(1turn);
    }
  }
`;
