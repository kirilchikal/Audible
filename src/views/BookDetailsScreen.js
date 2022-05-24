import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Rating from "../components/Rating";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addCart, deleteCart } from "../redux/actions/cart";
import { addFavourite, deleteFavourite } from "../redux/actions/favourite";
import { db } from "../../firebase";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

export default function BookDetailsScreen({ route, navigation }) {
  // Redux & firebase actions
  const addToCartFB = async (key) => {
    console.log(key);
    const cartRef = doc(db, "Cart", "0");
    await updateDoc(cartRef, {
      books: arrayUnion(key),
    });
  };

  const addToFavouriteFB = async (key) => {
    console.log(key);
    const cartRef = doc(db, "Favourite", "0");
    await updateDoc(cartRef, {
      books: arrayUnion(key),
    });
  };

  const removeFromCartFB = async (key) => {
    console.log(key);
    const cartRef = doc(db, "Cart", "0");
    await updateDoc(cartRef, {
      books: arrayRemove(key),
    });
  };

  const removeFromFavouriteFB = async (key) => {
    console.log(key);
    const cartRef = doc(db, "Favourite", "0");
    await updateDoc(cartRef, {
      books: arrayRemove(key),
    });
  };

  //Dispatcher
  const dispatch = useDispatch();
  const addToCart = (key) => {
    dispatch(addCart(key));
    addToCartFB(key);
  };
  const removeFromCart = (key) => {
    dispatch(deleteCart(key));
    removeFromCartFB(key);
  };
  const addToFavourite = (key) => {
    dispatch(addFavourite(key));
    addToFavouriteFB(key);
  };
  const removeFromFavourite = (key) => {
    dispatch(deleteFavourite(key));
    removeFromFavouriteFB(key);
  };

  const favouriteList = useSelector(
    (state) => state.favouriteReducer.favouriteList
  );
  const cartList = useSelector((state) => state.cartReducer.cartList);

  const { item } = route.params;
  const [marked, setMarked] = useState(favouriteList.includes(item.id));
  const [carted, setCarted] = useState(cartList.includes(item.id));
  // console.log("Item loaded");

  // Changed by redux
  const addToWishList = () => {
    setMarked(!marked);
    if (!marked) {
      addToFavourite(item.id);
    } else {
      removeFromFavourite(item.id);
    }
  };
  const addToCartList = () => {
    setCarted(!carted);
    if (!carted) {
      addToCart(item.id);
    } else {
      removeFromCart(item.id);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <View>
          <Image style={styles.img} source={{ uri: item.image_url }} />
        </View>
        <View style={styles.info}>
          <View>
            <View
              style={[
                styles.audio,
                {
                  transform: item.audio ? [{ scale: 1 }] : [{ scale: 0 }],
                  marginBottom: item.audio ? 15 : 0,
                  height: item.audio ? 25 : 0,
                },
              ]}
            >
              <Image source={require("../../assets/audio.png")} />
              <Text
                style={{
                  color: "#694AF1",
                  fontSize: 16,
                  marginLeft: 10,
                }}
              >
                Audio
              </Text>
            </View>
            <Text style={styles.title} numberOfLines={4}>
              {item.title}
            </Text>
          </View>

          <View>
            <Text style={styles.author}>{item.author}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <View style={{ width: 50 }}>
              <Rating rating={item.rating} />
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.whishBtn} onPress={addToWishList}>
          <FontAwesome
            name={marked ? "bookmark" : "bookmark-o"}
            size={36}
            color="#F56C26"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.main}>
        <View style={styles.description}>
          <Text style={{ color: "white", fontSize: 18 }}>Description</Text>
          <TouchableOpacity></TouchableOpacity>
          {/*!!!!!!!!!!! AUDIO PREVIEW !!!!!!!!!!!!!!!*/}
        </View>

        <View style={{ height: "58%" }}>
          <ScrollView>
            <Text style={{ color: "white", fontSize: 16 }}>
              {item.description}
            </Text>
          </ScrollView>
        </View>

        <TouchableOpacity style={styles.toCartBtn} onPress={addToCartList}>
          <Text style={{ color: "white", fontSize: 18 }}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333447",
  },
  head: {
    backgroundColor: "#212237",
    height: "34%",
    width: "100%",
    paddingBottom: 15,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0,
  },
  img: {
    height: 209,
    width: 148,
    borderRadius: 5,
  },
  info: {
    marginLeft: 20,
    height: 209,
    justifyContent: "space-between",
    width: "50%",
  },
  audio: {
    width: 85,
    backgroundColor: "white",
    opacity: 0.9,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  title: {
    color: "white",
    fontSize: 16,
  },
  author: {
    color: "#F5AC39",
    fontSize: 14,
  },
  price: {
    color: "white",
    fontSize: 16,
    marginBottom: 5,
    marginTop: 5,
  },
  whishBtn: {
    position: "absolute",
    right: 25,
    bottom: 22,
  },
  description: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  main: {
    padding: 15,
  },
  toCartBtn: {
    backgroundColor: "#F56C26",
    width: 160,
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
});
