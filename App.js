import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Dimensions } from 'react-native'
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BottomTabBar from "react-navigation-selective-tab-bar";
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';


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
// import Meditation from './src/components/StackScreens/Learn/Meditation';
// import Breathwork from './src/components/StackScreens/Learn/Breathwork';
// import SDMeditation from './src/components/StackScreens/Learn/SDMeditation';
// import SoundHealing from './src/components/StackScreens/Learn/SoundHealing';



const HomeScreen = createStackNavigator({
  Home :  {
    screen : Home,
  }   
})

const DomeScreen = createStackNavigator({
  Dome : {
    screen : Dome,  
 }  
})

const LearnScreen = createStackNavigator({
  Learn : {
    screen : Learn,
  }
})

const UseScreen = createStackNavigator({
  Use : {
    screen : Use,
} 
})

const CommunityScreen = createStackNavigator({
  Community : {
    screen : Community,
}, 
})

const MoreScreen = createStackNavigator({
  More : {
    screen : SideMenu
 }
})


export const bottomTabs = createBottomTabNavigator({
  Home :  {
      screen : HomeScreen,
  },
  Dome : {
     screen : DomeScreen,
  },
  Learn : {
    screen : LearnScreen,
  },
  Use : {
      screen : UseScreen,
  },
  Community : {
      screen : CommunityScreen,
  },
  More : {
     screen : MoreScreen
  }
},{
   initialRouteName : 'Home',
   tabBarComponent : props => {
     return(
       <BottomTabBar {...props} display={['Dome','Learn','Use','Community','More']}  />
     )
   } 
   

})

// ({ navigation }) => ({
//   headerLeft : ()=> <FontAwesome5 name="bars" color="black" style={{ paddingLeft:16 }} size={20} onPress={navigation.openDrawer}/>
// })

 const Stackscreens = createStackNavigator({
 
                      
      HomeScreen          : { 
                        screen : bottomTabs,
                        navigationOptions : { headerShown : false }
                      },
                      
      Intentions    : { screen : Intentions },
      PostSession   : { screen : PostSession },
      Session       : { screen : Session },
      SessionPlayer : { screen : SessionPlayer },
      EditProfile   : { screen : EditProfile },
      Profile       : { screen : Profile },
      About         : { screen : About },
      Help          : { screen : Help },
      PurchaseDome  : { screen : PurchaseDome },
      Settings      : { screen : Settings  },
      Subscription  : { screen : Subscription }, 

    });



    const Auth = createStackNavigator({
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
      })


      // const LearnTabs = createMaterialTopTabNavigator({
      //    Meditation:{
      //      Screen : Meditation
      //    },
      //    Breathwork:{
      //      Screen : Breathwork
      //    },
      //    SomaDomeMeditation:{
      //      Screen : SDMeditation
      //    },
      //    SoundHealing:{
      //      Screen : SoundHealing
      //    }
      //  }) 


  const Drawerscreens = createDrawerNavigator({

      Stackscreens : { screen : Stackscreens },
      
     },
     {
        contentComponent : props => <SideMenu {...props}/>,
        drawerBackgroundColor:'white',
        drawerPosition: "left",
        drawerWidth: Dimensions.get("window").width * 0.7,
     });

  const AppContainer = createAppContainer(
                              createSwitchNavigator({
                                 AuthStack :  Auth , 
                                 AppStack  :  Drawerscreens
                              })
     );

  class App extends Component{
      render(){
        return(
              <AppContainer/>
        )
      }
  }

 export default App;