import * as React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

function PlayGameScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle='dark-content' hidden={false} translucent backgroundColor="transparent" />
            <Text style={styles.generaltext}>Todo: Implement the game</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },

    generaltext: {
        color: '#fff',
        fontFamily: 'Times New Roman',
        fontSize: 32,
    },
});

export default PlayGameScreen;