import { useState } from 'react';

// 재사용하지 않고 해당 페이지에서만 사용하는 로직이 있다면 가독성을 위해 이렇게 별도의 파일로 분리할 수 있습니다.
const useTestCount = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return { count, increment, decrement };
};

export default useTestCount;
