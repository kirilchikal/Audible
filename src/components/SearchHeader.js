import React from 'react';

import {View, Text, StyleSheet, Platform} from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import ThemeToggleButton from './ThemeToggleButton';

export default function SearchHeader() {
    const { colors } = useTheme();
    const styles = getStyles(colors);
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Search</Text>
            <ThemeToggleButton />
            <View style={styles.search}>

            </View>
        </View>
    );
}

const getStyles = (colors) => StyleSheet.create({
    header: {
        height: Platform.OS === 'android' ? 90 : 75,
        backgroundColor: colors.surface,
        paddingTop: Platform.OS === 'android' ? 40 :  20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 24,
        color: colors.textPrimary,
    },
    search: {

    }
});
