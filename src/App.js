import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WelCome from '../src/screens/WelCome'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../src/screens/Home';
import StackNavigation from './Navigation.js/StackNavigation';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    
   
      <View style={{flex:1 }}>
        <StackNavigation/>
      </View>
   
   
  );
}

export default App

const styles = StyleSheet.create({})