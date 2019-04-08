import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './assets/Header';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'

export class Home extends React.Component {
  render() {
    return (
      <View style = { styles.container }>
        <Header title = {'Header'} />
        <Text style = { styles.center }>
          This is an home
        </Text>
      </View>
    );
  }
}

export class Settings extends React.Component {
  render() {
    return (
      <View style = { styles.container }> 
        <Text style = { styles.center } > 
          This is an settings page  
        </Text>
      </View>
    );
  }
}

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
      //Settings
      Settings: { 
        screen: Settings,
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
      order: ['Home', 'Settings'],
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