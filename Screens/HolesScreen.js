import * as React from 'react';
import {View, Text, StyleSheet, Alert, TextInput, Pressable } from 'react-native';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import GameContext from '../Contexts/GameListContext.js';

function HolesScreen({ navigation }) {

    const {games, setGames} = React.useContext(GameContext);

    const [leftSelected, setLeftSelected] = React.useState([]);
    const [rightSelected, setRightSelected] = React.useState([]);
    const [centerSelected, setCenterSelected] = React.useState([]);

    const refs = React.useRef(Array(5).fill(null));

    currentGame = games[games.length - 1];


    const handleNext = () =>
    {
        if (leftSelected.length != 2) {
            Alert.alert('Invalid Left Team', 'Must have 2 Players.');
            return;
        }

        if (rightSelected.length != 2) {
            Alert.alert('Invalid Right Team', 'Must have 2 Players.');
            return;
        }

        if (centerSelected.length != 1) {
            Alert.alert('Invalid Center Team', 'Must have 1 Player.');
            return;
        }

        let hole = currentGame.getHole();
        for (let i = 0; i < currentGame.getPlayers().length; i++) {
            let player = currentGame.getPlayers()[i];
            if (currentGame.getScores()[player][hole] == null || currentGame.getScores()[player][hole] <= 0) {
                Alert.alert('Invalid Scores', 'Score must be real.');
                return;
            }
        }

        if (currentGame.getHole() < 18) {
            currentGame.nextHole();
            navigation.navigate(hole.toString());
        }
        else {
            navigation.navigate('Home');
        }
    };

    const handleScoreUpdate= (index, value) => {

        let hole = currentGame.getHole()
        let player = currentGame.getPlayers()[index];

        currentGame.setRawScores(hole, player, parseInt(value, 10));

        const playerScore = currentGame.getScores()[player][hole];
        console.log(`${playerScore}`);
    };

    return (
        <View style={styles.container}>
            <Text style ={styles.generalText}>Teams:</Text>
            <MultipleSelectList
                boxStyles = {styles.dropDownBox}
                checkBoxStyles = {styles.dropDown}
                inputStyles = {styles.generalText}
                dropdownTextStyles = {styles.generalText}
                labelStyles = {styles.dropDownLabel}
                badgeStyles = {styles.dropDownBadge}
                badgeTextStyles = {styles.dropDownBadgeText}
                setSelected = {(val) => setLeftSelected(val)}
                data = {currentGame.getPlayers()}
                save="value"
                label="Left"
                search = {false}
                placeholder = "Left"
            />
            <MultipleSelectList
                boxStyles={styles.dropDownBox}
                checkBoxStyles={styles.dropDown}
                dropdownTextStyles={styles.generalText}
                labelStyles={styles.dropDownLabel}
                badgeStyles={styles.dropDownBadge}
                badgeTextStyles={styles.dropDownBadgeText}
                setSelected={(val) => setCenterSelected(val)}
                data={currentGame.getPlayers()}
                save="value"
                label="Center"
                search={false}
                placeholder="Center"
                inputStyles={styles.generalText}
            />
            <MultipleSelectList
                boxStyles={styles.dropDownBox}
                checkBoxStyles={styles.dropDown}
                dropdownTextStyles={styles.generalText}
                labelStyles={styles.dropDownLabel}
                badgeStyles={styles.dropDownBadge}
                badgeTextStyles={styles.dropDownBadgeText}
                setSelected={(val) => setRightSelected(val)}
                data={currentGame.getPlayers()}
                save="value"
                label="Right"
                search={false}
                placeholder="Right"
                inputStyles={styles.generalText}
            />
            <View style={styles.scoreContainer}>
                <Text style={styles.generalText}>Scores Here</Text>
                <View style={styles.gridContainer}>
                {Array.from({ length: 5}, (_, index) => (
                    <TextInput
                        ref={ref => refs.current[index] = ref}
                        key={index}
                        style={[styles.input]}
                        keyboardType="numeric"
                        placeholder={currentGame.getPlayers()[index]}
                        onChangeText={(value) => handleScoreUpdate(index, value)}
                    />
                ))}
                </View>
            </View>
            <View style={styles.nextHoleContainer}>
                <Pressable style={styles.button} onPress={handleNext}>
                    <Text style={styles.buttontext}>Next Hole</Text>
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

    dropDown: {
      backgroundColor: '#fff',
    },

    dropDownBox: {
        backgroundColor: '#03AC13',
    },

    dropDownLabel: {
        color: '#fff',
        fontFamily: 'Times New Roman',
        fontSize: 24,
    },

    dropDownBadge: {
        backgroundColor: '#000',
    },

    dropDownBadgeText: {
        color: '#fff',
        fontFamily: 'Times New Roman',
        fontSize: 18,
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
        justifyContent: "space-between",
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

})

export default HolesScreen;