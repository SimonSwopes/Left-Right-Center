//Library Imports
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Local Imports
import RulesScreen from './Screens/RulesScreen';
import HomeScreen from './Screens/HomeScreen';
import PlayGameScreen from './Screens/PlayGameScreen';
import CoursesScreen from './Screens/CoursesScreen';
import PastGamesScreen from './Screens/PastGamesScreen';
import AddCourseScreen from './Screens/AddCourseScreen';
import DeleteCourseScreen from './Screens/DeleteCourseScreen';

import CourseContext from './Contexts/CourseContext';

const Stack = createNativeStackNavigator();

function App() {

  const [courseData, setCourseData] = React.useState([]);

  const handleSetCourseData = (newCourseData) => {
    setCourseData(newCourseData);
  };

  return (
    <CourseContext.Provider value = {{ courseData, setCourseData }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#03AC13',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#fff',
            },
          }}
          >
          <Stack.Screen
            name= "Home"
            component={HomeScreen}
            options={{ title: 'Home'}}  
          />
          <Stack.Screen name= "Courses"
            component={CoursesScreen}
            options={{title: 'Courses'}}
          />
          <Stack.Screen name= "Play" component={PlayGameScreen} options={{title: 'Play'}}/>
          <Stack.Screen name= "Rules" component={RulesScreen} options={{title: 'How to Play'}}/>
          <Stack.Screen name="Previous" component={PastGamesScreen} options={{title: 'Previous Games'}}/>
          <Stack.Screen name="NewCourse" component={ AddCourseScreen } options={{ title: 'New Course'}}/>
          <Stack.Screen name="DeleteCourse" component={ DeleteCourseScreen } options={{title: 'Delete Course'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </CourseContext.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  rulesContainer: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
  },

  inputContainer: {
    flex: 2,
    backgroundColor: '#000',
    alignItems: 'baseline',
    justifyItems: 'flex-start',
  },

  courseContainer: {
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

  rulestext:{
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

  space: {
    width: 20,
    height: 20,
  },

  input: {
    height:40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: '#000',
    backgroundColor: '#fff',
  },

  gridContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "space-between",
  },

  courseText: {
    color: '#fff',
    fontFamily: 'Times New Roman',
    fontSize: 18,
    marginVerticall: 5,
  },

});

export default App;