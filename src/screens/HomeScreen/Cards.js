import { StyleSheet, Text, View ,Image } from 'react-native'
import React from 'react'

const Cards = () => {
  return (
    <View style={{flexDirection:"row", padding:10}}>
    <View style={styles.card}> 
    <View style={{flexDirection:"row"}}>
    <Image source={require("../../../assets/doc1.jpg")} style={{height:100,width:50,resizeMode:"cover"}} />
    <View>
    <Text style={{fontSize:12,fontWeight:"900" , marginTop:10, marginLeft:15}}>DR KALEEM AKHTER </Text>
     <Text style={{fontSize:10,fontWeight:"500" , marginTop:3, marginLeft:15}}>cardiology</Text>
    </View>
    
    </View>
    </View>
    <View style={styles.card}> 
    </View>
    </View>
  )
}

export default Cards

const styles = StyleSheet.create({
    card :{
        flex:1,
        height:100,
        width:100,
        marginTop:20,
        marginLeft:3,
        borderRadius:15,


elevation: 15,
backgroundColor:"white"
    
        

    }
})