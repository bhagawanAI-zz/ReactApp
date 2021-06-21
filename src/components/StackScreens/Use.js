import React from 'react'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'

const Use = ({ navigation }) => {
    return(
        <SafeAreaView style={{ justifyContent:'center',alignItems:'center',flex:1 }}>
          <Text style={{ fontSize:30,fontWeight:'bold' }}>Use Screen</Text>

          <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
                            onPress={()=>navigation.navigate("Intentions")}>
               <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Go to Intentions</Text>
          </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Use;