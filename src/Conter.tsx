import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const removeOne = () => {
    setCount((currentCount) => currentCount - 1);
  };
  const addOne = () => {
    setCount((currentCount) => currentCount + 1);
  };

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={removeOne}> - 1 </button>
      <button onClick={addOne}> + 1 </button>
    </div>
  );
}
