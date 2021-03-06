import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'

import Home from './screens/Home';
import CatalogNav from './assets/CatalogNav';
import Cart from './screens/Cart';
import Settings2 from './screens/Settings2'

var config = {
  apiKey: "AIzaSyDzTMFHGS_IUfqea_twqglO19KJji9rg20",
  authDomain: "sprint-bje.firebaseapp.com",
  databaseURL: "https://sprint-bje.firebaseio.com",
  projectId: "sprint-bje",
  storageBucket: "sprint-bje.appspot.com",
  messagingSenderId: "45478792417"
};
firebase.initializeApp(config);

export default createAppContainer( 
  createBottomTabNavigator(
    {
      //Home
      Home: { 
        screen: Home,
        navigationOptions: {
          tabBarLabel: 'Sprint',
          tabBarIcon: ({ tintColor }) =>(
            <Icon name="ios-home" color = { tintColor } size={24} />
          )
        } 
      },
      //Catalog
      Catalog: { 
        screen: CatalogNav,
        navigationOptions: {
          tabBarLabel: 'Каталог',
          tabBarIcon: ({ tintColor }) =>(
            <Icon name="ios-search" color = { tintColor } size={24} />
          )
        } 
      },
      //Cart
      Cart: { 
        screen: Cart,
        navigationOptions: {
          tabBarLabel: 'Корзина',
          tabBarIcon: ({ tintColor }) =>(
            <Icon name="ios-cart" color = { tintColor } size={24} />
          )
        } 
      },
      //Settings
      Settings: { 
        screen: Settings2,
        navigationOptions: {
          tabBarLabel: 'Еще',
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
        activeTintColor: '#A52D38',
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
