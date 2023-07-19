import * as React from 'react';
import { StatusBar, Pressable, Text, View, StyleSheet} from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle='dark-content' hidden={false} translucent backgroundColor="transparent" />

            <Text style={styles.generaltext}>Left Right Center</Text>

            <Pressable style={styles.button} onPress={() => navigation.navigate('Play')}>
                <Text style={styles.generaltext}>Play Game</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => navigation.navigate('Courses')}>
                <Text style={styles.generaltext}>   Courses   </Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => navigation.navigate('Previous')}>
                <Text style={styles.generaltext}>Past Games</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => navigation.navigate('Rules')}>
                <Text style={styles.generaltext}>How to Play</Text>
            </Pressable>

        </View>
    );
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
});

export default HomeScreen;