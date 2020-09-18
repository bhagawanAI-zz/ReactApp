import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';


/* imported js files here */
import Meditation from './Learn/Meditation';
import Breathwork from './Learn/Breathwork';
import SDMeditation from './Learn/SDMeditation';
import SoundHealing from './Learn/SoundHealing';




// const LearnIndex = createAppContainer(LearnTabs)


// const LearnTabs = createMaterialTopTabNavigator({
//   Meditation:{
//     Screen : () => Meditation
//   },
//   Breathwork:{
//     Screen : () => Breathwork
//   },
//   SomaDomeMeditation:{
//     Screen : () => SDMeditation
//   },
//   SoundHealing:{
//     Screen : () => SoundHealing
//   }
// })  

class  Learn extends Component {
  render(){
    return(
        <View style={{ justifyContent:'center',alignItems:'center' }}>
          <Text style={{ fontSize:30,fontWeight:'bold' }}>Learn Screen</Text>

          <TouchableOpacity style={{ height:50,width:150,backgroundColor:'black',marginTop:'10%' }}
                            onPress={()=>navigation.navigate("Intentions")}>
               <Text style={{ fontSize:18,color:'white',textAlign:'center',paddingTop:12 }}>Go to Intentions</Text>
          </TouchableOpacity> 
        </View>
    )
  }
}

export default Learn;