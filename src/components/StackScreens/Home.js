import React from 'react'
import {Text, TouchableOpacity ,SafeAreaView,View,StyleSheet,Image} from 'react-native'
import { color } from 'react-native-reanimated';


const Home = ({ navigation }) => {
    return(
        <View style={styles.center}>
      <SafeAreaView style={styles.heading}>
           <Text adjustsFontSizeToFit numberOfLines={1} style={{ fontSize:30,color:"white"}}>
                USE
           </Text></SafeAreaView>
           <View style={styles.mainContent}>
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
           </View>
    
        </View>
    )
}

const styles = StyleSheet.create({
    heading:{
         backgroundColor:"grey",
         width:'100%',
        justifyContent:"center",
        alignItems:"center",
        flex:0.5
    },
    roundButton: {
     marginTop: 30,
     width: 190,
     height: 190,
     justifyContent: 'center',
     alignItems: 'center',
     padding: 10,
     borderRadius: 100,
     backgroundColor: '#ccc',
   },
   images:{
        width:190,
        height:190
   },
   center:{
        justifyContent:"center",
        alignItems:"center",
        flex:1
   },
   mainContent:{
        flex:3,
        justifyContent:"center"
   }
   }); 

export default Home;


