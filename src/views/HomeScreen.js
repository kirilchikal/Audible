import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

import BookCover from "../components/BookCover";
import { addBook } from "../redux/actions/book";
import { setCart } from "../redux/actions/cart";
import { addFavourite } from "../redux/actions/favourite";
import { useTheme } from "../theme/ThemeContext";

//FIREBASE HELPERS
function getBookTitle(documentSnapshot) {
  return documentSnapshot.get("title");
}
function getBookAudio(documentSnapshot) {
  return documentSnapshot.get("audio");
}
function getBookAuthor(documentSnapshot) {
  return documentSnapshot.get("author");
}
function getBookCategory(documentSnapshot) {
  return documentSnapshot.get("category");
}

function getBookDescription(documentSnapshot) {
  return documentSnapshot.get("description");
}

function getBookImage(documentSnapshot) {
  return documentSnapshot.get("image_url");
}

function getBookPrice(documentSnapshot) {
  return documentSnapshot.get("price");
}

function getBookRating(documentSnapshot) {
  return documentSnapshot.get("rating");
}

function getCartItems(documentSnapshot) {
  return documentSnapshot.get("items");
}

function getFavouriteBooks(documentSnapshot) {
  return documentSnapshot.get("books");
}
//FIREBASE HELPERS

export default function HomeScreen(props) {
  const dispatch = useDispatch();
  const { colors } = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);

  //FIREBASE
  const fetchBooks = async () => {
    const snapshot = await getDocs(collection(db, "Books"));
    snapshot.docs.forEach((item) => {
      const book = {};
      book.id = item.id;
      book.audio = getBookAudio(item);
      book.title = getBookTitle(item);
      book.author = getBookAuthor(item);
      book.category = getBookCategory(item);
      book.description = getBookDescription(item);
      book.price = getBookPrice(item);
      book.rating = getBookRating(item);
      book.image_url = getBookImage(item);

      dispatch(addBook(book));
    });
  };

  const fetchCart = async () => {
    const snapshot = await getDocs(collection(db, "Cart"));
    const carts = [];
    snapshot.docs.forEach((item) => {
      carts.push(getCartItems(item));
    });
    dispatch(setCart(carts[0] ?? []));
  };

  const fetchFavourite = async () => {
    const snapshot = await getDocs(collection(db, "Favourite"));
    const favourite = [];
    snapshot.docs.forEach((item) => {
      favourite.push(getFavouriteBooks(item));
    });
    favourite[0].forEach((bookId) => dispatch(addFavourite(bookId)));
  };

  useEffect(() => {
    fetchBooks();
    fetchFavourite();
    fetchCart();
  }, []);
  //FIREBASE END

  //redux
  const booksList = useSelector((state) => state.bookReducer.bookList);
  const authorsList = useSelector((state) => state.authorReducer.authorList);
  //

  const [load, setLoad] = useState(true);
  const [loadingCount, setLoadingCount] = useState(0);
  const plusLoad = useCallback(() => {
    setLoadingCount((count) => count + 1);
  }, []);
  const minusLoad = useCallback(() => {
    setLoadingCount((count) => {
      const next = count - 1;
      if (next <= 0) setLoad(false);
      return next;
    });
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ marginRight: 10 }}
      onPress={() => props.nav.navigate("BookDetailsScreen", { item })}
    >
      <BookCover book={item} plus={plusLoad} minus={minusLoad} />
    </TouchableOpacity>
  );
  const renderItem2 = ({ item }) => (
    <View style={{ alignItems: "center", marginRight: 30 }}>
      <Image
        style={{ borderRadius: 50, width: 70, height: 70 }}
        source={{ uri: item.imgUrl }}
      />
      <Text style={{ color: colors.textPrimary, fontSize: 10, fontWeight: "100" }}>
        {item.name}
      </Text>
    </View>
  );

  const books = props.isAudio
    ? booksList.filter((b) => b.audio === true)
    : booksList.filter((b) => b.audio === false);

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator
        size="large"
        color={colors.cta}
        animating={load ? true : false}
        style={styles.loader}
      />

      <ScrollView
        style={{
          transform: load ? [{ scale: 0 }] : [{ scale: 1 }],
        }}
      >
        <View style={styles.horizontal}>
          <Text style={styles.scrollTitle}>Best sellers</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={styles.list}
            horizontal={true}
            data={books}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={styles.horizontal}>
          <Text style={styles.scrollTitle}>New</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={styles.list}
            horizontal={true}
            data={[...books].reverse()}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={styles.horizontal}>
          <Text style={styles.scrollTitle}>Popular authors</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={styles.list}
            horizontal={true}
            data={authorsList}
            renderItem={renderItem2}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const getStyles = (colors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  list: {
    paddingVertical: 12,
  },
  horizontal: {
    marginHorizontal: 8,
    marginTop: 10,
  },
  scrollTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.textPrimary,
    marginLeft: 15,
  },
  loader: {
    position: "absolute",
    left: "45%",
    top: "40%",
  },
});
