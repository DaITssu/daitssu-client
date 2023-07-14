import * as styles from './Status.styles';

interface StatusProps {
  label?: string;
  status: number;
  onClick?: () => void;
}

const Status = ({ label, status, onClick }: StatusProps) => (
  <styles.Status status={status} onClick={onClick}>
    {label}
  </styles.Status>
);

export default Status;
