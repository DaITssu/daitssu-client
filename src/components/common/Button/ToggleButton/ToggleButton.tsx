import * as styles from './ToggleButton.styles';

export interface ToggleButtonProps {
  isToggle: boolean;
  onToggle: () => void;
}

const ToggleButton = ({ isToggle, onToggle }: ToggleButtonProps) => (
  <styles.ToggleSwitch onClick={onToggle}>
    <styles.HiddenCheckbox checked={isToggle} onChange={() => {}} />
    <styles.Switch isChecked={isToggle} />
  </styles.ToggleSwitch>
);

export default ToggleButton;
