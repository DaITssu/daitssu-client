import { NAV_LIST } from './Navigation';
import * as styles from './NavigationBar.style';
import NavItem from './NavItem';

interface NavigationBarProps {
  focusType: keyof typeof NAV_LIST;
  render: boolean;
}

const NavigationBar = ({ focusType, render }: NavigationBarProps) => {
  return (
    <>
      <styles.Navigaton render={render}>
        <NavItem
          type={NAV_LIST.ANNOUNCEMENT}
          isFocused={focusType === NAV_LIST.ANNOUNCEMENT}
        />
        <NavItem
          type={NAV_LIST.COMMUNITY}
          isFocused={focusType === NAV_LIST.COMMUNITY}
        />
        <NavItem type={NAV_LIST.HOME} isFocused={focusType === NAV_LIST.HOME} />
        <NavItem
          type={NAV_LIST.CALENDAR}
          isFocused={focusType === NAV_LIST.CALENDAR}
        />

        <NavItem
          type={NAV_LIST.MY_PAGE}
          isFocused={focusType === NAV_LIST.MY_PAGE}
        />
      </styles.Navigaton>
    </>
  );
};

export default NavigationBar;
