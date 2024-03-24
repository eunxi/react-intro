// Context 의 초기 값을 별도로 설정하지 않았고, 이후 Provider 에서 값을 설정할 예정.

import React from "react";

const ThemeContext = React.createContext();

ThemeContext.displayName = "ThemeContext";

export default ThemeContext;