import { StyleSheet, TabBarIOSItem, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from '../screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import Favorite from '../screens/Favorite';
import Account from '../screens/Account';
import SearchDoctor from '../screens/SearchDoctor';
import Pharmacy from '../screens/Pharmacy';
 
const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
    return (
      
      
      <Tab.Navigator  screenOptions={{"tabBarStyle": [{"display": "flex"},null]}}>
        <Tab.Screen name="Home" component={Home} 
        options={{headerShown: false , tabBarIcon : () => <Icon name='home-filled' color="#12656b" size={30} />}} />
         <Tab.Screen name="Favorite" component={Favorite}
        options={{tabBarIcon : () => <Icon name='favorite' color="#12656b" size={30} />}} />
        <Tab.Screen name="SearchDoctor" component={SearchDoctor}
        options={{tabBarIcon : () => 
        
        <View style={styles.middleIcon}>
        <Icon name='person-search' color="#12656b" size={30} />
        </View>
      
      }} />
         <Tab.Screen name="Account" component={Account}
        options={{tabBarIcon : () => <Icon name='account-box' color="#12656b" size={30} />}} />
        <Tab.Screen name="Pharmacy" component={Pharmacy}
        options={{tabBarIcon : () => <Icon name="shopping-bag" color="#12656b" size={30} />}} />
        
      </Tab.Navigator>
      
    
      
      );
}

export default BottomNavigation

const styles = StyleSheet.create({
  middleIcon:{
    height:55 , 
    width:55 , 
    justifyContent:"center" ,
    alignItems:"center",
    borderWidth:3,
    borderRadius:30,
    borderColor:"gray",
    top : -25,
    
   
    
  }
})