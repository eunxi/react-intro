// ThemeContext 로부터 현재 설정된 테마 값을 받아와 실제 화면의 컨텐츠를 렌데렁하는 역할을 한다.
// 테마 변경 버튼을 누를 경우 Theme Context 로부터 받은 toggle-theme 함수를 호출하여 Theme Context 의 값을 변경하는 역할도 한다.

import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContent(props) {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div
            style = {{
                width: "100vw",
                height: "100vh",
                padding: "1.5rem",
                backgroundColor: theme == "light" ? "white" : "black",
                color: theme == "light" ? "black" : "white",
            }}
        >
            <p>안녕하세요, 테마 변경이 가능한 웹 사이트 입니다.</p>
            <button onClick={toggleTheme}>테마 변경</button>
        </div>
    )
}

export default MainContent;