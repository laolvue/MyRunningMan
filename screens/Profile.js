import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.default}>
        <Text>Profile Screen</Text>
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