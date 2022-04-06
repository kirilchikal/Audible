
import React from "react";
import {View, Button, Text, StyleSheet} from "react-native";

export default function WishListScreen({navigation}) {
    return (
        <View style={StyleSheet.container}>
            <Text>WishList screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})