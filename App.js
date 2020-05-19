import * as React from 'react';
import { Button, View,StyleSheet, ActivityIndicator, TouchableOpacity,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StartUpScreen from './Screens/StartUpScreen';const Stack = createStackNavigator();
import HomeScreen from './Screens/HomeScreen';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartUp" headerMode='none' >
        <Stack.Screen name="StartUp" component={StartUpScreen}  />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

