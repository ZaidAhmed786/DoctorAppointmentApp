import { StyleSheet, TabBarIOSItem, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from '../screens/Home';
import { NavigationContainer } from '@react-navigation/native';
 
const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
    return (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            
          </Tab.Navigator>
        </NavigationContainer>
      );
}

export default BottomNavigation

const styles = StyleSheet.create({})