import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

export default class Settings extends React.Component{
    render() {
      return (
        <View style={styles.container}>
        {
              list.map((item, i) => (
             <ListItem button onPress ={()=> this.props.navigation.navigate(item.page)}
             key={i}
             title={item.name}
        />
        ))
    }
    </View>
   )
  }
 }
  const list = [
      {
        name: 'Войти',
        page: 'Login'
      },
      {
        name: 'Зарегистрироваться',
        page: 'Register'
      }
    ,
    {
      name: 'О нас',
      page: 'About'
    },
    {
      name: 'Отзывы',
      page: 'Feedback'
    },
    {
      name: 'Контакты',
      page: 'Contact'
    },
  ]
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
