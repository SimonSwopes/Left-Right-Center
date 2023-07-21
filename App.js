//Library Imports
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screen Imports
import RulesScreen from './Screens/RulesScreen';
import HomeScreen from './Screens/HomeScreen';
import PlayGameScreen from './Screens/PlayGameScreen';
import CoursesScreen from './Screens/CoursesScreen';
import PastGamesScreen from './Screens/PastGamesScreen';
import AddCourseScreen from './Screens/AddCourseScreen';
import DeleteCourseScreen from './Screens/DeleteCourseScreen';

// Context Imports
import CourseContext from './Contexts/CourseContext';

// Navigation Stack
const Stack = createNativeStackNavigator();

function App() {

  // Variable to keep track of course objects
  const [courseData, setCourseData] = React.useState([]);

  // function for setting the course data
  const handleSetCourseData = (newCourseData) => {
    setCourseData(newCourseData);
  };

  // Screen Layout
  return (
    <CourseContext.Provider value = {{ courseData, setCourseData }}>
      <NavigationContainer>
        <Stack.Navigator // Header fromating
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
          <Stack.Screen name= "Home" component={HomeScreen} options={{ title: 'Home'}}/>
          <Stack.Screen name= "Courses" component={CoursesScreen} options={{title: 'Courses'}}/>
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

export default App;