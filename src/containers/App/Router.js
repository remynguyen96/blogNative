import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Homepage } from '../Homepage';
import { Memory } from '../Memory';

export const RootRouter = createBottomTabNavigator(
  {
    Homepage: {
      screen: Homepage,
      navigationOptions: {
        title: 'Homepage App',
        tabBarLabel: 'Homepage',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={24} color={tintColor} />
        ),
      }
    },
    Memory: {
      screen: Memory,
      navigationOptions: {
        title: 'Memory App',
        tabBarLabel: 'Memory',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="heartbeat" size={24} color={tintColor} />
        ),
      }
    },
  },
  {
    initialRouteName: 'Homepage',
    order: ['Homepage', 'Memory'],
    navigationOptions: {
      tabBarVisible: true,
    },
    tabBarOptions: {
      activeTintColor: '#42FFBA',
      inactiveTintColor: '#70C4A2',
      activeBackgroundColor: '#787E7C',
      labelStyle: {
        fontSize: 12,
        color: '#e5e5e5',
      },
      style: {
        backgroundColor: '#6D7371',
      },
    }
  }
);
