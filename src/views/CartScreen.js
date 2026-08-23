import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";

import BookItemCart from "../components/BookItemCart";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../redux/actions/cart";
import { db } from "../../firebase";
import { doc, updateDoc, arrayRemove } from "firebase/firestore";
import { useTheme } from "../theme/ThemeContext";

export default function CartScreen({ navigation }) {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  //Redux
  const removeFromCartFB = async (key) => {
    console.log(key);
    const cartRef = doc(db, "Cart", "0");
    await updateDoc(cartRef, {
      books: arrayRemove(key),
    });
  };

  const cartList = useSelector((state) => state.cartReducer.cartList);
  const booksList = useSelector((state) => state.bookReducer.bookList);
  const books = booksList.filter((book) => cartList.includes(book.id));

  //Dispatcher
  const dispatch = useDispatch();
  const removeFromCart = (key) => {
    dispatch(deleteCart(key));
    removeFromCartFB(key);
  };
  //

  const renderBook = ({ item }) => (
    <TouchableOpacity
      style={{ marginBottom: 10 }}
      onPress={() => navigation.navigate("BookDetailsScreen", { item })}
    >
      <BookItemCart item={item} remove={removeFromCart}></BookItemCart>
    </TouchableOpacity>
  );

  const countSum = () => {
    return books
      .map((book) => book.price)
      .reduce((prev, curr) => prev + curr, 0);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/emptyCart.png")}
        style={{
          transform: books.length == 0 ? [{ scale: 1 }] : [{ scale: 0 }],
          width: 175,
          height: 140,
          position: "absolute",
          top: "30%",
          left: "28%",
        }}
      ></Image>
      <FlatList
        style={styles.list}
        data={books}
        renderItem={renderBook}
        keyExtractor={(item) => item.id}
      />
      <View
        style={[
          styles.purchase,
          { transform: books.length == 0 ? [{ scale: 0 }] : [{ scale: 1 }] },
        ]}
      >
        <TouchableOpacity>
          <Text style={styles.payBtn}>Pay now</Text>
        </TouchableOpacity>
        <View style={styles.totalPrice}>
          <Text style={styles.total}>Total</Text>
          <Text numberOfLines={1} style={styles.suma}>
            ${Math.round(countSum() * 100) / 100}
          </Text>
        </View>
      </View>
    </View>
  );
}

const getStyles = (colors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  list: {
    padding: 10,
  },
  purchase: {
    display: "flex",
    flexDirection: "row",
    margin: 15,
    backgroundColor: colors.surface,
    borderRadius: 5,
    padding: "5%",
    justifyContent: "space-between",
  },
  payBtn: {
    color: colors.ctaContrast,
    fontSize: 20,
    backgroundColor: colors.cta,
    paddingVertical: "3%",
    paddingHorizontal: "10%",
    borderRadius: 5,
    overflow: "hidden",
  },
  totalPrice: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  total: {
    color: colors.textPrimary,
    fontSize: 12,
  },
  suma: {
    color: colors.textPrimary,
    fontSize: 22,
    fontWeight: "bold",
  },
});
