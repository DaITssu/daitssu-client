import { NAV_INFO } from './NavInfo';
import * as styles from './NavigationBar.style';
import Link from 'next/link';
import Image from 'next/image';

type NavListType = keyof typeof NAV_INFO;

interface NavItemProps {
  type: NavListType;
  isFocused?: boolean;
}

const NavItem = ({ type, isFocused }: NavItemProps) => {
  const { url, icon: Icon } = NAV_INFO[type];

  return (
    <styles.IconContainer>
      <Link href={url}>
        {isFocused ? (
          <Image src={Icon.active} width={24} height={24} alt="active" />
        ) : (
          <Image src={Icon.default} width={24} height={24} alt="default" />
        )}
      </Link>
    </styles.IconContainer>
  );
};

export default NavItem;
