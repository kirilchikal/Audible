import React from 'react';

import {View, Text, StyleSheet, Platform} from 'react-native';

export default function SearchHeader() {
    const isAndroid = Platform.OS === 'android';

    const styles = StyleSheet.create({
        header: {
            height: isAndroid ? 90 : 75,
            backgroundColor: '#212237',
            paddingTop: isAndroid ? 40 :  20,
            paddingHorizontal: 20
        },
        text: {
            fontSize: 24,
            color: '#fff',
        },
        search: {
        }
    });

    return (
        <View style={styles.header}>
            <Text style={styles.text}>Search</Text>
            <View style={styles.search}>
            </View>
        </View>
    );
}