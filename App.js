import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Dimensions } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { FontAwesome5 } from '@expo/vector-icons';
/* screens path */
import Login from './src/components/Auth/Login';
import Profile from './src/components/DrawerScreens/UserDetails/Profile';
import EditProfile from './src/components/DrawerScreens/UserDetails/EditProfile';
import About from './src/components/DrawerScreens/About';
import Help from './src/components/DrawerScreens/Help';
import PurchaseDome from './src/components/DrawerScreens/PurchaseDome';
import Settings from './src/components/DrawerScreens/Settings';
import Subscription from './src/components/DrawerScreens/Subscription';
import Community from './src/components/StackScreens/Community';
import Dome from './src/components/StackScreens/Dome';
import Home from './src/components/StackScreens/Home';
import Intentions from './src/components/StackScreens/Intentions';
import Learn from './src/components/StackScreens/Learn';
import PostSession from './src/components/StackScreens/PostSession';
import Session from './src/components/StackScreens/Session';
import SessionPlayer from './src/components/StackScreens/SessionPlayer';
import Use from './src/components/StackScreens/Use';
import SideMenu from './src/components/DrawerNav/sideBar';
import Registration from './src/components/Auth/Register';
import Welcome from './src/components/Auth/Welcome';

 const Stackscreens = createStackNavigator({
 
      Welcome       : { 
                       screen : Welcome,
                       navigationOptions: { headerShown : false } 
                      },
      Login         : { 
                       screen : Login,
                       navigationOptions: { headerShown : false } 
                      },
      Registration  : {
                       screen : Registration,
                       navigationOptions: { headerShown : false }  
                      },                
      Home          : { 
                      screen : Home,
                      navigationOptions : ({ navigation }) => ({
                            headerLeft : ()=> <FontAwesome5 name="bars" color="black" style={{ paddingLeft:16 }} size={20} onPress={navigation.openDrawer}/>
                        })
                      },
      Community     : { screen : Community },
      Dome          : { screen : Dome },
      Intentions    : { screen : Intentions },
      Learn         : { screen : Learn },
      PostSession   : { screen : PostSession },
      Session       : { screen : Session },
      SessionPlayer : { screen : SessionPlayer },
      Use           : { screen : Use },
      EditProfile   : { screen : EditProfile },
      Profile       : { screen : Profile },
      About         : { screen : About },
      Help          : { screen : Help },
      PurchaseDome  : { screen : PurchaseDome },
      Settings      : { screen : Settings  },
      Subscription  : { screen : Subscription }, 

    },
    {
      initialRouteName : "Welcome"
    });


  const Drawerscreens = createDrawerNavigator({

      Stackscreens : { screen : Stackscreens }
   
     },
     {
        contentComponent : props => <SideMenu {...props}/>,
        drawerBackgroundColor:'white',
        drawerPosition: "left",
        drawerWidth: Dimensions.get("window").width * 0.7,
     });

  const AppContainer = createAppContainer( Drawerscreens );

  class App extends Component{
      render(){
        return(
              <AppContainer/>
        )
      }
  }

 export default App;