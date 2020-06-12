import React from 'react';
import { View, Text } from 'react-native';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import MainTabScreen from './screens/MainTabScreen';


const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Profile">
        <Tab.Screen
          name="f"
          component={MainTabScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;