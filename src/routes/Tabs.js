import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { View, Text, Image} from "react-native";
import {Feather, Ionicons, AntDesign} from '@expo/vector-icons';

import HomeScreen from "../views/HomeScreen";
import SearchScreen from "../views/SearchScreen";
import WishListScreen from "../views/WishListScreen";
import CartScreen from "../views/CartScreen";

import HomeHeader from "../components/HomeHeader";
import BaseHeader from "../components/BaseHeader";
import SearchHeader from "../components/SearchHeader";


const Tab = createBottomTabNavigator();

export default function Tabs() {
    return(
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            // headerShown: false,
            tabBarStyle: {
                height: 65,
                paddingTop: 5,
                backgroundColor: '#212237'
            }
        }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View >
                        <Feather name='home' size={32} color={focused ? '#F5A932' : '#666666'}/>
                    </View>
                ),
                header: () => <HomeHeader/>
            }}></Tab.Screen>
            <Tab.Screen name="Search" component={SearchScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View >
                        <Ionicons name='search-sharp' size={32} color={focused ? '#F5A932' : '#666666'}/>
                    </View>
                ),
                header: () => <SearchHeader/>
            }}></Tab.Screen>
            <Tab.Screen name="WishList" component={WishListScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View >
                        <Feather name='bookmark' size={32} color={focused ? '#F5A932' : '#666666'}/>
                    </View>
                ),
                header: () => <BaseHeader title={'Whish List'}/>
            }}></Tab.Screen>
            <Tab.Screen name="Cart" component={CartScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View >
                        <AntDesign name='shoppingcart' size={32} color={focused ? '#F5A932' : '#666666'}/>
                    </View>
                ),
                header: () => <BaseHeader title={'Your Cart'}/>
            }}></Tab.Screen>
        </Tab.Navigator>
    );
}