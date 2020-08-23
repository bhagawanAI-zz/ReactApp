import React,{Component} from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Alert, Dimensions, StyleSheet,TextInput } from 'react-native'


export default class SideBar extends Component {
  constructor() {
    super();
    this.state={
      bool0:true,
      bool1:false,
      bool2:false,
      bool3:false,
      bool4:false,
      bool5:false,
    }
  }

  renderBool0 = () => {
    this.setState({ bool0:true,
                    bool1:false,
                    bool2:false,
                    bool3:false,
                    bool4:false,
                    bool5:false },()=>{this.props.navigation.navigate("Profile")})
  }

  renderBool1 = () => {
    this.setState({ bool0:false,
                    bool1:true,
                    bool2:false,
                    bool3:false,
                    bool4:false,
                    bool5:false },()=>{this.props.navigation.navigate("Settings")})
  }
  renderBool2 = () => {
    this.setState({ bool0:false,
                    bool1:false,
                    bool2:true,
                    bool3:false,
                    bool4:false,
                    bool5:false },()=>{this.props.navigation.navigate("Subscription")})
  }
  renderBool3 = () => {
    this.setState({ bool0:false,
                    bool1:false,
                    bool2:false,
                    bool3:true,
                    bool4:false,
                    bool5:false },()=>{this.props.navigation.navigate("Help")})
  }
  renderBool4 = () => {
    this.setState({ bool0:false,
                    bool1:false,
                    bool2:false,
                    bool3:false,
                    bool4:true,
                    bool5:false },()=>{this.props.navigation.navigate("PurchaseDome")})
  }
  renderBool5 = () => {
    this.setState({ bool0:false,
                    bool1:false,
                    bool2:false,
                    bool3:false,
                    bool4:false,
                    bool5:true },()=>{this.props.navigation.navigate("About")})
  }

  render() {
    return (
           <View>
                <View style={{borderBottomColor:'#f2f2f2',borderBottomWidth:1}}/>
                <ScrollView>
                    <TouchableOpacity style={[styles.touchStyle,{ backgroundColor: this.state.bool0 == true ? "#800000" :'white' }]}
                                      onPress={this.renderBool0}>
                           <Text style={[{ color: this.state.bool0 == false ? '#800000' : 'white' },styles.textStyles]}>Profile</Text>
                    </TouchableOpacity>
                    <View style={{borderBottomColor:'#f2f2f2',borderBottomWidth:1}}/>

                    <TouchableOpacity style={[styles.touchStyle,{ backgroundColor: this.state.bool1 == true ? "#800000" :'white' }]}
                                      onPress={this.renderBool1}>
                             <Text style={[{ color: this.state.bool1 == false ? '#800000' : 'white' },styles.textStyles]}>Settings</Text>
                    </TouchableOpacity>
                    <View style={{borderBottomColor:'#f2f2f2',borderBottomWidth:1}}/>

                    <TouchableOpacity style={[styles.touchStyle,{ backgroundColor: this.state.bool2 == true ? "#800000" :'white' }]}
                                      onPress={this.renderBool2}>
                             <Text style={[{ color: this.state.bool2 == false ? '#800000' : 'white' },styles.textStyles]}>Manage Subscription</Text>
                    </TouchableOpacity>
                    <View style={{borderBottomColor:'#f2f2f2',borderBottomWidth:1}}/>

                    <TouchableOpacity style={[styles.touchStyle,{ backgroundColor: this.state.bool3 == true ? "#800000" :'white' }]}
                                      onPress={this.renderBool3}>
                              <Text style={[{ color: this.state.bool3 == false ? '#800000' : 'white' },styles.textStyles]}>Help & Support</Text>
                    </TouchableOpacity>
                    <View style={{borderBottomColor:'#f2f2f2',borderBottomWidth:1}}/>

                    <TouchableOpacity style={[styles.touchStyle,{ backgroundColor: this.state.bool4 == true ? "#800000" :'white' }]}
                                      onPress={this.renderBool4}>
                             <Text style={[{ color: this.state.bool4 == false ? '#800000' : 'white' },styles.textStyles]}>Purchase Dome</Text>
                    </TouchableOpacity>
                    <View style={{borderBottomColor:'#f2f2f2',borderBottomWidth:1}}/>

                    <TouchableOpacity style={[styles.touchStyle,{ backgroundColor: this.state.bool5 == true ? "#800000" :'white' }]}
                                      onPress={this.renderBool5}>
                             <Text style={[{ color: this.state.bool5 == false ? '#800000' : 'white' },styles.textStyles]}>About Us</Text>
                    </TouchableOpacity>
                    <View style={{borderBottomColor:'#f2f2f2',borderBottomWidth:1}}/>
            </ScrollView>
        </View>
         
    );
  }
}

const styles = StyleSheet.create({
    touchStyle:{
      backgroundColor:'white',
      height:50,
      width:'100%',
    },
    textStyles:{
      textAlign:'center',
      paddingTop:12
    }
  })