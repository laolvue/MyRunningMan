import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.default}>
        <Text>Profile Screen</Text>
        <Icon name="checkbox-multiple-marked-circle-outline" size={30} color="#4F8EF7" />
        <Button
            title = 'Go to Home'
            onPress = {() => {navigation.navigate('Home')}}
        />
        <Button
            title = 'Go to Settings'
            onPress = {() => {navigation.navigate('Settings')}}
        />
    </View>
  )
}

const styles = StyleSheet.create ({
    default: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default HomeScreen;