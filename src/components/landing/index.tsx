import * as styles from './Landing.styles';
import Image from 'next/image';
import LandingLogo from './LandingLogo/LandingLogo';
import BackgroundImg from '@images/landing_background.png';

const Landing = () => {
  return (
    <styles.LandingLayout>
      <Image
        src={BackgroundImg.src}
        alt="배경 이미지"
        fill
        style={{ objectFit: 'cover', top: 0 }}
      />
      <LandingLogo />
    </styles.LandingLayout>
  );
};

export default Landing;
