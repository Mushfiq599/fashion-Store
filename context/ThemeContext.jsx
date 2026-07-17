"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { themes, defaultTheme } from "@/lib/themes";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
    const [themeId, setThemeId] = useState(defaultTheme.id);

    useEffect(() => {
        const saved = localStorage.getItem("threadhouse-theme");
        if (saved) setThemeId(saved);
    }, []);

    useEffect(() => {
        const theme = themes.find((t) => t.id === themeId) || defaultTheme;
        document.documentElement.style.setProperty("--accent", theme.color);
        document.documentElement.style.setProperty("--accent-soft", theme.soft);
        localStorage.setItem("threadhouse-theme", themeId);
    }, [themeId]);

    return (
        <ThemeContext.Provider value={{ themeId, setThemeId, themes }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used inside a ThemeProvider");
    }
    return context;
}