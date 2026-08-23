import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { View, Text, Image } from "react-native";
import { Feather, Ionicons, AntDesign } from "@expo/vector-icons";

import HomeScreen from "../views/HomeScreen";
import SearchScreen from "../views/SearchScreen";
import WishListScreen from "../views/WishListScreen";
import CartScreen from "../views/CartScreen";

import HomeHeader from "../components/HomeHeader";
import BaseHeader from "../components/BaseHeader";
import SearchHeader from "../components/SearchHeader";
import { useTheme } from "../theme/ThemeContext";

const Tab = createBottomTabNavigator();

export default function Tabs({ navigation }) {
  const [audio, setAudio] = useState(false);
  const toogleAudio = () => {
    setAudio((previousState) => !previousState);
  };
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        // headerShown: false,
        tabBarStyle: {
          height: 65,
          paddingTop: 4,
          backgroundColor: colors.surface,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        children={() => <HomeScreen isAudio={audio} nav={navigation} />}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Feather
                name="home"
                size={32}
                color={focused ? colors.accent : colors.tabInactive}
              />
            </View>
          ),
          header: () => <HomeHeader audio={audio} toogle={toogleAudio} />,
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Search"
        children={() => <SearchScreen nav={navigation} />}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                name="search-sharp"
                size={32}
                color={focused ? colors.accent : colors.tabInactive}
              />
            </View>
          ),
          header: () => <SearchHeader />,
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="WishList"
        component={WishListScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Feather
                name="bookmark"
                size={32}
                color={focused ? colors.accent : colors.tabInactive}
              />
            </View>
          ),
          header: () => <BaseHeader title={"Whish List"} />,
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <AntDesign
                name="shoppingcart"
                size={32}
                color={focused ? colors.accent : colors.tabInactive}
              />
            </View>
          ),
          header: () => <BaseHeader title={"Your Cart"} />,
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
