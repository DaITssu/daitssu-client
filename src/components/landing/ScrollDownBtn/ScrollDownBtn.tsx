import * as styles from './ScrollDownBtn.style';
import Image from 'next/image';
import LandingBackArrow from '@icons/icon/Arrow/LandingBackArrow.svg';

//TODO: 버튼 클릭시 아래로 스크롤
const ScrollDownBtn = () => {
  return (
    <styles.StyledScrollDownBtn>
      <Image
        src={LandingBackArrow.src}
        alt="스크롤 내리기 버튼"
        width={50}
        height={50}
      />
    </styles.StyledScrollDownBtn>
  );
};

export default ScrollDownBtn;
