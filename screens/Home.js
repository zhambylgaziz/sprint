import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from '../assets/Header';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
export default class Home extends React.Component {
  render() {
    return (
      <View style = { styles.container }>
        <Card
          title='Добро пожаловать в Sprint!'
          image={require('../assets/img/open.jpg')}>
          <Text style={{marginBottom: 10}}>
            Делайте заказы прямо сейчас
          </Text>
          <Button
            icon={<Icon name='menu' color='#ffffff' />}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='Каталог'
          />
        </Card>
      </View>
    );
  }
}

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