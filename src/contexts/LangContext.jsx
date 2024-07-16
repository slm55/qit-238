import { useState, createContext, useEffect } from "react";

const LangContext = createContext();
export default LangContext;

export function LangProvider({ children }) {
    const [lang, setLang] = useState("en");

    useEffect(() => {
        const storedLang = localStorage.getItem("lang");
        if (storedLang) {
            setLang(storedLang);
        }
    }, [])

    function changeLang(newLang) {
        setLang(newLang);
        localStorage.setItem("lang", newLang);
    }

    return (
        <LangContext.Provider value={{ lang, changeLang }}>
            {children}
        </LangContext.Provider>
    );
}