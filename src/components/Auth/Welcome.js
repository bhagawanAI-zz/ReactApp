import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'

const Welcome = ({ navigation }) => {
  
    return(
        <View style={{ justifyContent:'center',alignItems:'center',marginTop:'40%' }}>
          <Text style={{ fontSize:30,fontWeight:'bold' }}>Welcome to Soma Life</Text>
          <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
                            onPress={()=>navigation.navigate("Login")}>
               <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Login</Text>
          </TouchableOpacity>  
          <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
                            onPress={()=>navigation.navigate("Registration")}>
               <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Registration</Text>
          </TouchableOpacity>  
        </View>
    )
}

export default Welcome;