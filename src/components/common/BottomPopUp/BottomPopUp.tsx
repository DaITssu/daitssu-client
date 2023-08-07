import { useState, useEffect } from 'react';
import * as styles from './BottomPopUp.style';

interface BottomPopUpProps {
  label?: string;
}

const BottomPopUp = ({ label }: BottomPopUpProps) => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {showPopup && (
        <styles.BottomPopUp>
          <p>{label}</p>
        </styles.BottomPopUp>
      )}
    </>
  );
};

export default BottomPopUp;
