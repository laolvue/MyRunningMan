import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './Home'
import SettingsScreen from './Settings'
import ProfileScreen from './Profile'

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';



const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SettingsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = ({navigation}) => {
  return (
    <Tab.Navigator> 
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
    </Tab.Navigator>
  )
}



const HomeStackScreen = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen
            name="Home"
            component={HomeScreen}
            options={{
                headerTitleAlign: 'center',
                headerLeft: () => (
                    <Icon name="home" size={30} color="white" />
                ),
                headerStyle: {
                    backgroundColor: '#71bd83'
                },
                headerTitleStyle: {
                    color: "white",
                    fontWeight: "bold"
                }
            }}
        />
    </HomeStack.Navigator>
)

const ProfileStackScreen = () => (
    <ProfileStack.Navigator>
        <ProfileStack.Screen
            name="Profile" 
            component={ProfileScreen} 
            options={{
                headerTitleAlign: 'center',
                headerLeft: () => (
                    <Icon name="account" size={30} color="white" />
                ),
                headerStyle: {
                    backgroundColor: '#3e7096'
                },
                headerTitleStyle: {
                    color: "white",
                    fontWeight: "bold"
                }
            }}
        />
    </ProfileStack.Navigator>
)

const SettingsStackScreen = () => (
    <SettingsStack.Navigator>
        <SettingsStack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
                headerTitleAlign: 'center',
                headerLeft: () => (
                    <Icon name="settings-outline" size={30} color="white" />
                ),
                headerStyle: {
                    backgroundColor: '#7f7399'
                },
                headerTitleStyle: {
                    color: "white",
                    fontWeight: "bold"
                }
            }}
        />
    </SettingsStack.Navigator>
)



export default MainTabScreen;
