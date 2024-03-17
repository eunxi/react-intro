// useState() 이용해서 사용자의 로그인 여부를 자체적으로 관리한다.
// 그리고 이 값을 ToolBar 컴포넌트에 전달하여 로그인 여부에 따라 ToolBar 에 적절한 사용자 인터페이스가 표시되도록 한다.

import React, { useState } from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    };

    const onClickLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            <Toolbar
                isLoggedIn = {isLoggedIn}
                onClickLogin = {onClickLogin}
                onClickLogout = {onClickLogout}
            />
            <div style={{padding: 16}}>은지와 함께하는 리액트 공부! 핵어렵!</div>
        </div>
    )
}

export default LandingPage;