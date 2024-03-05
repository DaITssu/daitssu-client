import * as styles from './Landing.styles';
import Image from 'next/image';

import LandingLogo from './LandingLogo/LandingLogo';
import BackgroundImg from '@images/landing_background.png';

import AuthContent from './AuthContent/AuthContent';
import ScrollDownBtn from './ScrollDownBtn/ScrollDownBtn';

const Landing = () => {
  return (
    <styles.LandingLayout>
      <Image
        src={BackgroundImg.src}
        alt="배경 이미지"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      <LandingLogo />
      <AuthContent />
    </styles.LandingLayout>
  );
};

export default Landing;
