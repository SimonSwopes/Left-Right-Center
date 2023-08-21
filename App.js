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
import HolesScreen from './Screens/HolesScreen.js';
import MidGameScoresScreen from './Screens/MidGameScoresScreen.js';
import PostGameSummaryScreen from './Screens/PostGameSummaryScreen.js';

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
                fontFamily: 'Times New Roman'
              },
            }}
            >
            <Stack.Screen name= "Home" component={ HomeScreen } options={{ title: 'Home'}}/>
            <Stack.Screen name= "Courses" component={ CoursesScreen } options={{title: 'Courses'}}/>
            <Stack.Screen name= "Play" component={ GameSetUpScreen } options={{title: 'Game Setup'}}/>
            <Stack.Screen name= "Rules" component={ RulesScreen } options={{title: 'How to Play'}}/>
            <Stack.Screen name="Previous" component={ PastGamesScreen} options={{title: 'Previous Games'}}/>
            <Stack.Screen name="NewCourse" component={ AddCourseScreen } options={{ title: 'New Course'}}/>
            <Stack.Screen name="DeleteCourse" component={ DeleteCourseScreen } options={{title: 'Delete Course'}}/>
            <Stack.Screen name="0" component={ HolesScreen } options={{ title: "Hole 1"}}/>
            <Stack.Screen name="1" component={HolesScreen} options={{ title: "Hole 2" }} />
            <Stack.Screen name="2" component={HolesScreen} options={{ title: "Hole 3" }} />
            <Stack.Screen name="3" component={HolesScreen} options={{ title: "Hole 4" }} />
            <Stack.Screen name="4" component={HolesScreen} options={{ title: "Hole 5" }} />
            <Stack.Screen name="5" component={HolesScreen} options={{ title: "Hole 6" }} />
            <Stack.Screen name="6" component={HolesScreen} options={{ title: "Hole 7" }} />
            <Stack.Screen name="7" component={HolesScreen} options={{ title: "Hole 8" }} />
            <Stack.Screen name="8" component={HolesScreen} options={{ title: "Hole 9" }} />
            <Stack.Screen name="9" component={HolesScreen} options={{ title: "Hole 10" }} />
            <Stack.Screen name="10" component={HolesScreen} options={{ title: "Hole 11" }} />
            <Stack.Screen name="11" component={HolesScreen} options={{ title: "Hole 12" }} />
            <Stack.Screen name="12" component={HolesScreen} options={{ title: "Hole 13" }} />
            <Stack.Screen name="13" component={HolesScreen} options={{ title: "Hole 14" }} />
            <Stack.Screen name="14" component={HolesScreen} options={{ title: "Hole 15" }} />
            <Stack.Screen name="15" component={HolesScreen} options={{ title: "Hole 16" }} />
            <Stack.Screen name="16" component={HolesScreen} options={{ title: "Hole 17" }} />
            <Stack.Screen name="17" component={HolesScreen} options={{ title: "Hole 18" }} />
            <Stack.Screen name="ScoresScreen" component={MidGameScoresScreen} options={{ title: "Current Standings" }} />
            <Stack.Screen name='SummaryScreen' component={PostGameSummaryScreen} options={{ title: "Summary"}} />
          </Stack.Navigator>
        </NavigationContainer>
      </GameContext.Provider>
    </CourseContext.Provider>
  )
}

export default App;