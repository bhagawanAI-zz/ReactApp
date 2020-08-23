import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Profile = ({ navigation }) => {
    return(
        <View style={{ justifyContent:'center',alignItems:'center' }}>
          <Text style={{ fontSize:30,fontWeight:'bold' }}>Profile Screen</Text>
          <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
                            onPress={()=>navigation.navigate("EditProfile")}>
               <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Go to Edit Profile</Text>
          </TouchableOpacity>
        </View>
    )
}

export default Profile;