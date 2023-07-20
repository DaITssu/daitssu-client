import React from "react";
import "./MonthControlButton.css"; // CSS 파일을 import

const MonthControlButton = ({ day, onClick }: { day: string; onClick: () => void }) => {
  // day는 버튼에 표시할 요일 정보를 받아오고, onClick은 버튼 클릭 시 호출할 함수를 받아옵니다.

  return (
    <button className="custom-button" onClick={onClick}>
      {day}
    </button>
  );
};

export default MonthControlButton;