import { StyleSheet, Text, View , TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchInput = () => {
  return (
    <View style={{marginTop:40 , flexDirection : "row" , paddingHorizontal : 20}}>
    <View style={styles.searchInput}>
      
    <TextInput
      style={{flex:1, fontSize:18}}
      placeholder = 'Search for Doctors'
      />
      <Icon name='search' color="black" size={30} />
      </View>
    
    </View>
  )
}

export default SearchInput

const styles = StyleSheet.create({
    searchInput:{
        flex : 1,
        height : 45,
        borderRadius : 5,
        flexDirection:"row",
        backgroundColor : "#E3E3E3",
        alignItems:"center",
        paddingHorizontal:15
      }
})