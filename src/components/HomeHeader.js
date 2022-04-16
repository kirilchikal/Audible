import React, {useState} from 'react';

import {View, Text, StyleSheet, Platform} from 'react-native';
import SwitchBtn from './SwitchBtn';

export default function HomeHeader() {
    const [audio, setAudio] = useState(false)
    const toogleAudio = () => {
        setAudio(previousState=>!previousState)
    }
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Home</Text>
            <View style={styles.switch}>
                <SwitchBtn isAudio={audio} toogleAudio={toogleAudio}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: Platform.OS === 'android' ? 148 : 130,
        backgroundColor: '#212237',
        paddingTop: Platform.OS === 'android' ? 40 : 20,
        paddingHorizontal: 20
    },
    text: {
        fontSize: 24,
        color: '#fff',
    },
    switch: {
        marginTop: 18,
        alignItems: 'center',
    }
});