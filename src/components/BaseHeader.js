import React from 'react';

import { View, Text, StyleSheet, Platform } from 'react-native';

export default function BaseHeader({title}) {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

const isAndroid = Platform.OS === 'android';

const styles = StyleSheet.create({
    header: {
        height: isAndroid ? 95 : 80,
        backgroundColor: '#212237',
        paddingTop: isAndroid ? 40 :  20,
        paddingHorizontal: 20
    },
    text: {
        fontSize: 24,
        color: '#fff',
    }
});