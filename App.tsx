/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LoginScreen from './src/screens/LoginScreen';
import Accueil from './src/screens/Accueil';
import Home from './src/screens/Home';
import HomeStudent from './src/screens/student/HomeStudent';
import TimeTableStudent from './src/screens/student/TimeTableStudent';
import NoteStudent from './src/screens/student/NoteStudent';
import AbscenceStudent from './src/screens/student/AbscenceStudent';
import { Button } from './node_modules/react-native/types/index';


import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';






type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text>hello worldddd</Text>
      <Home navigation={LoginScreen}/>
    </View>
  );
}

function App(): React.JSX.Element {
  

  return (
    
    /* <NavigationContainer>
    <View> 
      <Home navigation={Home}/>
     
      <Text> je suis Qh;ed</Text>
    </View>
    </NavigationContainer>*/ 

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Accueil" component={Accueil} />
        <Stack.Screen name="HomeStudent" component={HomeStudent} />
        <Stack.Screen name="TimeTableStudent" component={TimeTableStudent} />
        <Stack.Screen name="AbscenceStudent" component={AbscenceStudent} />
        <Stack.Screen name="NoteStudent" component={NoteStudent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const Stack = createNativeStackNavigator()
/*const MyStack = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.screen
        

      name = "Home"
      component = {Home}
      options = {{title : "welcome"}}
      />

      <Stack.screen  name="profile" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}*/

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
