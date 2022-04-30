import React, { useState } from "react";
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

import BookCover from "../components/BookCover";

import bookList from "../Data/bookList";
import authorList from "../Data/authorList";

export default function HomeScreen(props, { navigation }) {
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
    ? bookList.filter((b) => b.audio === true)
    : bookList.filter((b) => b.audio === false);

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
            data={[].concat(books).reverse()}
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
            data={authorList}
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
