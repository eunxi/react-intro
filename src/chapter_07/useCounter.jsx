// useCounter() Custom Hook 만들기

const { useState } = require("react");

function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);

    const increaseCount = () => setCount((count) => count + 1);
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

    return [count, increaseCount, decreaseCount];
}

export default useCounter;

// useCounter() 사용하는 accommodate 함수 컴포넌트 만들기