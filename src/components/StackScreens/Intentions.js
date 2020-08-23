import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Intentions = ({ navigation }) => {
    return(
        <View style={{ justifyContent:'center',alignItems:'center' }}>
          <Text style={{ fontSize:30,fontWeight:'bold' }}>Intentions Screens</Text>
          <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
                            onPress={()=>navigation.navigate("Session")}>
               <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Go to Sessions</Text>
          </TouchableOpacity>
        </View>
    )
}

export default Intentions;