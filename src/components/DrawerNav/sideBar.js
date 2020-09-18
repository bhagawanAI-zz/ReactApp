import React,{Component} from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Alert, Dimensions, StyleSheet,TextInput } from 'react-native'


export default class SideBar extends Component {
  constructor() {
    super();
    this.state={
    
    }
  }

  
  render() {
    return (
           <View style={styles.container}>
              <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Profile')}
                                 style={styles.button}>
                  <Text style={styles.textContent}>Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Settings')}
                                 style={styles.button}>
                  <Text style={styles.textContent}>Settings</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Subscription')}
                                 style={styles.button}>
                  <Text style={styles.textContent}>Manage Subscription</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Help')}
                                 style={styles.button}>
                  <Text style={styles.textContent}>Help & Support</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={()=>this.props.navigation.navigate('PurchaseDome')}
                                 style={styles.button}>
                  <Text style={styles.textContent}>Purchase Dome</Text>
              </TouchableOpacity> 
              <TouchableOpacity  onPress={()=>this.props.navigation.navigate('About')}
                                 style={styles.button}>
                  <Text style={styles.textContent}>About Us</Text>
              </TouchableOpacity> 
              <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Login')}
                                 style={styles.logout}>
                  <Text style={styles.textContent}>Log Out</Text>
              </TouchableOpacity>                 
           </View>
         
    );
  }
}

const styles = StyleSheet.create({
     container:{
       flex:1,
       backgroundColor:'white'
     },
     button:{
        height:40,
        width:200,
        marginTop:15,
        marginLeft:30
     },
     textContent:{
       fontSize:18 
     },
     logout:{
       height:40,
       width:200,
       alignSelf:'center',
       marginTop:'36%',
       paddingLeft:'18%',
       paddingRight:'18%' 
     }
  })