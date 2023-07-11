import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './app/screens/HomePage';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator >
            <Stack.Screen name = "Home" component = {HomePage} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;