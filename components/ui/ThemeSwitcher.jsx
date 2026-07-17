"use client";

import { useState, useRef, useEffect } from "react";
import { FiDroplet } from "react-icons/fi";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeSwitcher() {
    const { themeId, setThemeId, themes } = useTheme();
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div style={{ position: "relative" }} ref={ref}>
            <button
                onClick={() => setOpen(!open)}
                style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#333",
                    display: "flex",
                    alignItems: "center",
                }}
                aria-label="Choose theme color"
            >
                <FiDroplet size={19} />
            </button>

            {open && (
                <div
                    style={{
                        position: "absolute",
                        top: "32px",
                        right: 0,
                        background: "#fff",
                        border: "1px solid #eee",
                        borderRadius: "10px",
                        padding: "12px",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                        display: "flex",
                        gap: "10px",
                        zIndex: 60,
                    }}
                >
                    {themes.map((theme) => (
                        <button
                            key={theme.id}
                            onClick={() => {
                                setThemeId(theme.id);
                                setOpen(false);
                            }}
                            title={theme.name}
                            style={{
                                width: "28px",
                                height: "28px",
                                borderRadius: "50%",
                                background: theme.color,
                                border:
                                    theme.id === themeId
                                        ? "2px solid #333"
                                        : "2px solid transparent",
                                outline: theme.id === themeId ? "1px solid #333" : "none",
                                outlineOffset: "2px",
                                cursor: "pointer",
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}