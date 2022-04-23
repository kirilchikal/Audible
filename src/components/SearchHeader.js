import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

export default function SearchHeader() {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Search</Text>
            <View style={styles.search}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: Platform.OS === 'android' ? 90 : 75,
        backgroundColor: '#212237',
        paddingTop: Platform.OS === 'android' ? 40 :  20,
        paddingHorizontal: 20
    },
    text: {
        fontSize: 24,
        color: '#fff',
    },
    search: {

    }
});