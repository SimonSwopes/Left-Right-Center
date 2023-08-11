import * as React from 'react';
import { StatusBar, Pressable, StyleSheet, Text, View, FlatList } from 'react-native';
import {useContext} from 'react';

import CourseContext from '../Contexts/CourseContext';

function CoursesScreen({ navigation }) {

    const { courseData, setCourseData } = useContext(CourseContext);

    const renderCourseList = ({ item }) => {
        const courseNames = item.getCourseName();
        return (
            <View>
                <Text style={styles.generaltext}>{courseNames}</Text>
            </View>
        )
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>

                <Pressable
                    style={{
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        paddingVertical: 25,
                        paddingHorizontal: 10,
                        borderRadius: 100,
                        elevation: 25,
                        backgroundColor: '#03AC13',
                        marginTop: 5,
                        marginBottom: 0,
                    }}
                    onPress={() => navigation.navigate('NewCourse')}>
                    <Text style={styles.buttontext}>Create Course</Text>
                </Pressable>

                <View style={styles.space} />

                <Pressable
                    style={{
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        paddingVertical: 25,
                        paddingHorizontal: 10,
                        borderRadius: 100,
                        elevation: 25,
                        backgroundColor: '#03AC13',
                        marginTop: 5,
                        marginBottom: 0,
                    }}
                    onPress={() => navigation.navigate('DeleteCourse')}>
                    <Text style={styles.buttontext}>Delete Course</Text>
                </Pressable>

                <StatusBar barStyle='dark-content' hidden={false} translucent backgroundColor="transparent" />
            </View>

            <Text style={styles.generaltext}>Courses:</Text>
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
        justifyContent: 'center',
    },

    courseContainer: {
        flex: 2,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
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
        justifyContent: 'center',
        paddingVertical: 25,
        paddingHorizontal: 100,
        borderRadius: 100,
        elevation: 25,
        backgroundColor: '#03AC13',
        marginTop: 10,
        marginBottom: 10,
    },

    space: {
        width: 20,
        height: 20,
    },

});

export default CoursesScreen;