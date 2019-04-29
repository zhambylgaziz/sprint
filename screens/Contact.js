import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Catalog extends React.Component {
  static navigationOptions = {
    title: 'Контакты',
  };
  render() {
    return (
      <View style = { styles.container } > 
        <Text> 
          Sprint dev
        </Text>
        <Text style = { styles.left }>
          Kelsingazin Yerassyl
          8(777)2579952
        </Text>
        <Text style = { styles.left }>
          Kenges Bainur
          8(702)9933227
        </Text>
        <Text style = { styles.left }>
          Gaziz Zhambyl
          8(700)0881551
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
  },
  left: {
    fontSize: 12,
    textAlign: 'left'
  }

})