import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import MapView from 'react-native-maps';

const FindDome = ({ navigation }) => {
    return(
        <View style={{ justifyContent:'center',alignItems:'center' }}>
          <Text style={{ fontSize:30,fontWeight:'bold' }}>Find Dome Screen</Text>
          <MapView style={{ height:'70%',width:'50%' }} />
          <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
                            onPress={()=>navigation.navigate("Intentions")}>
               <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Go to Intentions</Text>
          </TouchableOpacity>
        </View>
    )
}

export default FindDome;