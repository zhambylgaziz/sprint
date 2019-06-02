import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

export default class About extends React.Component {
  static navigationOptions = {
    title: 'О нас',
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
        <Text style={styles.container}> Мы группа энтузиастов разработали мобильное приложение для заказа продуктов с дому для вашего удобства.
              По поводу содрудничества вы можете написать нам на почту sprint@gmail.com или же позвонить нам по телефону
              +7(702)7807808(круглосуточно).
              Если вы хотите узнать как работать с этим приложением, прошу перейдите в вкладку "Помощь"
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
