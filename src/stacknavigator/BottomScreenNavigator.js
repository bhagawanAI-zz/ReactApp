import React from 'react';
import {View, Text} from 'react-native';
import BottomTabBar from 'react-navigation-selective-tab-bar';

import Community from '../components/StackScreens/Community';
import FindDome from '../components/StackScreens/Dome';
import Home from '../components/StackScreens/Home';
import Learn from '../components/StackScreens/Learn';
import More from '../components/StackScreens/More';
import Use from '../components/StackScreens/Use';

const Tab = createBottomTabNavigator();

const BottomScreenNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#white',
        tabBarInactiveTintColor: '#fff',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <BottomTabBar {...props} display={['Home']} background="#b8b8bb" />
          ),
        }}
      />
      <Tab.Screen
        name="Find"
        component={FindDome}
        options={{
          tabBarLabel: 'Find',
          tabBarIcon: ({color, size}) => (
            <BottomTabBar {...props} display={['FIND']} background="#b8b8bb" />
          ),
        }}
      />
      <Tab.Screen
        name="Use"
        component={Use}
        options={{
          tabBarLabel: 'Find',
          tabBarIcon: ({color, size}) => (
            <BottomTabBar {...props} display={['FIND']} background="#b8b8bb" />
          ),
        }}
      />
      <Tab.Screen name="Learn" component={Learn} />
      <Tab.Screen name="Connect" component={Community} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
};

export default BottomScreenNavigator;
