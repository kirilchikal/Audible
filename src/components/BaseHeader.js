import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

export default function BaseHeader({title}) {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 95,
        backgroundColor: '#212237',
        paddingTop: Platform.OS === 'android' ? 40 :  20,
        paddingHorizontal: 20
    },
    text: {
        fontSize: 24,
        color: '#fff',
    }
});