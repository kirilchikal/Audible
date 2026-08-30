import React, { useMemo } from "react";
import { Text, StyleSheet, Image, View, TouchableOpacity } from "react-native";
import { useTheme } from "../theme/ThemeContext";

export default function BookItem(props) {
  const { colors } = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);

  const increment = () => {
    props.onIncrement(props.item.id);
  };
  const decrement = () => {
    props.onDecrement(props.item.id);
  };

  return (
    <View style={styles.item}>
      <Image style={styles.cover} source={{ uri: props.item.image_url }} />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {props.item.title}
        </Text>
        <Text style={styles.author}>{props.item.author}</Text>
        <View style={styles.rating}>
          <Text style={styles.price}>${props.item.price}</Text>
        </View>
      </View>
      <View style={styles.removeContainer}>
        <Image
          style={{
            transform: props.item.audio ? [{ scale: 1 }] : [{ scale: 0 }],
          }}
          source={require("../../assets/audio.png")}
        />
        <View style={styles.stepper}>
          <TouchableOpacity style={styles.stepperBtn} onPress={decrement} hitSlop={8}>
            <Text style={styles.stepperBtnText}>−</Text>
          </TouchableOpacity>
          <Text style={styles.qty}>{props.qty}</Text>
          <TouchableOpacity style={styles.stepperBtn} onPress={increment} hitSlop={8}>
            <Text style={styles.stepperBtnText}>+</Text>
          </TouchableOpacity>
        </View>
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
    width: "50%",
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
  removeContainer: {
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
  stepper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.cta,
    borderRadius: 5,
    overflow: "hidden",
  },
  stepperBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  stepperBtnText: {
    color: colors.ctaContrast,
    fontSize: 16,
    fontWeight: "700",
  },
  qty: {
    color: colors.ctaContrast,
    fontSize: 14,
    fontWeight: "600",
    minWidth: 18,
    textAlign: "center",
  },
});
