import React, { useMemo } from 'react';

import {View, Text, StyleSheet, Platform} from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import UserButton from './UserButton';

export default function SearchHeader({navigation}) {
    const { colors } = useTheme();
    const styles = useMemo(() => getStyles(colors), [colors]);
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Search</Text>
            <UserButton navigation={navigation} />
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
    }
});
