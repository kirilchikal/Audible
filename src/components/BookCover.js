import React, { useMemo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { useTheme } from "../theme/ThemeContext";

function BookCover(props) {
  const { colors } = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);
  return (
    <View style={styles.book}>
      <View>
        <Image
          style={styles.cover}
          source={{ uri: props.book.image_url }}
          onLoadStart={props.plus}
          onLoadEnd={props.minus}
        />
        <Image
          style={{
            position: "absolute",
            margin: 3,
            transform: props.book.audio ? [{ scale: 1 }] : [{ scale: 0 }],
          }}
          source={require("../../assets/audio.png")}
        />
      </View>
      <Text numberOfLines={1} style={styles.title}>
        {props.book.title}
      </Text>
      <Text numberOfLines={1} style={styles.author}>
        by {props.book.author}
      </Text>
    </View>
  );
}

export default React.memo(BookCover);

const getStyles = (colors) => StyleSheet.create({
  book: {
    width: 129,
    height: 199,
    backgroundColor: colors.surface,
    alignItems: "center",
    paddingTop: 10,
    borderRadius: 5,
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 3,
  },
  cover: {
    width: 100,
    height: 154,
    borderRadius: 5,
  },
  title: {
    color: colors.textPrimary,
    opacity: 0.7,
    fontSize: 10,
    marginHorizontal: 15,
    marginTop: 3,
    fontWeight: "300",
  },
  author: {
    color: colors.accent,
    fontSize: 8,
    fontWeight: "700",
    paddingHorizontal: 15,
  },
});
