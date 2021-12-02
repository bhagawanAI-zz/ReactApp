import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Profile from '../components/DrawerScreens/UserDetails/Profile';
import About from '../components/DrawerScreens/About';
import Settings from '../components/DrawerScreens/Settings';
import PairDome from '../components/StackScreens/PairDome';
import TermsServices from '../components/DrawerScreens/TermsServices';
import Unlock from '../components/StackScreens/Unlock';
import MusicPlayerScreen from '../components/StackScreens/MusicPlayerScreen';
import PurchaseDome from '../components/DrawerScreens/PurchaseDome';
import MusicApp from '../components/Common/MusicPlayer';
import Help from '../components/DrawerScreens/Help';

const Stack = createStackNavigator();

const StackScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={About} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="PairDome" component={PairDome} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="TermsServices" component={TermsServices} />
      <Stack.Screen name="Unlock" component={Unlock} />
      <Stack.Screen name="MusicApp" component={MusicApp} />
      <Stack.Screen name="MusicPlayerScreen" component={MusicPlayerScreen} />
      <Stack.Screen name="PurchaseDome" component={PurchaseDome} />
      <Stack.Screen name="PairDome" component={PairDome} />
    </Stack.Navigator>
  );
};

export default StackScreenNavigator;
