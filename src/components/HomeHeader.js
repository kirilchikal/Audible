import React from 'react';

import {View, Text, StyleSheet, Platform} from 'react-native';
import SwitchBtn from './SwitchBtn';
import { useTheme } from '../theme/ThemeContext';
import ThemeToggleButton from './ThemeToggleButton';

export default function HomeHeader(props) {
    const { colors } = useTheme();
    const styles = getStyles(colors);

    return (
        <View style={styles.header}>
            <View style={styles.titleRow}>
                <Text style={styles.text}>Home</Text>
                <ThemeToggleButton />
            </View>
            <View style={styles.switch}>
                <SwitchBtn isAudio={props.audio} toogleAudio={props.toogle}/>
            </View>
        </View>
    );
}

const getStyles = (colors) => StyleSheet.create({
    header: {
        height: Platform.OS === 'android' ? 148 : 130,
        backgroundColor: colors.surface,
        paddingTop: Platform.OS === 'android' ? 40 : 20,
        paddingHorizontal: 20
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 24,
        color: colors.textPrimary,
    },
    switch: {
        marginTop: 18,
        alignItems: 'center',
    }
});
