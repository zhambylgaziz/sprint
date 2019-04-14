import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from '../assets/Header';

export default class Home extends React.Component {
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