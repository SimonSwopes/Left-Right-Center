import * as React from 'react';
import {useContext} from 'react';
import {StyleSheet, View, Text, Button, FlatList, Alert} from 'react-native';

import CourseContext from '../Contexts/CourseContext';

function DeleteCourseScreen({ navigation })
{
    const { courseData, setCourseData } = useContext(CourseContext);

    const handleDelete = ( course ) => {
        const courseName = course.getCourseName();
        Alert.alert(`Are you sure?`, `Pressing 'yes' will delete ${courseName} permanently`, [
            {
                text: 'no',
                onPress: () => {
                    // No action taken
                },
            },
            {text: 'yes', onPress: () => {
                const index = courseData.findIndex((item) => item.id === course.id);
                if (index > -1) {
                    const newData = [...courseData];
                    newData.splice(index, 1);
                    setCourseData(newData);
                }
            }},
        ])
    };

    const renderCourseList = ({ item }) => {
        const courseNames = item.getCourseName();
        return (
            <View>
                <Button
                    title={courseNames}
                    onPress={() => handleDelete( item )}
                />
            </View>
        )
    };

    return(
        <View style={styles.container}>
            <Text style={styles.generaltext}>Tap to Delete</Text>
            <FlatList
                data={courseData}
                renderItem={renderCourseList}
                keyExtractor={(item, index) => index.toString()}
                ListEmptyComponent={() => (
                    <View style={styles.courseContainer}>
                        <Text style={styles.generaltext}>No Courses Saved.</Text>
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
        justifyContent: 'center'
    },

    generaltext: {
        color: '#fff',
        fontFamily: 'Times New Roman',
        fontSize: 24,
    },

    courseContainer: {
        flex: 2,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },

})

export default DeleteCourseScreen;