import { StyleSheet, Text, View , Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import CategoryList from './CategoryList';
import SearchInput from './SearchInput';
import Cards from './Cards';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Home = () => {


 
  return (
    <View style={{flex:1}}>
      <View style={styles.header}>
        <View>
        <View style={{flexDirection:"row" }}>
          <Text style={{fontSize:28,color:"black"}}>Hello, </Text>
          <Text style={{fontSize:28 , fontWeight:"bold" , color:"black"}}>Sam</Text>
        </View>
        <Text style={{marginTop:5,fontSize:18}}>what do you want today</Text>
        </View>
        <Image source={require('../../../assets/user.jpeg')} style={{height:50,width:50,borderRadius:25}}/>
      </View>
      <SearchInput/>
      <CategoryList />
      <Cards />
      
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  header:{
    marginTop:20,
    flexDirection:"row",
    justifyContent:"space-between",
    padding:10
  },
  searchInput:{
    flex : 1,
    height : 45,
    borderRadius : 5,
    flexDirection:"row",
    backgroundColor : "#E3E3E3",
    alignItems:"center",
    paddingHorizontal:15
  },
  Category : {
    marginTop:0,
    padding:0,

  },
  CategoryText:{
     fontSize:20,
     color:"black",
     marginTop:30,
    padding:10,
  },
  CategoryList:{
    
  }
  
})