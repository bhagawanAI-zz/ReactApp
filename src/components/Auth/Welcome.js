import React from 'react'
import {ImageBackground, View, Text,TouchableOpacity,StyleSheet } from 'react-native'

const Welcome = ({ navigation }) => {
  
    return(

      <ImageBackground source={require('./welcome.png')} style={styles.backgroundImage}>
         <View style={{ justifyContent:'center',alignItems:'center',marginTop:'40%' }}>
          <Text style={{ fontSize:30,fontWeight:'bold',color:"white" }}>SOMADOME</Text>
          <Text style={{ fontSize:20,color:"white" }}>Your journey to the Present</Text>
          <View style={{marginTop:'100%'}}>
          <TouchableOpacity style={{ height:50,width:150,backgroundColor:'rgb(37, 150, 190)',marginTop:'10%' }}
                            onPress={()=>navigation.navigate("Login")}>
               <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>LOGIN</Text>
          </TouchableOpacity>  
          <TouchableOpacity style={{ height:50,width:150,backgroundColor:'rgb(37, 150, 190)',marginTop:'10%' }}
                            onPress={()=>navigation.navigate("Registration")}>
               <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>REGISTER</Text>
          </TouchableOpacity>  
          </View>
        </View>
      </ImageBackground>  
    )
}
let styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  }
});

export default Welcome;