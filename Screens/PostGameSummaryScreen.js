import * as React from 'react';
import { StyleSheet, Text, View} from 'react-native';

function PostGameSummaryScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.generalText}>Hello, World!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },

    generalText: {
        color: '#fff',
        fontFamily: 'Times New Roman',
        fontSize: 24
    },
})

export default PostGameSummaryScreen;