import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React from 'react'

const CategoryList = () => {

    const data = [
        {id:1 , name: "Heart", image : require("../../../assets/heart.png") },
        {id:2 , name: "Brain", image : require("../../../assets/brain.png") },
        {id:4 , name: "Bone", image : require("../../../assets/bone.png") },
        {id:3 , name: "Eyes", image : require("../../../assets/eye.png") },
        {id:3 , name: "Dental", image : require("../../../assets/tooth.png") },
        {id:5 , name: "See all", image : require("../../../assets/others.png") },
        
    ]
    // const CategoryList = ()=>{
    //     return(
    //         <View>
    //             <Image source={data[0].image} />
    //         </View>
    //     //   <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={style.CategoryList}>
    //     //   {data.map((data , index)=>(
    //     //     <TouchableOpacity key={index} activeOpacity={0.8}>
    //     //         <View>
    //     //             <View style={{flex:1}}>{data.image}</View>
    //     //         </View>
    //     //     </TouchableOpacity>
    //     //   ))}
    //     //   </ScrollView>
    //     )
    //   }
  return (
    <View style={{paddingLeft:0,paddingVertical:10}}>
     <ScrollView horizontal showsHorizontalScrollIndicator={false}>

        {data.map((data,index)=>(
       <View key={index} style={styles.Category} >
     <Image source={data.image} style={{height:30,width:50,resizeMode:"contain"}} />
     <Text style={{fontSize:13,fontWeight:"900"}}>{data.name} </Text>
       </View>
       ))
        }
     </ScrollView>
     </View>
     

    //  <View style={styles.Category }>
    //       <Text style={styles.CategoryText}>Category</Text>
          
    //     </View>

  )
}

export default CategoryList

const styles = StyleSheet.create({
    Category : {
        
       alignItems:"center",
       marginRight:30,
       margin:"auto",
        paddingHorizontal:3,
       marginTop:20
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