import * as React from 'react';
import { View, Text, StyleSheet, Pressable, FlatList} from 'react-native';
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

    const renderNames = ({ item }) => {
        const playerName = item;
        const playerScore = currentGame.getScores()[playerName][currentGame.getHole()];
        const playerPoints = currentGame.getPoints()[playerName][currentGame.getHole()];
        return (
            <View style={styles.rowContainer}>
            <Text style={styles.generalText}>{ playerName }</Text>
            <Text style={styles.generalText}>{ playerScore }</Text>
            <Text style={styles.generalText}>{ playerPoints }</Text>

            </View>
        )
    }

    return (

        <View style={styles.container}>
                <FlatList
                    data={currentGame.getPlayers()}
                    renderItem={renderNames}
                    keyExtractor={(item, index) => index.toString()}
                />

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
        fontSize: 48
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
        justifyContent: 'center',
        paddingVertical: 25,
        paddingHorizontal: 100,
        borderRadius: 100,
        elevation: 25,
        backgroundColor: '#03AC13',
        marginTop: 10,
        marginBottom: 10,
    },

    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
})

export default MidGameScoresScreen;