import { StyleSheet, Text, View ,Image, ScrollView } from 'react-native'
import React from 'react'

const Cards = () => {
  const data = [
    {id:1 , name: "DR KALEEM AKHTER", image : require("../../../assets/doc1.jpg") },
    {id:2 , name: "DR ALI HAFEEZ", image : require("../../../assets/doc2.jpg") },
    {id:3 , name: "DR ZAID AHMED", image : require("../../../assets/user.jpeg") },
  
    
    
]
  return (
    // <View style={{flexDirection:"row", padding:10}}>
    // <View style={styles.card}> 
    // <View style={{flexDirection:"row"}}>
    // <Image source={require("../../../assets/doc1.jpg")} style={{height:100,width:50,resizeMode:"cover"}} />
    // <View>
    // <Text style={{fontSize:12,fontWeight:"900" , marginTop:10, marginLeft:15}}>DR KALEEM AKHTER </Text>
    //  <Text style={{fontSize:10,fontWeight:"500" , marginTop:3, marginLeft:15}}>cardiology</Text>
    // </View>
    
    // </View>
    // </View>


          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
           <View style={{flexDirection:"row", padding:10}}>
             {data.map((data,index)=>(
              <View key={index} style={styles.card} >
              <View style={{flexDirection:"row"}}>
                 <Image source={data.image} style={{height:100,width:50,resizeMode:"cover"}} />
                 <View>
                   <Text style={{fontSize:12,fontWeight:"900" , marginTop:10, marginLeft:12}}> {data.name}</Text>
                    <Text style={{fontSize:10,fontWeight:"500" , marginTop:3, marginLeft:15}}>cardiolog</Text>
                  </View>
    
                  </View>
                      </View>
        
                         ))
                      }
                </View>
                      </ScrollView>
    
  
  )
}

export default Cards

const styles = StyleSheet.create({
    card :{
        flex:1,
        height:100,
        width:180,
       padding:0,
        marginLeft:5,
        borderRadius:15,

        alignItems:"center",
       
        margin:"auto",
    
      


elevation: 15,
backgroundColor:"white"
    
        

    }
})