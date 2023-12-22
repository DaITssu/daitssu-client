import Image from 'next/image';
import * as styled from './Loader.style';
import loaderImg from '@images/loader.png';

interface SpinnerProps {
  size?: number;
}

const Loader = ({ size }: SpinnerProps) => {
  return (
    <styled.LoaderContainer size={size}>
      <Image src={loaderImg} width={size || 80} alt="로딩 중" />
    </styled.LoaderContainer>
  );
};

export default Loader;
