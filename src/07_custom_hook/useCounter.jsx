import React, {useState} from "react";

/**
 * 숫자, 1 증가함수, 1 감소함수를 반환해서 바로 사용할 수 있도록 해주는 훅.
 */
function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);

    const increaseCount = () => setCount((count) => count + 1);
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

    return [count, increaseCount, decreaseCount];
}

export default useCounter;