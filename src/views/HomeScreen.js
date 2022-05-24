import React, { useState, useEffect } from "react";
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

import BookCover from "../components/BookCover";
import { addBook } from "../redux/actions/book";
import { addCart } from "../redux/actions/cart";
import { addFavourite } from "../redux/actions/favourite";

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

function getCartBooks(documentSnapshot) {
  return documentSnapshot.get("books");
}

function getFavouriteBooks(documentSnapshot) {
  return documentSnapshot.get("books");
}
//FIREBASE HELPERS

export default function HomeScreen(props, { navigation }) {
  const dispatch = useDispatch();

  //FIREBASE
  const fetchBooks = async () => {
    const response = db.collection("Books");
    const data = await response.get();
    data.docs.forEach((item) => {
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
    const response = db.collection("Cart");
    const data = await response.get();
    const carts = [];
    data.docs.forEach((item) => {
      carts.push(getCartBooks(item));
    });
    carts[0].forEach((bookId) => dispatch(addCart(bookId)));
  };

  const fetchFavourite = async () => {
    const response = db.collection("Favourite");
    const data = await response.get();
    const favourite = [];
    data.docs.forEach((item) => {
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
  const plusLoad = () => {
    setLoadingCount(loadingCount + 1);
  };
  const minusLoad = () => {
    setLoadingCount(loadingCount - 1);
    if (loadingCount <= 1) setLoad(false);
  };

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
      <Text style={{ color: "white", fontSize: 10, fontWeight: "100" }}>
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
        color="#F56C26"
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333447",
  },
  list: {
    paddingVertical: 12,
  },
  horizontal: {
    marginHorizontal: 8,
    marginTop: 10,
  },
  scrollTitle: {
    fontSize: 20,
    color: "white",
    marginLeft: 15,
  },
  loader: {
    position: "absolute",
    left: "45%",
    top: "40%",
  },
});
