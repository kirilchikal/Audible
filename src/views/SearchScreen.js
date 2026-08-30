import React, { useState, useMemo } from "react";
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
import { useTheme } from "../theme/ThemeContext";

export default function SearchScreen({ nav }) {
  const bookList = [...useSelector((state) => state.bookReducer.bookList)];
  const { colors } = useTheme();
  const styles = useMemo(() => getStyles(colors), [colors]);

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
            selectedCategory === item.name ? colors.ctaContrast : colors.cta,
        },
      ]}
      onPress={() => changeCategory(item.name)}
    >
      <Text
        style={[
          styles.categoryName,
          { color: selectedCategory === item.name ? colors.cta : colors.ctaContrast },
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
    <View style={{ backgroundColor: colors.background, height: "100%" }}>
      <View style={styles.search}>
        <View
          style={
            clicked ? styles.searchBar_clicked : styles.searchBar_unclicked
          }
        >
          <Ionicons name="search-sharp" size={24} color={colors.textSecondary} />
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => searchFilterFunction(text)}
            value={search}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
            placeholderTextColor={colors.placeholder}
            onFocus={() => {
              setClicked(true);
            }}
          />
          {clicked && (
            <Entypo
              name="cross"
              size={20}
              color={colors.textPrimary}
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

const getStyles = (colors) => StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    backgroundColor: colors.background,
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
    backgroundColor: colors.surface,
    height: 56,
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  searchBar_clicked: {
    flexDirection: "row",
    backgroundColor: colors.surfaceAlt,
    width: "75%",
    height: 38,
    borderRadius: 18,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  searchBar_unclicked: {
    flexDirection: "row",
    backgroundColor: colors.surfaceAlt,
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
    color: colors.textPrimary,
  },
  loader: {
    position: "absolute",
    left: "45%",
    top: "40%",
  },
});
