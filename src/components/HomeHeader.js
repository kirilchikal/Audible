import React from 'react';

import {View, Text, StyleSheet, Platform} from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function HomeHeader() {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Home</Text>
            <View style={styles.switch}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 155,
        backgroundColor: '#212237',
        paddingTop: Platform.OS === 'android' ? 40 :  20,
        paddingHorizontal: 20
    },
    text: {
        fontSize: 24,
        color: '#fff',
    },
    switch: {

    }
});