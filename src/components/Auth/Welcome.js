import React from 'react'
import { View, Text,TouchableOpacity,Image,Dimensions } from 'react-native'

const Welcome = ({ navigation }) => {
  
    return(
      <View>
          <Image source={require('../../../assets/meditate.png')} style={{ height:Dimensions.get('window').height,width:Dimensions.get('window').width }}/>
        <View style={{ position:'absolute',top:'10%' }}>
          
          <Text style={{ fontSize:30,fontWeight:'bold',marginLeft:'8%',marginRight:'8%' }}>Welcome to Soma Life</Text>
          <TouchableOpacity style={{ height:50,width:Dimensions.get('window').width,backgroundColor:'black',marginTop:'84%' }}
                            onPress={()=>navigation.navigate("Login")}>
               <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Login</Text>
          </TouchableOpacity>  
          <TouchableOpacity style={{ height:50,width:Dimensions.get('window').width,backgroundColor:'black',marginTop:'10%' }}
                            onPress={()=>navigation.navigate("Registration")}>
               <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Registration</Text>
          </TouchableOpacity>  
        </View>
        </View>
    )
}

export default Welcome;