import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { palettes } from "./tokens";

const STORAGE_KEY = "audible.themeMode";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const systemScheme = useColorScheme();
  const [mode, setMode] = useState("system");

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((saved) => {
      if (saved === "light" || saved === "dark") setMode(saved);
    });
  }, []);

  const colorScheme = mode === "system" ? systemScheme ?? "dark" : mode;
  const colors = palettes[colorScheme];

  const setThemeMode = (nextMode) => {
    setMode(nextMode);
    AsyncStorage.setItem(STORAGE_KEY, nextMode);
  };

  const toggleTheme = () => {
    setThemeMode(colorScheme === "dark" ? "light" : "dark");
  };

  const navigationTheme = useMemo(() => {
    const base = colorScheme === "dark" ? DarkTheme : DefaultTheme;
    return {
      ...base,
      dark: colorScheme === "dark",
      colors: {
        ...base.colors,
        primary: colors.accent,
        background: colors.background,
        card: colors.surface,
        text: colors.textPrimary,
        border: colors.surfaceAlt,
      },
    };
  }, [colorScheme, colors]);

  const value = { mode, colorScheme, colors, setThemeMode, toggleTheme, navigationTheme };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
