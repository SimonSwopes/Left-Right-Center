import * as React from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';
import GameContext from '../Contexts/GameListContext.js';

function MidGameScoresScreen({ navigation }) {

    const {games, setGames} = React.useContext(GameContext);

    let currentGame = games[games.length - 1];

    const handleContinue = () => {
        console.log('pressed');
        
        if (currentGame.getHole() < 17) {
            currentGame.nextHole();

            navigation.push(currentGame.getHole().toString());
        }
        else {
            navigation.navigate('Home');
        }
        
    }

    return (

        <View style={styles.container}>
            <Text style={styles.generalText}>Hello World</Text>
            <View style={styles.rowContainer}>
                <Text style={styles.generalText}>Player</Text>
                <Text style={styles.generalText}>Score</Text>
                <Text style={styles.generalText}>Points</Text>
            </View>
            <View style={styles.continueContainer}>
                <Pressable style={styles.button} onPress={handleContinue}>
                    <Text style={styles.buttonText}>Next Hole</Text>
                </Pressable>
            </View>

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

    generalText: {
        color: '#fff',
        fontFamily: 'Times New Roman',
        fontSize: 24
    },

    buttonText: {
        color: '#fff',
        fontFamily: 'Times New Roman',
        fontSize: 32
    },

    continueContainer: {
        flex: 2,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
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

    buttontext: {
        color: '#fff',
        fontFamily: 'Times New Roman',
        fontSize: 24,
    },

    rowContainer: {
        flexDirection: 'row',
    },
})

export default MidGameScoresScreen;