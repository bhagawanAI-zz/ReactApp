import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Home = ({ navigation }) => {
    return(
        <View style={{ justifyContent:'center',alignItems:'center' }}>
          <Text style={{ fontSize:30,fontWeight:'bold' }}>Home Screen</Text>

          <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
                            onPress={()=>navigation.navigate("Dome")}>
               <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Find a Dome</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
                            onPress={()=>navigation.navigate("Learn")}>
               <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Learn</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
                            onPress={()=>navigation.navigate("Community")}>
               <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Community</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
                            onPress={()=>navigation.navigate("Use")}>
               <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Use</Text>
          </TouchableOpacity> 
        </View>
    )
}

export default Home;