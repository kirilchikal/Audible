import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "../theme/ThemeContext";

export default function ThemeToggleButton() {
  const { colorScheme, toggleTheme, colors } = useTheme();

  return (
    <TouchableOpacity onPress={toggleTheme} hitSlop={10}>
      <Feather
        name={colorScheme === "dark" ? "sun" : "moon"}
        size={22}
        color={colors.textPrimary}
      />
    </TouchableOpacity>
  );
}
