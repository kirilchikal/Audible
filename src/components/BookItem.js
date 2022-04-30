import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import Rating from "./Rating";

export default function BookItem(props) {
  return (
    <View style={styles.item}>
      <Image style={styles.cover} source={{ uri: props.item.image_url }} />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {props.item.title}
        </Text>
        <Text style={styles.author}>{props.item.author}</Text>
        <View style={styles.rating}>
          <Rating rating={props.item.rating} />
        </View>
      </View>
      <View style={styles.priceContainer}>
        <Image
          style={{
            transform: props.item.audio ? [{ scale: 1 }] : [{ scale: 0 }],
          }}
          source={require("../../assets/audio.png")}
        />
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
    elevation: 3,
  },
  cover: {
    height: 125,
    width: 83,
    borderRadius: 5,
  },
  info: {
    height: "100%",
    width: "50%",
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
  priceContainer: {
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
