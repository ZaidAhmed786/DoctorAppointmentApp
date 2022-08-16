import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const WelCome = () => {
  return (
    
      <>
        <View style={{flex:1 }}>
         <Image
         style={{
          width : 400,
          height : 740,
          resizeMode : "cover"
         }}
         source = {require("../../assets/ONLINEMEDICAL.jpg")}
         
         />
        </View>
        <View style={styles.IndicatorContainer} >
        <View style={styles.Indicator}></View>
        <View style={styles.IndicatorCircle}/>
        <View style={styles.IndicatorCircle}/>
        
        </View>
        <View>
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <Text style={styles.buttonTitle}>NEXT</Text>
        </TouchableOpacity>
        </View>
        
        
    </>
    
  )
}

export default WelCome

const styles = StyleSheet.create({

  IndicatorContainer : {
    justifyContent:"center",
    flexDirection:"row",
    alignItems:"center",
    flex:1,
    height:50,
    top:600,
    marginHorizontal : 190,
    
  },
  Indicator : {
    height:12,
    width:30,
    borderRadius:10,
    backgroundColor:"#12656b",
    marginHorizontal : 5,
   
  },
  IndicatorCircle : {
    height:12,
    width:12,
    borderRadius : 6,
    marginHorizontal:5,
    backgroundColor:"grey",
   

  },
  button : {
    height:50,
    width:270,
   backgroundColor : "#12656b",
    justifyContent:"center",
    alignItems:"center",
    top:660,
    marginHorizontal : 65,
    borderRadius : 30,
    color:"white"
    },
    buttonTitle : {
      color:"white",
      fontWeight:"bold",
      fontSize:18
    }
})