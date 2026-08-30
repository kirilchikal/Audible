import React from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "../theme/ThemeContext";

export default function UserButton({ navigation }) {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("UserScreen")}
      hitSlop={10}
    >
      <FontAwesome name="user-circle-o" size={24} color={colors.textPrimary} />
    </TouchableOpacity>
  );
}
