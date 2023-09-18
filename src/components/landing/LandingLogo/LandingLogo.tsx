import * as styles from './LandingLogo.style';
import LandingLogoImg from '@icons/logo/landing_logo.png';

const LandingLogo = () => {
  return (
    <styles.LogoContainer>
      <styles.LogoImg src={LandingLogoImg.src} alt="다잇슈 로고" />
    </styles.LogoContainer>
  );
};

export default LandingLogo;
