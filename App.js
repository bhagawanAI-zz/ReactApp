import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BottomTabBar from 'react-navigation-selective-tab-bar';
import { Provider } from 'react-redux';
import store from './src/redux/store';

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
import Creative from './src/components/StackScreens/Creative';
import MusicApp from './src/components/Common/MusicPlayer';
import Clarity from './src/components/StackScreens/Clarity';
import PairDome from './src/components/StackScreens/PairDome';
import Pay from './src/components/StackScreens/Pay';
import SeassionStart from './src/components/StackScreens/SeassionStart';
import More from './src/components/StackScreens/More';
import TermsServices from './src/components/DrawerScreens/TermsServices';
import StartupScreen from './src/components/StartupScreen';
// const HomeScreen = createStackNavigator({
//   Home :  {
//     screen : Home,
//   }
// })

// const DomeScreen = createStackNavigator({
//   Dome : {
//     screen : Dome,
//  }
// })

// const LearnScreen = createStackNavigator({
//   Learn : {
//     screen : Learn,
//   }
// })

// const UseScreen = createStackNavigator({
//   Use : {
//     screen : Use,
// }
// })

// const CommunityScreen = createStackNavigator({
//   Community : {
//     screen : Community,
// },
// })

// const MoreScreen = createStackNavigator({
//   More : {
//     screen : SideMenu
//  }
// })

export const bottomTabs = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
    },
    Dome: {
      screen: Dome,
    },
    Learn: {
      screen: Learn,
    },
    Use: {
      screen: Use,
    },
    Community: {
      screen: Community,
    },
    More: {
      screen: SideMenu,
    },
  },
  {
    initialRouteName: 'Home',
    tabBarComponent: (props) => {
      return (
        <BottomTabBar
          {...props}
          display={['Dome', 'Learn', 'Use', 'Community', 'More']}
        />
      );
    },
  }
);

// ({ navigation }) => ({
//   headerLeft : ()=> <FontAwesome5 name="bars" color="black" style={{ paddingLeft:16 }} size={20} onPress={navigation.openDrawer}/>
// })

const Stackscreens = createStackNavigator({
  HomeScreen: {
    screen: bottomTabs,
    navigationOptions: { headerShown: false },
  },

  Intentions: { screen: Intentions },
  PostSession: { screen: PostSession },
  Session: { screen: Session },
  SessionPlayer: { screen: SessionPlayer },
  EditProfile: { screen: EditProfile },
  Profile: { screen: Profile },
  About: { screen: About },
  Help: { screen: Help },
  PurchaseDome: { screen: PurchaseDome },
  Settings: { screen: Settings },
  Subscription: { screen: Subscription },
  Creative: { screen: Creative },
  MusicApp: { screen: MusicApp },
  Clarity: { screen: Clarity },
  PairDome: { screen: PairDome },
  Pay: { screen: Pay },
  SeassionStart: { screen: SeassionStart },
  More: { screen: More },
  TermsServices: { screen: TermsServices },
});

const Auth = createStackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: { headerShown: false },
  },
  Login: {
    screen: Login,
    navigationOptions: { headerShown: false },
  },
  Registration: {
    screen: Registration,
    navigationOptions: { headerShown: false },
  },
});

const Drawerscreens = createDrawerNavigator(
  {
    Stackscreens: { screen: Stackscreens },
  },
  {
    contentComponent: (props) => <SideMenu {...props} />,
    drawerBackgroundColor: 'white',
    drawerPosition: 'left',
    drawerWidth: Dimensions.get('window').width * 0.7,
  }
);

const AppContainer = createAppContainer(
  createSwitchNavigator({
    Startup: StartupScreen,
    AuthStack: Auth,
    AppStack: Drawerscreens,
  })
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
