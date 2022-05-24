import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Button,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";

import BookItem from "../components/BookItem";
import { useSelector, useDispatch } from "react-redux";
//import bookList from "../Data/bookList";
import categoryList from "../Data/categoryList";

export default function SearchScreen({ nav }) {
  const bookList = [...useSelector((state) => state.bookReducer.bookList)];

  const [selectedCategory, setCategory] = useState("");
  const [books, setBooks] = useState(bookList);
  const [search, setSearch] = useState("");
  const [clicked, setClicked] = useState(false);

  const changeCategory = (name) => {
    if (selectedCategory !== name) {
      setBooks(bookList.filter((b) => b.category === name));
      setCategory(name);
    } else {
      setBooks(bookList);
      setCategory("");
    }
  };

  const searchFilterFunction = (text) => {
    setSearch(text);
    if (text === "") {
      if (selectedCategory === "") setBooks(bookList);
      else setBooks(bookList.filter((b) => b.category === selectedCategory));
    } else {
      setBooks(bookList.filter((b) => b.category === selectedCategory));
      setBooks(
        books.filter((b) => b.title.toLowerCase().includes(text.toLowerCase()))
      );
    }
  };

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.category,
        {
          backgroundColor:
            selectedCategory === item.name ? "#FFFAF3" : "#F56C26",
        },
      ]}
      onPress={() => changeCategory(item.name)}
    >
      <Text
        style={[
          styles.categoryName,
          { color: selectedCategory === item.name ? "#F56C26" : "white" },
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const renderBook = ({ item }) => (
    <TouchableOpacity
      style={{ marginBottom: 10 }}
      onPress={() => nav.navigate("BookDetailsScreen", { item })}
    >
      <BookItem item={item}></BookItem>
    </TouchableOpacity>
  );

  return (
    <View style={{ backgroundColor: "#333447", height: "100%" }}>
      <View style={styles.search}>
        <View
          style={
            clicked ? styles.searchBar_clicked : styles.searchBar_unclicked
          }
        >
          <Ionicons name="search-sharp" size={24} color="#E9E9EB" />
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => searchFilterFunction(text)}
            value={search}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
            placeholderTextColor={"#807D7D"}
            onFocus={() => {
              setClicked(true);
            }}
          />
          {clicked && (
            <Entypo
              name="cross"
              size={20}
              color="white"
              style={{ padding: 1 }}
              onPress={() => {
                searchFilterFunction("");
              }}
            />
          )}
        </View>
        {clicked && (
          <View>
            <Button
              title="Cancel"
              onPress={() => {
                Keyboard.dismiss();
                setClicked(false);
              }}
            ></Button>
          </View>
        )}
      </View>
      <View style={styles.container}>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={styles.categoryList}
            horizontal={true}
            data={categoryList}
            renderItem={renderCategory}
            keyExtractor={(item) => categoryList.indexOf(item)}
          />
        </View>
        <View>
          <FlatList
            data={books}
            renderItem={renderBook}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    backgroundColor: "#333447",
    paddingBottom: 60,
  },
  categoryList: {
    height: "auto",
    marginVertical: 13,
  },
  category: {
    height: 36,
    marginRight: 15,
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  categoryName: {
    fontSize: 14,
    paddingHorizontal: 25,
  },
  search: {
    backgroundColor: "#212236",
    height: 56,
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  searchBar_clicked: {
    flexDirection: "row",
    backgroundColor: "#3A3B4D",
    width: "75%",
    height: 38,
    borderRadius: 18,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  searchBar_unclicked: {
    flexDirection: "row",
    backgroundColor: "#3A3B4D",
    width: "90%",
    height: 38,
    borderRadius: 18,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  textInput: {
    marginLeft: 10,
    fontSize: 18,
    width: "85%",
    color: "white",
  },
  loader: {
    position: "absolute",
    left: "45%",
    top: "40%",
  },
});
