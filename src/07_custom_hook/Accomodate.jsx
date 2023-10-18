import React, {useState, useEffect} from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accomodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0); // 커스텀 훅 사용.

    // 의존성 배열을 생략해서 컴포넌트가 업데이트 될 떄 마다 실행.
    useEffect(() => {
        console.log("========================");
        console.log("useEffect() is called.");
        console.log(`isFull : ${isFull}`);
    });

    // count 변수에 변경이 생기면 실행하는 이펙트.
    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div style={{padding: 16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{ color: "red" }}>정원이 가득 찼습니다.</p>}
        </div>
    );
}

export default Accomodate;