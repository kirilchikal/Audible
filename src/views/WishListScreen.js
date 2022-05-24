import { useSelector } from "react-redux";
import React from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import BookItemWishList from "../components/BookItemWishList";
import { useDispatch } from "react-redux";
import { deleteFavourite } from "../redux/actions/favourite";
import { db } from "../../firebase";
import { doc, updateDoc, arrayRemove } from "firebase/firestore";

export default function WishListScreen({ navigation }) {
  //Redux
  const favouriteList = useSelector(
    (state) => state.favouriteReducer.favouriteList
  );
  const booksList = useSelector((state) => state.bookReducer.bookList);
  const books = booksList.filter((book) => favouriteList.includes(book.id));

  const removeFromFavouriteFB = async (key) => {
    console.log(key);
    const cartRef = doc(db, "Favourite", "0");
    await updateDoc(cartRef, {
      books: arrayRemove(key),
    });
  };
  //Dispatcher
  const dispatch = useDispatch();
  //Changed by redux
  const removeFromFavourite = (key) => {
    dispatch(deleteFavourite(key));
    removeFromFavouriteFB(key);
  };
  //

  const renderBook = ({ item }) => (
    <TouchableOpacity
      style={{ marginBottom: 10 }}
      onPress={() => navigation.navigate("BookDetailsScreen", { item })}
    >
      <BookItemWishList
        item={item}
        remove={removeFromFavourite}
      ></BookItemWishList>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={books}
        renderItem={renderBook}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333447",
  },
  list: {
    padding: 10,
  },
});
