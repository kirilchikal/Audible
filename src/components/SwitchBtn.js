import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../theme/ThemeContext";

export default function SwitchBtn(props) {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  return (
    <View style={styles.switch}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={props.toogleAudio}
        style={{
          flex: 1,
          backgroundColor: !props.isAudio ? colors.overlay : colors.accent,
          borderRadius: 35,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: !props.isAudio ? colors.accent : colors.ctaContrast,
            fontSize: 16,
          }}
        >
          Ebooks
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={props.toogleAudio}
        style={{
          flex: 1,
          backgroundColor: props.isAudio ? colors.overlay : colors.accent,
          borderRadius: 35,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: props.isAudio ? colors.accent : colors.ctaContrast,
            fontSize: 16,
          }}
        >
          Audiobooks
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const getStyles = (colors) => StyleSheet.create({
  switch: {
    height: 40,
    width: 348,
    backgroundColor: colors.accent,
    borderRadius: 35,
    flexDirection: "row",
    justifyContent: "center",
  },
});
