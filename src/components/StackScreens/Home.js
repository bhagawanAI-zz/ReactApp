import React from 'react'
import { View, Text, TouchableOpacity,Image,Dimensions } from 'react-native'


const Home = ({ navigation }) => {
    return(
      <View>
            <Image source={require('../../../assets/dark.png')} style={{ height:Dimensions.get('window').height,width:Dimensions.get('window').width }}/>
            <View style={{ position:'absolute',top:'10%',marginLeft:'24.5%',marginRight:'24.5%' }}>

          <Text style={{ fontSize:30,fontWeight:'bold',color:'white' }}>Home Screen</Text>

          <TouchableOpacity style={{ height:50,width:150,backgroundColor:'white',marginTop:'10%',marginLeft:'8%',marginRight:'8%' }}
                            onPress={()=>navigation.navigate("Dome")}>
               <Text style={{ fontSize:18,color:'black',textAlign:'center',paddingTop:12 }}>Find a Dome</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={{ height:50,width:150,backgroundColor:'white',marginTop:'10%',marginLeft:'8%',marginRight:'8%' }}
                            onPress={()=>navigation.navigate("Learn")}>
               <Text style={{ fontSize:18,color:'black',textAlign:'center',paddingTop:12 }}>Learn</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={{ height:50,width:150,backgroundColor:'white',marginTop:'10%',marginLeft:'8%',marginRight:'8%' }}
                            onPress={()=>navigation.navigate("Community")}>
               <Text style={{ fontSize:18,color:'black',textAlign:'center',paddingTop:12 }}>Community</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={{ height:50,width:150,backgroundColor:'white',marginTop:'10%',marginLeft:'8%',marginRight:'8%' }}
                            onPress={()=>navigation.navigate("Use")}>
               <Text style={{ fontSize:18,color:'black',textAlign:'center',paddingTop:12 }}>Use</Text>
          </TouchableOpacity> 
      
        </View>
       </View> 
    )
}

export default Home;


