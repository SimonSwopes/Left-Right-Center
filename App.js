//Library Imports
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screen Imports
import RulesScreen from './Screens/RulesScreen.js';
import HomeScreen from './Screens/HomeScreen.js';
import GameSetUpScreen from './Screens/GameSetUpScreen.js';
import CoursesScreen from './Screens/CoursesScreen.js';
import PastGamesScreen from './Screens/PastGamesScreen.js';
import AddCourseScreen from './Screens/AddCourseScreen.js';
import DeleteCourseScreen from './Screens/DeleteCourseScreen.js';

// Context Imports
import CourseContext from './Contexts/CourseContext.js';
import GameContext from './Contexts/GameListContext.js';

// Navigation Stack
const Stack = createNativeStackNavigator();

function App() {

  // Variable to keep track of course objects
  const [courseData, setCourseData] = React.useState([]);
  const [games, setGames] = React.useState([]);

  // Screen Layout
  return (
    <CourseContext.Provider value = {{ courseData, setCourseData }}>
      <GameContext.Provider value = {{ games, setGames }}>
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
            <Stack.Screen name= "Play" component={GameSetUpScreen} options={{title: 'Game Setup'}}/>
            <Stack.Screen name= "Rules" component={RulesScreen} options={{title: 'How to Play'}}/>
            <Stack.Screen name="Previous" component={PastGamesScreen} options={{title: 'Previous Games'}}/>
            <Stack.Screen name="NewCourse" component={ AddCourseScreen } options={{ title: 'New Course'}}/>
            <Stack.Screen name="DeleteCourse" component={ DeleteCourseScreen } options={{title: 'Delete Course'}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </GameContext.Provider>
    </CourseContext.Provider>
  )
}

export default App;