import * as React from 'react';
import { StatusBar, StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import GameContext from '../Contexts/GameListContext.js';

function PastGamesScreen({ navigation }) {

    const {games, setGames} = React.useContext(GameContext);

    const loadSummary = () =>{
        console.log('pressed');
    }

    const renderNames = ({ item }) => {
        const player = item;

        return (
            <View>
                <Text style={styles.generaltext}>{player}</Text>
            </View>
        )
    }

    const renderGameList = ({ item }) => {
        const game = item;
        players = game.getPlayers();

        console.log('called');
        
        return (
            <View>
                <Pressable style={styles.gameButton} onPress={loadSummary}>
                    <Text style={styles.generaltext}>{game.getCourse().getCourseName()}: </Text>
                    <FlatList
                        data={players}
                        renderItem={renderNames}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={true}
                        ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
                    />
                </Pressable>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={games}
                renderItem={renderGameList}
                keyExtractor={(item, index) => index.toString()}
                ListEmptyComponent={() => (
                    <View>
                        <Text style={styles.generaltext}>No Games Saved.</Text>
                    </View>
                )}
            />
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

    gameButton: {
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
});

export default PastGamesScreen;