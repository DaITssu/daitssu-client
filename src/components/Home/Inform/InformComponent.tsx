import * as styles from './Inform.style';
import { ReactNode } from 'react';

interface ICProps {
  icon: ReactNode;
  type: '학부' | '장학' | 'none';
  title: string;
  time: number;
  detail: string;
}

export const InformComponent = ({
  icon,
  type,
  title,
  time,
  detail,
}: ICProps) => {
  return (
    <styles.ComponentContainer>
      <styles.LeftBox>{icon}</styles.LeftBox>
      <styles.RightBox>
        <styles.RightTopBox>
          <styles.TypeBox type={type}>
            {type === 'none' ? ' ' : type}
          </styles.TypeBox>
          <styles.TitleBox>{title}</styles.TitleBox>
          <styles.TimeBox>{time}분 전</styles.TimeBox>
        </styles.RightTopBox>
        <styles.RightBottomBox>{detail}</styles.RightBottomBox>
      </styles.RightBox>
    </styles.ComponentContainer>
  );
};
