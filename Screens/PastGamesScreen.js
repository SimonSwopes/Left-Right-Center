import * as React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

function PastGamesScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle='dark-content' hidden={false} translucent backgroundColor="transparent" />
            <Text style={styles.generaltext}>Todo: a list of previous games</Text>
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

    rulesContainer: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'baseline',
        justifyContent: 'flex-start',
    },

    inputContainer: {
        flex: 2,
        backgroundColor: '#000',
        alignItems: 'baseline',
        justifyItems: 'flex-start',
    },

    courseContainer: {
        flex: 2,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },

    scrollview: {
        marginHorizontal: 20,
    },

    generaltext: {
        color: '#fff',
        fontFamily: 'Times New Roman',
        fontSize: 32,
    },

    rulestext: {
        color: '#fff',
        fontFamily: 'Times New Roman',
        fontSize: 24,
    },

    button: {
        alignItems: 'center',
        justifycontent: 'center',
        paddingVertical: 25,
        paddingHorizontal: 100,
        borderRadius: 100,
        elevation: 25,
        backgroundColor: '#03AC13',
        marginTop: 10,
        marginBottom: 10,
    },

    space: {
        width: 20,
        height: 20,
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: '#000',
        backgroundColor: '#fff',
    },

    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "space-between",
    },

    courseText: {
        color: '#fff',
        fontFamily: 'Times New Roman',
        fontSize: 18,
        marginVerticall: 5,
    },

});

export default PastGamesScreen;