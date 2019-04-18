import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'

//Screens
import Home from './screens/Home';
import CatalogNav from './assets/CatalogNav';
import Cart from './screens/Cart';
import Settings from './screens/AppNavigator';

export default createAppContainer( 
  createBottomTabNavigator(
    {
      //Home
      Home: { 
        screen: Home,
        navigationOptions: {
          tabBarLabel: 'Home',
          tabBarIcon: ({ tintColor }) =>(
            <Icon name="ios-home" color = { tintColor } size={24} />
          )
        } 
      },
      //Catalog
      Catalog: { 
        screen: CatalogNav,
        navigationOptions: {
          tabBarLabel: 'Catalog',
          tabBarIcon: ({ tintColor }) =>(
            <Icon name="ios-search" color = { tintColor } size={24} />
          )
        } 
      },
      //Cart
      Cart: { 
        screen: Cart,
        navigationOptions: {
          tabBarLabel: 'Cart',
          tabBarIcon: ({ tintColor }) =>(
            <Icon name="ios-cart" color = { tintColor } size={24} />
          )
        } 
      },
      //Settings
      Settings: { 
        screen: AppNavigator,
        navigationOptions: {
          tabBarLabel: 'Settings',
          tabBarIcon: ({ tintColor }) =>(
            <Icon name="ios-settings" color = { tintColor } size={24} />
          )
        }
      }
    },
    {
      initialRouteName: 'Home',
      order: ['Home', 'Catalog', 'Cart', 'Settings'],
      navigationOptions: {
        tabBarVisible: true
      },
      tabBarOptions:{
        activeTintColor: 'red',
        inactiveTintColor: 'grey'
      }
    }
  )
)

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 30
  },
  header: {
    fontSize: 12,
    fontFamily: 'Cochin'
  },
  center: {
    fontSize: 12,
    textAlign: 'center' 
  }

})