import React, { useMemo } from "react";
import { Text, StyleSheet, Image, View, TouchableOpacity } from "react-native";
import Rating from "./Rating";

import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "../theme/ThemeContext";

export default function BookItem(props) {
  const { colors } = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);

  const removeFavourite = () => {
    props.remove(props.item.id);
  };

  return (
    <View style={styles.item}>
      <Image style={styles.cover} source={{ uri: props.item.image_url }} />
      <Image
        style={{
          transform: props.item.audio ? [{ scale: 1 }] : [{ scale: 0 }],
          position: "absolute",
          top: 10,
          left: 12,
        }}
        source={require("../../assets/audio.png")}
      />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {props.item.title}
        </Text>

        <Text style={styles.author}>{props.item.author}</Text>
        <View style={styles.rating}>
          <Rating rating={props.item.rating} />
        </View>
      </View>
      <View style={styles.markContainer}>
        <TouchableOpacity style={styles.whishBtn} onPress={removeFavourite}>
          <FontAwesome name="bookmark" size={36} color={colors.cta} />
        </TouchableOpacity>
        <Text style={styles.price}>${props.item.price}</Text>
      </View>
    </View>
  );
}

const getStyles = (colors) => StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.surface,
    height: 145,
    width: "100%",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 5,
    shadowColor: colors.surface,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  cover: {
    height: 125,
    width: 83,
    borderRadius: 5,
  },
  info: {
    height: "100%",
    width: "60%",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "500",
  },
  author: {
    color: colors.accent,
    fontSize: 14,
  },
  rating: {
    width: 100,
  },
  markContainer: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: 10,
    alignItems: "flex-end",
  },
  price: {
    color: colors.textPrimary,
    fontSize: 15,
  },
});
