
import React, {useState} from "react";
import {Text, StyleSheet, SafeAreaView, Image, View, TouchableOpacity, FlatList} from "react-native";
import BookCover from "../components/BookCover";

import bookList from "../Data/bookList";

export default function HomeScreen(props,{navigation}) {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={{marginRight:10}}>
            <BookCover book={item}/>
        </TouchableOpacity>
      );
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.horizontal}>
                <Text style={styles.scrollTitle}>Best sellers</Text>
            <FlatList 
                horizontal={true}
                data={bookList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333447',
    },
    cover: {
        width: 100,
        height: 154,
    },
    horizontal: {
        marginHorizontal: 10,
    },
    scrollTitle: {
        fontSize: 20,
        color: 'white',
        marginVertical: 12,
        marginLeft: 15,
    }
})