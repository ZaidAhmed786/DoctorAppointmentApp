import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomNavigation from '../Navigation.js/BottomNavigation'
import WelCome from '../screens/WelCome'
import Home from '../screens/Home';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();
const StackNavigation = () => {
    return (
        <NavigationContainer> 
          <Stack.Navigator  screenOptions={{
    headerShown: false
  }}>
          <Stack.Screen name="WelCome" component={WelCome} />
          <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
          
        </Stack.Navigator>
        </NavigationContainer>
      );
}

export default StackNavigation

const styles = StyleSheet.create({})