import React from "react";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "../theme/ThemeContext";

const STAR_SIZE = 20;

export default function Rating(props) {
  const { colors } = useTheme();
  const rating = Number(props.rating) || 0;
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <MaterialIcons key={`full-${i}`} name="star" size={STAR_SIZE} color={colors.accent} />
      ))}
      {hasHalf && (
        <MaterialIcons key="half" name="star-half" size={STAR_SIZE} color={colors.accent} />
      )}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <MaterialIcons key={`empty-${i}`} name="star-border" size={STAR_SIZE} color={colors.tabInactive} />
      ))}
    </View>
  );
}
