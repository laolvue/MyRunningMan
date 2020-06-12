import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.default}>
        <Text>Home Screen</Text>
        <Button
            title = 'Go to Profile'
            onPress = {() => {navigation.navigate('Profile')}}
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
        justifyContent: 'center',
    }
});

export default ProfileScreen;
