import React, { Component } from 'react';
import { StyleSheet, Text, View,ScrollView,Image } from 'react-native';

export default class Contact extends React.Component {
  static navigationOptions = {
    title: 'Контакты',
  };
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
      <View style={styles.logoContainer}>
         <Image
           style={styles.logo}
           source={require('../assets/sprint.png')}
           />
       </View>
        <Text style={styles.container}>
            Наши контакты для дальнейшего содрудничества вы можете найти здесь.
        </Text>
        <Text style={styles.container}>Газиз Жамбыл: Разработчик. 87029461245
        </Text>
        <Text style={styles.container}>Кенес Байнур: хуипинатель лучший в своем деле. 87476214569
        </Text>
        <Text style={styles.container}>Келсингазин Ерасыл: Главный всех главных, Ник Фьюри нашей команды.
        </Text>
      </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    fontFamily: 'AvenirNext-Regular'
  },
  logo:{
  width: 200,
  height: 200
},
title:{
  color: 'black',
  marginTop: 10,
  width: 160,
  textAlign: 'center',
  opacity: 0.9
},
logoContainer:{
  alignItems: 'center',
  flexGrow: 1,
  justifyContent: 'center',
  marginBottom: 5
}
});
