import { StyleSheet, Text, View , Image } from 'react-native'
import React from 'react'

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
        <Image source={require('../../assets/user.jpeg')} style={{height:50,width:50,borderRadius:25}}/>
      </View>
      <View style={{marginTop:40 , flexDirection : "row" , paddingHorizontal : 20}}>
      <View style={styles.searchInput}>
        <View style={{marginLeft:280 ,  backgroundColor:"#12656b" , borderRadius:20 , height:35 , width:35 , alignItems:"center" , justifyContent:"center"}}>
        <Icon name='search' color="white" size={30} />
        </View>
      
      </View>
      </View>
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
    height : 50,
    borderRadius : 10,
    flexDirection:"row",
    backgroundColor : "#D3D3D3",
    alignItems:"center",
    paddingHorizontal:20
  }
})