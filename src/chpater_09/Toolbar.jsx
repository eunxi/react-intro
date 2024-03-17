// Toolbar 컴포넌트는 사용자의 로그인 여부를 나타내는 isLoggedIn 이라는 값을 props 로 받아서 조건부 렌더링을 사용하여 환영 메시지를 표시하거나
// 감추고 로그인 로그아웃 버튼을 보여주는 역할.

import React from "react";

const styles = {
    wrapper: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid grey",
    },
    greeting: {
        marginRight: 8,
    },
};

function Toolbar(props) {
    const {isLoggedIn, onClickLogin, onClickLogout} = props;

    return (
        <div style={styles.wrapper}>
            {isLoggedIn && <span style={styles.greeting}>환영합니다!</span>}

            {isLoggedIn ? (
                <button onClick={onClickLogout}>로그아웃</button>
            ) : (
                <button onClick={onClickLogin}>로그인</button>
            )}
        </div>
    )
}

export default Toolbar;