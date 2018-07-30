
import React, { Component } from "react";
//import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createMaterialTopTabNavigator , createStackNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import Planner from './Planner/Planner';
import MyCalendar from './Calendar/Calendar';
import Profile from './Profile/Profile';


const AppTabNavigator = createMaterialTopTabNavigator({
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-person" color={tintColor} size={24} />
        )
      }
    },
    Planner: {
      screen: Planner,
      navigationOptions: {
        tabBarLabel: 'Planner',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-clipboard" color={tintColor} size={24} />
        )
      }
    },
    Calendar: {
      screen: MyCalendar,
      navigationOptions: {
        tabBarLabel: 'Calendar',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-calendar" color={tintColor} size={24} />
        )
      }
    }
    },     
    {
      initialRouteName: 'Planner',
      tabBarPosition: 'bottom',
      swipeEnabled: true,
      animationEnabled: false,
      tabBarOptions: {
        activeTintColor: '#52e2ab',
        inactiveTintColor: '#696372',
        showLabel:false ,
        showIcon: true,
        style: {
          backgroundColor: '#181320',
          //borderTopWidth: 0.5,
          //borderTopColor: 'grey'
        },
        indicatorStyle: {
          height: 0
        }
    }
  })


export default AppTabNavigator;
  