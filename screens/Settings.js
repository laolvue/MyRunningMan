import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SettingsScreen = ({navigation}) => {
  return (
    <View style={styles.default}>
        <Text>Settings Screen</Text>
        <Button
            title = 'Go to Home'
            onPress = {() => {navigation.navigate('Home')}}
        />
        <Button style={styles.buttons}
            title = 'Go to Profile'
            onPress = {() => {navigation.navigate('Profile')}}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    default: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});


export default SettingsScreen;
