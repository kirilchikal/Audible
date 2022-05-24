import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function SwitchBtn(props) {
  return (
    <View style={styles.switch}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={props.toogleAudio}
        style={{
          flex: 1,
          backgroundColor: !props.isAudio ? "rgba(255,255,255,0.9)" : "#F5A932",
          borderRadius: 35,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: !props.isAudio ? "#F5A932" : "white",
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
          backgroundColor: props.isAudio ? "rgba(255,255,255,0.9)" : "#F5A932",
          borderRadius: 35,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: props.isAudio ? "#F5A932" : "white",
            fontSize: 16,
          }}
        >
          Audiobooks
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  switch: {
    height: 40,
    width: 348,
    backgroundColor: "#F5A932",
    borderRadius: 35,
    flexDirection: "row",
    justifyContent: "center",
  },
});
