// MainContent 컴포넌트를 자식으로 갖고 있는데, 이를 theme-context.provider 로 감싸서 theme-context 의 값을 하위 컴포넌트들이 사용할 수 있도록 해준다.

import { useCallback, useState } from "react"
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

function DarkOrLight(props) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = useCallback(() => {
        if (theme == "light") {
            setTheme("dark");
        } else if (theme == "dark") {
            setTheme("light");
        }
    }, [theme])
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <MainContent />
        </ThemeContext.Provider>
    )
}

export default DarkOrLight;