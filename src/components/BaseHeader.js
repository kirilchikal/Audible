import React, { useMemo } from 'react';

import {View, Text, StyleSheet, Platform} from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import ThemeToggleButton from './ThemeToggleButton';

export default function BaseHeader({title}) {
    const { colors } = useTheme();
    const styles = useMemo(() => getStyles(colors), [colors]);
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
            <ThemeToggleButton />
        </View>
    );
}

const getStyles = (colors) => StyleSheet.create({
    header: {
        height: Platform.OS === 'android' ? 95 : 80,
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
    }
});
