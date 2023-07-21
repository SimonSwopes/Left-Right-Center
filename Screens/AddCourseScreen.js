import * as React from 'react';
import { StatusBar, Pressable, StyleSheet, Text, View, ScrollView, SafeAreaView, TextInput, KeyboardAvoidingView, Alert, Keyboard} from 'react-native';
import Course from '../Contexts/Course';
import { useContext } from 'react';
import CourseContext from '../Contexts/CourseContext';


function AddCourseScreen({ navigation }) {

    const { courseData, setCourseData } = useContext(CourseContext);

    const [course, setCourse] = React.useState('');
    const [pars, setPars] = React.useState([]);

    const refs = React.useRef(Array(18).fill(null));

    const handleAddCourse = () => {
        
        var parSum = 0;
        var frontNine = 0;
        var backNine = 0;
        for (var parIdx = 0; parIdx < 18; parIdx++)
        {
            parSum += pars[parIdx];

            if (parIdx < 9) {
                frontNine += pars[parIdx];
            }
            else {
                backNine += pars[parIdx];
            }
        }

        if (frontNine != 36) {
            Alert.alert('Error', 'The front nine pars do not add to 36.');
            return;
        }
        else if (backNine != 36) {
            Alert.alert('Error', 'The back nine pars do not add to 36.');
            return;
        }
        else if (parSum != 72) {
            Alert.alert('Error', 'The pars do not add to 72.');
            return;
        }

        const newCourse = new Course(course, pars);
        setCourseData([...courseData, newCourse]);
        navigation.goBack();
    };

    const handleParChange = (index, value) => {
        const updatedPars = [...pars];
        updatedPars[index] = parseInt(value, 10);
        setPars(updatedPars);

        if (value.length === 1) {
            const nextIndex = index + 1;
            if (nextIndex < 18) {
                Keyboard.dismiss();
                setTimeout(() => {
                    refs.current[nextIndex].focus();
                },100);
            }
        }
    };

    refs.current = refs;
    return (
        <KeyboardAvoidingView style={styles.container} behavior="position" enabled>
            <Pressable style={styles.button} onPress={handleAddCourse}>
                <Text style={styles.buttontext}>Add Course</Text>
            </Pressable>
            <SafeAreaView style={styles.inputContainer}>
                <ScrollView style={styles.scrollview}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setCourse}
                        value={course}
                        inputMode='text'
                        placeholder="Course Name"
                    />
                
                    <View style={styles.courseContainer}>
                        <Text style={styles.textContainer}>Pars:</Text>
                        <View style={styles.gridContainer}>
                            {Array.from({ length: 18 }, (_, index) => (
                                <TextInput
                                    ref={ref => refs.current[index] = ref}
                                    key={index}
                                    style={[styles.input, { width: 100 }]}
                                    onChangeText={(value) => handleParChange(index, value)}
                                    keyboardType="numeric"
                                    placeholder={`Hole ${index + 1}`}
                                />
                            ))}
                        </View>
                    </View>

                    <StatusBar barStyle='dark-content' hidden={false} translucent backgroundColor="transparent" />
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputContainer: {
        flex: 2,
        backgroundColor: '#000',
        alignItems: 'baseline',
        justifyItems: 'flex-start',
    },

    textContainer: {
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

    buttontext: {
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
});

export default AddCourseScreen;