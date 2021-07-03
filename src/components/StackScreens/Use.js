import React from 'react'
import { SafeAreaView, Text, TouchableOpacity,View } from 'react-native'
import Feel from '../Common/Feel';

const Use = ({ navigation }) => {
    return(
        <SafeAreaView style={{flex:1,flexDirection:"column",backgroundColor:"grey"}}>
             <View style={{flex:2,flexDirection:"row"}}>
             <Feel navigation={navigation} feeling="Relaxed" imagePath="relaxed"></Feel>
             <Feel navigation={navigation} feeling="Energized" imagePath="energized"></Feel>
             </View>
             <View style={{flex:2,flexDirection:"row"}}>
             <Feel navigation={navigation} feeling="Recovered" imagePath="recovered"></Feel>
             <Feel navigation={navigation} feeling="Creative" imagePath="creative"></Feel>
             </View>
             <View style={{flex:2,flexDirection:"row",backgroundColor:"blue"}}>
             <Feel navigation={navigation} feeling="Rested" imagePath="relaxed"></Feel>
             <Feel navigation={navigation} feeling="Focused" imagePath="energized"></Feel>
             </View>
             <View style={{flex:2,flexDirection:"row",backgroundColor:"pink"}}>
             <Feel navigation={navigation} feeling="Grateful" imagePath="creative"></Feel>
             <Feel navigation={navigation} feeling="Vital" imagePath="recovered"></Feel>
             </View>
          {/* <Text style={{ fontSize:30,fontWeight:'bold' }}>I WANT TO FEEL</Text>

          <View style={{height:150,width:150,backgroundColor:"blue"}}>


          </View>

          <View style={{height:150,width:150,backgroundColor:"green"}}>
          </View> */}

{/* <View style={{height:150,width:150,backgroundColor:"red"}}>
</View> */}

           {/* <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
                            onPress={()=>navigation.navigate("Intentions")}>
               <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Go to Intentions</Text>
          </TouchableOpacity> 
          

          <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
                            onPress={()=>navigation.navigate("Intentions")}>
               <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Relaxed</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
                            onPress={()=>navigation.navigate("Intentions")}>
               <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Energized</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
                            onPress={()=>navigation.navigate("Intentions")}>
               <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Grateful</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
                            onPress={()=>navigation.navigate("Intentions")}>
               <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Creative</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
                            onPress={()=>navigation.navigate("Intentions")}>
               <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Recovered</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
                            onPress={()=>navigation.navigate("Intentions")}>
               <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Vital</Text>
               
          </TouchableOpacity>
          <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
                            onPress={()=>navigation.navigate("Intentions")}>
               <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Rested</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
                            onPress={()=>navigation.navigate("Intentions")}>
               <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Focused</Text>
          </TouchableOpacity> */}
        </SafeAreaView>
        
    )
}

export default Use;