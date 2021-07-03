import React from 'react'
import {Text, TouchableOpacity ,SafeAreaView,View,StyleSheet,Image} from 'react-native'
import { color } from 'react-native-reanimated';


const Home = ({ navigation }) => {
    return(
        <SafeAreaView style={{ justifyContent:'center',alignItems:'center' }}>
          {/* <Text adjustsFontSizeToFit numberOfLines={2} style={{ fontSize:30,fontWeight:'bold',marginTop:30 }}>Home Screen</Text>
          <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
                            onPress={()=>navigation.navigate("Dome")}>
               <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Find a Dome</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
                            onPress={()=>navigation.navigate("Learn")}>
               <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Learn</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
                            onPress={()=>navigation.navigate("Community")}>
               <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Community</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
                            onPress={()=>navigation.navigate("Use")}>
               <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Use</Text>
          </TouchableOpacity>  */}
      <SafeAreaView style={styles.heading}><Text adjustsFontSizeToFit numberOfLines={1} style={{ fontSize:30,marginTop:50,color:"white"}}>USE</Text></SafeAreaView>
      <TouchableOpacity style={styles.roundButton}
                            onPress={()=>navigation.navigate("Use")}>
               {/* <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>DOMING AT HOME</Text> */}
               <Image style={styles.images} source={require("../../../assets/images/ATHOME.png")}></Image>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.roundButton}
                            onPress={()=>navigation.navigate("Dome")}>
               {/* <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>DOOMING OUT AND ABOUT</Text> */}
               <Image style={styles.images} source={require("../../../assets/images/DOMINGOUT.png")}></Image>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.roundButton}
                            onPress={()=>navigation.navigate("Use")}>
               {/* <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>APP ONLY</Text> */}
               <Image style={styles.images} source={require("../../../assets/images/ATHOME.png")}></Image>
          </TouchableOpacity> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    heading:{
         backgroundColor:"grey",
         width:'100%',
        justifyContent:"center",
        alignItems:"center",
    },
    roundButton: {
     marginTop: 20,
     width: 150,
     height: 150,
     justifyContent: 'center',
     alignItems: 'center',
     padding: 10,
     borderRadius: 100,
     backgroundColor: '#ccc',
   },
   images:{
        width:150,
        height:150
   }
   }); 

export default Home;


