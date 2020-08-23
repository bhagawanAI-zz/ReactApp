import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'

const Login = ({ navigation }) => {
  
    return(
        <View style={{ justifyContent:'center',alignItems:'center',marginTop:'40%' }}>
          <Text style={{ fontSize:30,fontWeight:'bold' }}>Login Screen</Text>
          <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
                            onPress={()=>navigation.navigate("Home")}>
               <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Login</Text>
          </TouchableOpacity>  
        </View>
    )
}

export default Login;