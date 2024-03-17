// TemperatureInput 컴포넌트를 사용하여 섭씨와 화씨 두 가지의 입력 양식을 제공한다.
// 또한 모든 온도를 섭씨로 변환하여 BoilingVerdict 컴포넌트에 전달해줌으로써 물이 끓는지 아닌지를 출력해준다.

import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓습니다.</p>
    }
    return <p>물이 끓지 않습니다.</p>
}

// 온도 변환 함수.
function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return "";
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculator(props) {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("C");

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    };

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    };

    const celsius = scale == "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale == "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            <TemperatureInput
                scale = "c"
                temperature = {celsius}
                onTemperatureChange = {handleCelsiusChange}
            />
            <TemperatureInput
                scale = "f"
                temperature = {fahrenheit}
                onTemperatureChange = {handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}

export default Calculator;