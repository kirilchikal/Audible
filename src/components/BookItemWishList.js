import React from "react";
import { Text, StyleSheet, Image, View, TouchableOpacity } from "react-native";
import Rating from "./Rating";

import { FontAwesome } from "@expo/vector-icons";

export default function BookItem(props) {
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
          <FontAwesome name="bookmark" size={36} color="#F56C26" />
        </TouchableOpacity>
        <Text style={styles.price}>${props.item.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#212236",
    height: 145,
    width: "100%",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 5,
    shadowColor: "#212236",
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
    color: "#F9F9F9",
    fontSize: 16,
    fontWeight: "500",
  },
  author: {
    color: "#F5AC39",
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
    color: "white",
    fontSize: 15,
  },
});
