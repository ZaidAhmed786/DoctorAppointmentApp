import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomNavigation from '../Navigation.js/BottomNavigation'
import WelCome from '../screens/WelCome'
import Home from '../screens/Home';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createNativeStackNavigator();
const StackNavigation = () => {
    return (
        <NavigationContainer> 
          <Stack.Navigator>
          <Stack.Screen name="WelCome" component={WelCome} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
        </NavigationContainer>
      );
}

export default StackNavigation

const styles = StyleSheet.create({})