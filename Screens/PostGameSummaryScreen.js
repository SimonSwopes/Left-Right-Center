import * as React from 'react';
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';

function PostGameSummaryScreen({route ,navigation }) {

    const { game } = route.params;

    const handleFinish = () => {

        // TODO: Save the game as a JSON

        navigation.navigate('Home');
    }

    const renderColumn = ({ item }) =>{
        const score = item[0];
        const team = item[1];
        const points = item[2];
        const hole = item[3];

        return (
            <View style={styles.columnContainer}>
                <Text style={styles.generalText}>Hole {hole}:</Text>
                <Text style={styles.generalText}>[{score}, </Text>
                <Text style={styles.generalText}>{team}, </Text>
                <Text style={styles.generalText}>{points}]</Text>
            </View>
        )
    }

    const renderRow = ({ item }) => {
        const playerName = item;

        let playerData = [];

        for (let i = 0; i < game.getHole(); i++) {
            playerData.push([game.getScores()[playerName][i], game.getTeams()[playerName][i] ,game.getPoints()[playerName][i], i+1]);
        }

        return (
            <View style={styles.rowContainer}>
                <View style={styles.columnContainer}>
                    <Text style={styles.generalText}>{playerName}: </Text>
                    <FlatList
                        data={playerData}
                        renderItem={renderColumn}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={true}
                        ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
                    />
                </View>
            </View>
        )
    }

    const renderFinals = ({ item }) => {
        const playerName = item;
        const netPoints = game.getPoints()[playerName][game.getPoints()[playerName].length-1];

        return (
            <View>
                <Text style={styles.generalText}>{playerName}: {netPoints}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.layoutText}>(Name Hole[Score, Team, Points])</Text>
            <FlatList
                data={game.getPlayers()}
                renderItem={renderRow}
                keyExtractor={(item, index) => index.toString()}
            />
            <View style={styles.totalsContainer}>
                <Text style={styles.generalText}>Final Points:</Text>
                <FlatList
                data={game.getPlayers()}
                renderItem={renderFinals}
                keyExtractor={(item, index) => index.toString()}
                />
            
                <View style={styles.finishContainer}>
                    <Pressable style={styles.finishButton} onPress={handleFinish}>
                        <Text style={styles.finishButtonText}>Finish</Text>
                    </Pressable>
                </View>
            </View>
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

    totalsContainer: {
        flex: 2,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },

    rowContainer: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'baseline',
        justifyContent: 'center',
    },

    columnContainer: {
        flex: 2,
        backgroundColor: '#000',
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'center',
    },

    finishContainer: {
        flex: 3,
        backgroundColor: '#000',
        alignItems: 'center',
        justifContent: 'center',
    },

    finishButton: {
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

    finishButtonText: {
        color: '#fff',
        fontFamily: 'Times New Roman',
        fontSize: 24,
    },

    generalText: {
        color: '#fff',
        fontFamily: 'Times New Roman',
        fontSize: 32
    },

    layoutText: {
        color:'#fff',
        fontFamily: 'Times New Roman',
        fontSize: 24,
    },
})

export default PostGameSummaryScreen;