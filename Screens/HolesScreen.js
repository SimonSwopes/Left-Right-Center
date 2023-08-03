import * as React from 'react';
import {View, Text, StyleSheet } from 'react-native';

function HolesScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style ={styles.generalText}>Hello World</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    },

    scoreContainer: {
        flex: 2,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },

    nextHoleContainer: {
        flex: 3,
        backgroundColor: '#000',
        alignItems: 'center',
        jsutifyContent: 'center',
    },

    generalText: {
        color: '#fff',
        fontFamily: 'Times New Roman',
        fontSize: 32
    },
})

export default HolesScreen;