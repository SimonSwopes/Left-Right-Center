import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Button, TextInput, SafeAreaView, ScrollView, KeyboardAvoidingView, Alert, Pressable } from 'react-native';
import { useContext } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';

import CourseContext from '../Contexts/CourseContext';
import GameContext from '../Contexts/GameListContext.js';
import Game from '../Contexts/Game';

function GameSetUpScreen({ navigation }) {
    const { courseData, setCourseData } = useContext(CourseContext);
    const { games, setGames } = useContext(GameContext);

    const courseNames = [];
    for (let i = 0; i < courseData.length; i++) {
        courseNames.push(courseData[i].getCourseName());
    }

    const [selectedCourse, setSelectedCourse] = React.useState("");

    let gameCourse = null;
    const refs = React.useRef(Array(5).fill(null));
    const [players, setPlayers] = React.useState([]);

    const handleplayerChange = (index, value) => {
        const updatedPlayers = [...players];
        updatedPlayers[index] = value;
        setPlayers(updatedPlayers);
    };

    const setGame = () => {
        if (selectedCourse.length < 1) {
            Alert.alert('Error', 'No Course Selected.');
            return;
        }

        for (let i = 0; i < courseData.length; i++) {
            if (courseData[i].getCourseName() === selectedCourse) {
                gameCourse = courseData[i];
                break;
            }
        }

        const newGame = new Game(gameCourse, players);
        setGames([...games, newGame]);

        if (games.length > 10) {
            setGames(games.splice(1, 9));
        }

        navigation.navigate('0');
    }

    return (
        <KeyboardAvoidingView style={styles.masterContainer} behavior="position" enabled>
        <View style={styles.courseContainer}>
            <Text style={styles.generalText}>Select Course</Text>
            <Button title='New Course' onPress={() => navigation.navigate('NewCourse')}/>
            
            <SelectList
                setSelected={(val) => setSelectedCourse(val)}
                data={courseNames}
                save="value"
                search={false}
                boxStyles = {styles.dropDownBox}
                dropdownTextStyles={styles.generalText}
                inputStyles={styles.generalText}
                
            />

                <View style={styles.playerContainer}>
                    <Text style={styles.generalText}>Player Names</Text>
                        {Array.from({ length: 5 }, (_, index) => (
                            <TextInput
                                ref={ref => refs.current[index] = ref}
                                key={index}
                                style={[styles.input, { width: 100 }]}
                                onChangeText={(value) => handleplayerChange(index, value)}
                                inputMode="text"
                                placeholder={`Player ${index + 1}`}
                            />
                        ))}
                    <View style={styles.startGameContainer}>
                        <Pressable style={styles.startButton}
                            onPress={() => setGame()}>
                            <Text style={styles.buttontext}>Start Game</Text>
                        </Pressable>
                    </View>
                </View>
        </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    
    masterContainer: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    courseContainer: {
        flex: 2,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },

    playerContainer: {
        flex: 3,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },

    startGameContainer: {
        flex: 4,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyCOntent: 'center',     
    },

    generalText: {
        color: '#fff',
        fontFamily: 'Times New Roman',
        fontSize: 24,
    },

    scrollView: {
        marginHorizontal: 20,
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: '#000',
        backgroundColor: '#fff',
    },

    startButton: {
        alignItems: 'center',
        justifycontent: 'center',
        paddingVertical: 25,
        paddingHorizontal: 100,
        borderRadius: 100,
        elevation: 25,
        backgroundColor: '#03AC13',
        marginTop: 10,
        marginBottom: 30,
    },

    buttontext: {
        color: '#fff',
        fontFamily: 'Times New Roman',
        fontSize: 24,
    },

    dropDownBox: {
        backgroundColor: '#03AC13',
    },

    
})

export default GameSetUpScreen;