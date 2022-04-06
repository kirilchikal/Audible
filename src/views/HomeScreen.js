
import React from "react";
import {View, Button, Text, StyleSheet, SafeAreaView} from "react-native";

export default function HomeScreen({navigation}) {
    return (
        <SafeAreaView style={StyleSheet.container}>
            <Text>Home screen</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})