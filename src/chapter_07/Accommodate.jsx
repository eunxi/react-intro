import { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    // 컴포넌트가 mount 된 직후에 호출되며, 이후 컴포넌트가 update 될 때마다 호출.
    // 호출된 이유? 컴포넌트가 update 됐기 떼문.
    useEffect(() => {
        console.log("========================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    });

    // 컴포넌트가 mount 된 직후에 호출되며, 이후 카운트 값이 바뀔 때마다 호출되는데 이때 용량이 가득 찼는지 아닌지의 상태를 isFull 이라는 state 에 저장.
    // 호출된 이유? count 값이 변경 됐기 때문.
    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div style={{padding: 16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{color: "red"}}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accommodate;